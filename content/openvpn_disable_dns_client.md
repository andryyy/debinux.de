Title: OpenVPN-Clients: DNS-Einstellungen und Routen ignorieren
Category: Linux
Date: 2021-08-22 18:05
Modified: 2021-08-22 18:05
Tags: linux, openvpn, windows, dns
Authors: André Peters

Es kann durchaus Vorteile haben viele oder gar alle Anfragen über einen vertrauten Tunnel zu schicken.

Bevorzugen und empfehlen möchte ich, die weiterzuleitenden Zonen oder Hosts selber auszuwählen und an entsprechender Stelle einzupflegen (Stichwort DNS-Overrides).

Weiterhin ist es ratsam nicht den gesamten Traffic über ein VPN-Profil zu jagen und stattdessen auszuwählen, welche Routen man tatsächlich haben möchte.

In einer OpenVPN-Konfigurationsdatei hängt ihr **ab Version 2.4** Folgendes an, um DNS-Servervorgaben zu unterbinden: `pull-filter ignore "dhcp-option DNS"`

"For the sake of completeness" noch das Filtern der Routen... :)

```
pull-filter ignore redirect-gateway
pull-filter ignore "route "
```

Es ist sogar möglich einzelne Routen - falls vorhanden - zu akzeptieren:

```
pull-filter accept "route 192.168."
```

Ansonsten nehmt ihr den manuellen Weg und fügt die Routen selber hinzu.

Die Sache erübrigt sich natürlich, wenn ihr den VPN-Server selber in der Hand habt...
