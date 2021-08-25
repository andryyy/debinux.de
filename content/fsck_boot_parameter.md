Title: fsck via Boot-Parameter
Category: Linux
Date: 2021-08-25 11:04
Tags: linux, fsck
Authors: André Peters

Ein Quickie.

Einen FS-Check sowie die Reparatur erzwingen. Geht mit `touch /forcefsck`, klar, oft viel angenehmer: Über die Boot-Parameter des Kernels.

In Grub den Boot-Parameter ändern und `fsck.mode=force fsck.repair=yes` anhängen, booten, happy sein.
