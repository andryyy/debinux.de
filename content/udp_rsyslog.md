Title: Rsyslog: via UDP erhaltene Logs in eine Datei schreiben
Category: Linux
Date: 2020-05-29 15:45
Tags: linux, rsyslog
Authors: André Peters

```
$template RemoteUDP,"/var/log/remote-udp.log"
:inputname, isequal, "imudp" ?RemoteUDP
& ~
```

`& ~` beendet die Verarbeitung der Regel.
