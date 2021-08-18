Title: Rspamd: Subject umschreiben und Reply-To hinzufügen
Category: Linux
Date: 2019-12-28 22:26
Tags: linux, rspamd
Authors: André Peters

Ändert Subject auf "[Tag] Altes-Subject" und fügt einen Reply-To "moo@moo.com" hinzu.

Die alten Headerfelder werden vorher entfernt.

Nur ein Snippet.

`remove_headers { X = 0 }` sollte alle Header entfernen, nicht nur den ersten. Beim Subject und Reply-To eher unnötig.

```
rspamd_config:register_symbol({
  name = 'SUBJECT_REWRITE_ADD_HEADER',
  type = 'postfilter',
  callback = function(task)
    local util = require("rspamd_util")
    local rspamd_logger = require "rspamd_logger"
    local mailcow_domain = task:get_symbol("RCPT_MAILCOW_DOMAIN")
    if mailcow_domain then
      local tag = "Tag"
      rspamd_logger.infox("add fancy list header")
      local sbj = task:get_header('Subject')
      new_sbj = '=?UTF-8?B?' .. tostring(util.encode_base64('[' .. tag .. '] ' .. sbj)) .. '?='
      task:set_milter_reply({
        remove_headers = {
          ['Subject'] = 1,
          ['Reply-To'] = 1,
        },
        add_headers = {
          ['Subject'] = new_sbj,
          ['Reply-To'] = 'moo@moo.com'
        }
      })
    end
  end,
  priority = 11
})
```
