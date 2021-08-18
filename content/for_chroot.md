Title: for-loop zum Mounten vor chroot
Category: Linux
Date: 2021-04-01 17:35
Tags: linux
Authors: André Peters

```
# for i in proc sys dev; do mount --rbind /$i /mnt/$i ; done
```

Scharmlos geklaut aus dem SUSE Wiki. :)
