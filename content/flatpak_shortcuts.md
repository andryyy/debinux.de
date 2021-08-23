Title: Flatpak-Anwendungen aus CLI verwenden
Category: Linux
Date: 2021-08-23 10:46
Tags: linux, flatpak
Authors: André Peters

Für mich primär aus einem Grund wichtig: Autostart und Keyboard Shortcuts.

Runtimes interessieren uns herzlich wenig, daher listen wir nur Anwendungen auf.

Der Scope ist per Standard `--system`. Anwendungen, die in den User-Scope installiert wurden, seht ihr mit `--user`.

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

Die Application ID ist relevant. Wir starten eine Anwendung wie folgt:

```
flatpak run org.flameshot.Flameshot
```

Parameter können beliebig angehangen werden. Im Fall von Flameshot etwa "gui":

```
flatpak run org.flameshot.Flameshot gui
```

Kann auch als Alias verwendet (`alias flameshot="flatpak run org.flameshot.Flameshot gui"`) und in die `~/.bashrc` eingepflegt werden. Oder welcher Shell ihr auch treu seid...
