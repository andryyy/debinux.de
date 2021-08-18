Title: Dateiberechtigungen sichern
Category: Linux
Date: 2021-02-16 11:12
Tags: linux, acl, backup
Authors: André Peters

Ein kleiner Helfer, der gerne beim Backup vergessen wird: `getfacl` - _get file acl_.
Das Tool sichert die Dateiberechtigungen (auch rekursiv: -R):

```
getfacl -R /ein/pfad > acl_ein_pfad_$(date +"%d.%m.%Y_%H%M").acl
```

Und zurück:

```
setfacl --restore=datei.acl
```

Für Debian und Ubuntu lautet der Paketname "acl".
