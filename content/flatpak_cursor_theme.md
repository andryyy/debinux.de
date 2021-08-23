Title: Flatpak Cursor Theme lesbar machen
Category: Linux
Date: 2021-08-23 20:31
Tags: linux, flatpak
Authors: André Peters

Ein Quickie...

App-ID finden:

```
~$ flatpak list --columns=name,application --app
Name                          Application ID
Delta Chat                    chat.delta.desktop
Pinta                         com.github.PintaProject.Pinta
PDF Arranger                  com.github.jeromerobert.pdfarranger
Flameshot                     org.flameshot.Flameshot
KeePassXC                     org.keepassxc.KeePassXC
Telegram Desktop              org.telegram.desktop
```

Im User-Kontext Zugriff auf `~/.icons` geben: `flatpak --user override org.telegram.desktop --filesystem=/home/$USER/.icons/:ro`

