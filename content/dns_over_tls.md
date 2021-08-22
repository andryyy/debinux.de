Title: DNS über TLS
Category: Linux
Date: 2021-08-22 16:44
Modified: 2021-08-22 16:44
Tags: linux, dns, tls, DoT
Authors: André Peters

Neben Suchanfragen via GET-Methode gehört auch DNS zu einem ewigen Klassiker für Daten-Leaks.

Da keiner Netzwerkschnüffler mag, verwendet man heute DNS-over-TLS. Neben einem TLS-Kanal auf Port 853 funktioniert das übrigens auch mit etwas mehr Overhead über HTTPS, es scheint mir aber so, als sie hat sich alles in Richtung DNS-over-TLS entwickelt, hm, abwarten.

Eine Liste zu pflegen wäre zu viel Aufwand und redundant. Schaut einfach [hier](https://www.startpage.com/sp/search?query=dns-over-tls+servers&language=deutsch).

Privat vertraue ich meinem Netzwerk bis zur OPNsense. Ab hier geht es weiter via DNS-over-TLS. Mit OPNsense in der Version 21.7 gibt es nun auch die Möglichkeit einen Servernamen zu validieren: https://twitter.com/DKaufmann_/status/1421023327762751489

Da Mozilla DNS-over-HTTPS anstrebt, findet ihr in den Verbindungseinstellungen die Möglichkeit einen DNS-over-HTTPS Server zu hinterlegen, schöne Sache!
