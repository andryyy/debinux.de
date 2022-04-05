Title: Ein paar Ubuntu Dock Quickies mit gsettings
Category: Linux, Ubuntu
Date: 2022-04-05 07:10
Tags: linux, gsettings, dock
Authors: André Peters

Etwas, an das ich mich bei Ubuntu nie gewöhnt habe, ist das Verhalten der Icons im Dock per Standard.

Vielleicht ist das Folgende für den ein oder anderen Leser ebenfalls brauchbar.

```
# Den Modifier auf ALT zurückstellen (sonst: Super)
gsettings set org.gnome.desktop.wm.preferences mouse-button-modifier '<Alt>'

# Fenster mit Modifier und rechter Maustaste in ihrer Größe ändern
gsettings set org.gnome.desktop.wm.preferences resize-with-right-button true

# Durch einen Klick auf ein Icon im Dock die App minimieren
gsettings set org.gnome.shell.extensions.dash-to-dock click-action 'minimize'

# Durch Scrollen auf einem Icon im Dock durch offene Fenster navigieren
gsettings set org.gnome.shell.extensions.dash-to-dock scroll-action 'cycle-windows'

# Lediglich Icons des aktiven Desktops anzeigen
gsettings set org.gnome.shell.extensions.dash-to-dock isolate-workspaces true
```

