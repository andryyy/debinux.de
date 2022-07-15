Title: sudo: Aliases beibehalten (Beispiel: `sudo ll`)
Category: Linux
Date: 2022-07-15 08:15
Tags: ubuntu, sudo
Authors: André Peters

Nervt: Aliases werden nicht via sudo interpretiert.

Ein Workaround dafür ist, einen Alias für `sudo` zu setzen, etwa in der Datei `/etc/bash.bashrc` in Ubuntu/Debian oder lokal via `~/bashrc`:

```
alias sudo='sudo '
```

Warum das funktioniert, ist [hier](https://unix.stackexchange.com/a/349290) beschrieben.
