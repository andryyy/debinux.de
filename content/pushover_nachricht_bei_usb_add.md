Title: Pushover Benachrichtigung bei USB Anschluss
Category: Linux, Python
Date: 2022-04-08 08:58
Modified: 2022-04-08 08:58
Tags: linux, debian, usb, pushover
Authors: André Peters

Kommt her, meine Kinder, und nehmt euch einen Aluhut.

Mal nicht zu Hause und besorgt, dass jemand den Computer infiltriert?

Ganz schnell und easy, so getestet auf einem Ubuntu Jammy:

```
sudo apt install python3-pip
pip install pyudev
```

Eine Datei `/usr/local/sbin/pyudev_notify.py` anlegen:

```
#!/usr/bin/env python3

import pyudev
import http.client
import urllib

context = pyudev.Context()
monitor = pyudev.Monitor.from_netlink(context)
monitor.filter_by(subsystem='usb')

for device in iter(monitor.poll, None):
  if device.action == 'add':
    conn = http.client.HTTPSConnection("api.pushover.net:443")
    conn.request("POST", "/1/messages.json",
      urllib.parse.urlencode({
          "token": "APP_TOKEN",
          "user": "USER_TOKEN",
          "message": f"USB Change @ XY: {device}",
      }), {"Content-type": "application/x-www-form-urlencoded"})
    conn.getresponse()

```

Die Werte `APP_TOKEN` und `USER_TOKEN` abändern, ebenso die Nachricht anpassen.

Das Script kann natürlich wesentlich verbessert werden, es ist ziemlich roh.

Die Datei `/usr/local/sbin/pyudev_notify.py` noch durch `chmod 700 /usr/local/sbin/pyudev_notify.py` vor fremden Blicken schützen und ausführbar markieren.

Anschließend den Dienst anlegen:

Eine Datei `/etc/systemd/system/pyudev_notify.service` anlegen:

```
[Unit]
Description=pyudev_notify
After=network-online.target
Wants=network-online.target systemd-networkd-wait-online.service

[Service]
Type=simple
ExecStart=/usr/local/sbin/pyudev_notify.py

[Install]
WantedBy=multi-user.target
```

Nun den Dienst aktivieren und starten: `systemctl enable --now pyudev_notify.service`
