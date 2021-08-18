Title: IPv6 Prefix via Nginx, LUA und einem einfachen Bash-Script ausgeben (ohne PHP)
Category: Linux
Date: 2021-04-30 23:33
Tags: linux, nginx, lua, ipv6
Authors: André Peters

Hi,

ein Snippet (mal wieder). Daher ganz kurz und knapp.

Unter Debian benötigt ihr die Pakete `nginx-full` sowie `subnetcalc`, da hier die entsprechenden LUA Module vorhanden sind.
Wer ganz wild drauf ist, kompiliert es sich nach... :)

In der entsprechenden Site-Konfiguration:

```
  location / {
    default_type 'text/plain';
    content_by_lua_block {
        local handle = io.popen("/opt/ip6_prefix.sh")
        local result = handle:read("*a")
        handle:close()
        ngx.header.content_type = "text/plain"
        ngx.say(result)
    }
  }
```

Das Script <b>/opt/ip6_prefix.sh</b>:

```
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
subnetcalc $(curl -6 ip6.mailcow.email -s) 64 -n | grep Network | cut -d= -f2 | tr -d '[:space:]'
```

Anschließend als ausführbar markieren durch `chmod +x /opt/ip6_prefix.sh`
