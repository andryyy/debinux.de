#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'André Peters'
SITENAME = 'debinux.de'
SITEURL = 'https://debinux.de'
#SITETITLE = "debinux.de"
#SITESUBTITLE = "an admins notepad"
FAVICON = SITEURL + "/images/favicon.png"
SITELOGO = SITEURL + "/images/logo.png"
PORT = 8000

STATIC_PATHS = ["extra/custom.css", "extra/keys", "images/"]
EXTRA_PATH_METADATA = {
    "extra/custom.css": {"path": "static/custom.css"},
    "extra/keys/": {"path": "static/keys/"}
}
CUSTOM_CSS = "static/custom.css"

PATH = 'content'

TIMEZONE = 'Europe/Berlin'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
          ('mailcow', 'https://mailcow.email/'),
          ('Servercow', 'https://www.servercow.de/'),
          ('André @ GitHub', 'https://github.com/andryyy'),
          ('Keybase.io/debinux', 'https://keybase.io/debinux'),
          ('PGP Public Key', '/static/keys/0x91DFD03726232297.key')
        )

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

THEME = "/home/andre/virtualenvs/pelican/debinux/themes/flex"

PLUGIN_PATHS = ["plugins", "/home/andre/virtualenvs/pelican/debinux/plugins"]

MAIN_MENU = True
MENUITEMS = (
    ("Archives", "/archives.html"),
    ("Categories", "/categories.html"),
    ("Tags", "/tags.html"),
    ("Impressum / Datenschutz", "/pages/impressum-datenschutz.html#impressum-datenschutz"),
)

BROWSER_COLOR = "#333"
ROBOTS = "index, follow"

COPYRIGHT_YEAR = 2021

DEFAULT_DATE = "fs"

PLUGINS = ["i18n_subsites"]
JINJA_ENVIRONMENT = {"extensions": ["jinja2.ext.i18n"]}

# Default theme language.
I18N_TEMPLATES_LANG = "en"

# Your language.
DEFAULT_LANG = "de_DE"

# Match languages for other configs.
OG_LOCALE = "de_DE"
LOCALE = ("de_DE", "de_DE.utf8")

LINKS_IN_NEW_TAB = True

USE_GOOGLE_FONTS = False

SOCIAL = ("github", "https://github.com/andryyy")
