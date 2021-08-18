Title: Template Zammad Reverse Proxy mit Apache
Category: Linux
Date: 2020-01-16 12:10
Tags: linux, apache2, zammad
Authors: André Peters

```
<VirtualHost *:80>
  ServerName ticket.domain.tld
  RewriteEngine on
  RewriteCond %{HTTPS} !=on
  RewriteRule ^/?(.*) https://%{HTTP_HOST}/$1 [R=301,L]
  ProxyPass / http://127.0.0.1:8090/
  ProxyPassReverse / http://127.0.0.1:8090/
  ProxyPreserveHost On
  ProxyAddHeaders On
  RequestHeader set X-Forwarded-Proto "http"
</VirtualHost>
<VirtualHost *:443>
  ServerName ticket.domain.tld
  ProxyPass /ws ws://127.0.0.1:8090/ws
  ProxyPassReverse /ws ws://127.0.0.1:8090/ws
  ProxyPass / http://127.0.0.1:8090/
  ProxyPassReverse / http://127.0.0.1:8090/
  ProxyPreserveHost On
  ProxyAddHeaders On
  RequestHeader set X-Forwarded-Proto 'https'env=HTTPS
  RequestHeader set X-Forwarded-Ssl on
  SSLCertificateFile /etc/letsencrypt/live/ticket.domain.tld/fullchain.pem
  SSLCertificateKeyFile /etc/letsencrypt/live/ticket.domain.tld/privkey.pem
Include /etc/letsencrypt/options-ssl-apache.conf
</VirtualHost>
```
