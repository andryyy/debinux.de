Title: GoCryptFS kompilieren (für HW-beschleunigtes AES) und Systemd Dienst einrichten
Category: Linux
Date: 2020-08-10 12:23
Tags: linux, crypt
Authors: André Peters

**Wichtig**: Nach der Initialisierung den Master-Key sicher speichern!

```
# 1.
yum install openssl-devel fuse

# 2.
go get -d github.com/rfjakob/gocryptfs
cd $(go env GOPATH)/src/github.com/rfjakob/gocryptfs
./build.bash
cp gocryptfs /usr/local/bin/

# 3.
mkdir -p /data/{crypted,decrypted}

# 4.
if [ ! -f /data/crypted/gocryptfs.conf ]; then
  if ! gocryptfs -init /data/crypted; then
    echo "cannot init /data/crypted directory, skipping"
  fi
else
  echo "/data/crypted is an initialized gocryptfs directory"
fi

# 5.
systemctl stop gocryptfs

# 6.
cat << 'EOF' > /etc/systemd/system/gocryptfs.service
[Unit]
Description=gocryptfs Mount Unit
Requires=network.target local-fs.target
After=network.target local-fs.target
[Service]
Type=forking
ExecStart=/usr/local/bin/gocryptfs -extpass "systemd-ask-password GoCryptFS:" -allow_other /data/crypted/ /data/decrypted/
Restart=on-failure
RestartSec=5
[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
# Do not start on boot
systemctl disable gocryptfs

# 7.
until systemctl start gocryptfs; do
  sleep 1
done
```
