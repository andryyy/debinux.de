Title: Apple iCloud Mail als Relay in OPNsense verwenden
Category: Firewall
Date: 2022-07-12 07:15
Tags: opnsense, apple, icloud, mail
Authors: André Peters

Bei Verwendung von iCloud als E-Mail-Relay auf einer OPNsense ist eine Umschreibung des Absenders notwendig, sollte der interne Postfix-Service der Firewall zum Einsatz kommen.

Vorab muss eine App in den Apple-Account Einstellungen erstellt werden, siehe [hier](https://support.apple.com/de-de/HT204397).

Apple prüft den Envelope-From in der SMTP-Session (`MAIL FROM: X`) sowie den From-Header aus dem Inhalt der E-Mail (`From: Ich <ich@woanders>`) auf eine gültige/dem Account zugeordnete E-Mail-Absenderadresse. Ich kann auch unter Verwendung der eigenen Domain nicht jeden belieben Absender @meinedomain verwenden - finde ich gut.

Ich verwende eine eigene Domain, wenig überraschend debinux.de, via Apple Mail und muss daher den Envelope-From als auch den Header auf meine private E-Mail-Adresse `geheim@debinux.de` ändern.

### Services: Postfix: General

- System Hostname
	- Der Hostname des Mailservers, in meinem Fall `opnsense.hai.internal`
- System Domain
	- In meinem Fall `hai.internal`
- System Origin
	- Entspricht dem System Hostnamen `opnsense.hai.internal`
- Trusted Networks
	- Hinzufügen von internem Netzwerk, falls gewünscht, etwa `192.168.2.0/24`
- Smart Host
	- Für iCloud `[smtp.mail.me.com]:587`
- Enable SMTP Authentication aktivieren
- Authentication Username
  - Entsprechend dem Login für Apps setzen. In den meisten Fällen ist es die me.com E-Mail-Adresse ohne Domain, also etwa `meinbenutzer` bei `meinbenutzer@me.com`
- Authentication Password
  - Entsprechend dem Login des App Passworts setzen

### Services: Postfix: Sender Canonical Rewriting
- Sender Canonical Rewriting (Umschreibung des Senders beim Eingang der E-Mail) Regel erstellen

	Diese Map ist eine **regexp Map** in Postfix.

	- Rewrite From `/^.*@.*\.hai.internal/i`, um alle E-Mails eines Absenders in meiner lokalen Domain umzuschreiben
	- Rewrite To `geheim@debinux.de` - ich verwende wie eingangs erwähnt meine eigene Domain mit iCloud Mail, daher entspricht der Rewrite To `meineadresse@debinux.de`

### Services: Postfix: Header Checks

- Header Checks (Umschreibung des `From:` Headers bei Ausgang) Regel erstellen

	Ebenfalls eine **regexp Map** in Postfix.

	- Expression `/From:.*/ REPLACE From: andre.peters@debinux.de`
	- Filter `while delivering mail`

Andere Einstellungen sind in OPNsense 22.1.10-amd64 nicht zu setzen.

Die E-Mail-Alerts des HAProxys einer OPNsense Firewall werden übrigens auch ohne Rewrites funktionieren, da die Alerts korrekterweise sowohl den Envelope-From als auch den From-Header auf den Wert der in den Einstellungen des Checks definierten E-Mail-Absenderadresse setzen. Puh, was ein Satz.
