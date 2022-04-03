Title: Wenn AnyDesk unter Ubuntu Jammy (Beta) nicht startet
Category: Linux
Date: 2022-04-02 12:54
Modified: 2022-04-03 10:23
Tags: linux, ubuntu, anydesk
Authors: André Peters

...solltet ihr auf eine angepasste Version von AnyDesk für Jammy warten oder eben `libpangox-1.0-0` nachinstallieren.

```
cd
wget http://de.archive.ubuntu.com/ubuntu/pool/universe/p/pangox-compat/libpangox-1.0-0_0.0.2-5ubuntu1_amd64.deb
dpkg -i libpangox-1.0-0_0.0.2-5ubuntu1_amd64.deb
```

Das war's schon.

Das ist nicht die feine Art, denkt dran.

Meist funktioniert es so lange wie kein `autoremove` nach dem Upgrade ausführt wurde.

Sollte AnyDesk trotzdem nicht starten, solltet ihr den Client einfach mal durch das Ausführen des Befehls `anydesk` im Terminal (als Benutzer, nicht als root) starten und auf die Ausgabe achten.
