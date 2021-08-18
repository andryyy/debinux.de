Title: Rspamd: Ratelimit-Überschreitung in Slack Channel teilen
Category: Linux
Date: 2018-12-16 10:49
Tags: linux, rspamd
Authors: André Peters

Hallo,

Long time no read.

Mehr ein Snippet als ein echter Beitrag.

Verwendet wird der der metadata_exporter von Rspamd. Eine Mail wird gesendet, wenn das Ratelimit auslöst und die Mail von einem authentifizierten Benutzer kommt. Das kann im LUA-Script entsprechend angepasst werden.

Hier die "local.d/metadata_exporter.conf":

```
rules {
  RLINFO {
    backend = "send_mail";
    smtp = "localhost";
    smtp_port = 25;
    mail_to = "ratelimit@localhost";
    selector = "ratelimited";
    formatter = "email_alert";
  }
}
custom_select {
  ratelimited = <<EOD
return function(task)
  local ratelimited = task:get_symbol("RATELIMITED")
  local uname = task:get_user()
  if uname and ratelimited then
    return true
  end
  return
end
EOD;
}
```

Und die entsprechende "local.d/ratelimit.conf", um das Info-Symbol zu setzen:

```
info_symbol = "RATELIMITED";
```

In diesem Beispiel pipe ich es via ratelimit@localhost an ein Python-Script, das die Nachricht an einen Slack Channel sendet:

Das Alias sieht dann etwa so aus:

```
ratelimit:      |/usr/local/bin/slack_alert.py
```

Das Python Script `/usr/local/bin/slack_alert.py`:

```
#!/usr/bin/env python

import json
import requests
import sys
import email

webhook_url = 'https://hooks.slack.com/services/AAAAAAAA/BBBBBBB/CCCCCCCCCCCCCCCCCCCCCCC';
slack_data = sys.stdin.read()
if not slack_data:
  print "No data"
  exit

msg = email.message_from_string(slack_data)

response = requests.post(
    webhook_url, json={"text": msg.get_payload()},
    headers={'Content-Type': 'application/json'}
)
if response.status_code != 200:
    raise ValueError(
        'Request to slack returned an error %s, the response is:\n%s'
        % (response.status_code, response.text)
)
```
