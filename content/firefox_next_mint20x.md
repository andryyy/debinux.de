Title: Firefox Next ohne Branding auf Linux Mint
Category: Linux
Date: 2021-08-22 16:21
Modified: 2021-08-22 16:21
Tags: linux, mint, firefox
Authors: André Peters

Ich möchte Firefox Next auf einem Linux Mint 20.x installieren.

Das Mint-Branding vom Firefox sorgte für Überraschungen. Es bewirkt beispielsweise, dass Suchvorschläge mit Startpage nicht funktionieren, was an den Standard "searchplugins" liegen könnte. Sehr ärgerlich, nicht weiter debugged, denn - Punkt zwei: Ich mag den Browser lieber so, wie Mozilla ihn mir gibt. Das soll meine Basis sein.

```
# Firefox schließen und nochmal nachtreten. :)
sudo kill -9 $(pgrep firefox)

# Firefox entfernen
sudo apt purge firefox 'firefox-locale*' xul-ext-ubufox

# Vorhandene lokale Daten löschen, falls gewünscht
cd ; rm -rf .mozilla .cache/mozilla

# Linux Mint Branding entfernen
sudo rm -rf /usr/lib/firefox /usr/lib/firefox-addons/

# Repository hinzufügen
sudo add-apt-repository ppa:mozillateam/firefox-next
sudo apt update

# Firefox aus PPA bevorzugen
sudo bash -c 'cat << EOF > /etc/apt/preferences.d/mozilla-next.pref
Package: *
Pin: release o=LP-PPA-mozillateam-firefox-next
Pin-Priority: 800
EOF'
```
