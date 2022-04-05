var tipuesearch = {"pages":[{"title":"Impressum & Datenschutz","text":"Angaben gemäß § 5 TMG: André Peters Schottelstr. 10 47877 Willich E-Mail: andre.peters < a > debinux.de Haftungsausschluss Haftung für Inhalte Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. Haftung für Links Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. Urheberrecht Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen. Datenschutzerklärung Datenschutz Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor. Quellenangaben: Datenschutzerklärung von eRecht24","tags":"pages","url":"pages/impressum-datenschutz.html","loc":"pages/impressum-datenschutz.html"},{"title":"Ein paar Ubuntu Dock Quickies mit gsettings","text":"Etwas, an das ich mich bei Ubuntu nie gewöhnt habe, ist das Verhalten der Icons im Dock per Standard. Vielleicht ist das Folgende für den ein oder anderen Leser ebenfalls brauchbar. # Den Modifier auf ALT zurückstellen (sonst: Super) gsettings set org.gnome.desktop.wm.preferences mouse-button-modifier '<Alt>' # Fenster mit Modifier und rechter Maustaste in ihrer Größe ändern gsettings set org.gnome.desktop.wm.preferences resize-with-right-button true # Durch einen Klick auf ein Icon im Dock die App minimieren gsettings set org.gnome.shell.extensions.dash-to-dock click-action 'minimize' # Durch Scrollen auf einem Icon im Dock durch offene Fenster navigieren gsettings set org.gnome.shell.extensions.dash-to-dock scroll-action 'cycle-windows' # Lediglich Icons des aktiven Desktops anzeigen gsettings set org.gnome.shell.extensions.dash-to-dock isolate-workspaces true","tags":"Linux, Ubuntu","url":"ein-paar-ubuntu-dock-quickies-mit-gsettings.html","loc":"ein-paar-ubuntu-dock-quickies-mit-gsettings.html"},{"title":"Wenn AnyDesk unter Ubuntu Jammy (Beta) nicht startet","text":"...solltet ihr auf eine angepasste Version von AnyDesk für Jammy warten oder eben libpangox-1.0-0 nachinstallieren. cd wget http://de.archive.ubuntu.com/ubuntu/pool/universe/p/pangox-compat/libpangox-1.0-0_0.0.2-5ubuntu1_amd64.deb dpkg -i libpangox-1.0-0_0.0.2-5ubuntu1_amd64.deb Das war's schon. Das ist nicht die feine Art, denkt dran. Meist funktioniert es so lange wie kein autoremove nach dem Upgrade ausführt wurde. Sollte AnyDesk trotzdem nicht starten, solltet ihr den Client einfach mal durch das Ausführen des Befehls anydesk im Terminal (als Benutzer, nicht als root) starten und auf die Ausgabe achten.","tags":"Linux, Ubuntu","url":"wenn-anydesk-unter-ubuntu-jammy-beta-nicht-startet.html","loc":"wenn-anydesk-unter-ubuntu-jammy-beta-nicht-startet.html"},{"title":"AppImages mit bauh installieren und verwalten","text":"Ob AppImage, Flatpak oder Snap; es gilt die Übersicht zu behalten. Was bei Flatpak und Snap noch aus dem CLI relativ komfortabel gelingt, wird bei AppImages kompliziert. Ein guter Tipp ist bauh , das sich schnell als Python Anwendung installieren lässt. Ich habe dafür ein virtualenv unter ~/virtualenvs/bauh verwendet. Wichtig ist, dass die Abhängigkeiten aus der Installationsanleitung vorab installiert wurden. virtualenv ~/virtualenvs/bauh cd ~/virtualenvs/bauh ; source bin/activate pip3 install bauh Das kann man individuell handhaben. Ich denke, hier hat jeder seine eigene Struktur gefunden. Unter ~/virtualenvs/bauh/bin/bauh findet sich in meinem Fall nun die Binary, mit der ich einfach ein AppImage \"installiere\". Installieren bedeutet in diesem Fall, dass das AppImage nach ~/.local/share/bauh/appimage/installed/ kopiert und unter ~/.local/bin/ entsprechende Links angelegt werden. Im \"local share\" findet sich zudem ein extrahiertes Logo und Metadaten in Form von JSON. Praktisch ist, dass bauh Starter unter .local/share/applications/ einrichtet, die bequem im Startmenü auffindbar werden.","tags":"Linux","url":"appimages-mit-bauh-installieren-und-verwalten.html","loc":"appimages-mit-bauh-installieren-und-verwalten.html"},{"title":"fsck via Boot-Parameter","text":"Ein Quickie. Einen FS-Check sowie die Reparatur erzwingen. Geht mit touch /forcefsck , klar, oft viel angenehmer: über die Boot-Parameter des Kernels. In Grub den Boot-Parameter ändern und fsck.mode=force fsck.repair=yes anhängen, booten, happy sein.","tags":"Linux","url":"fsck-via-boot-parameter.html","loc":"fsck-via-boot-parameter.html"},{"title":"Flatpak: Cursor Theme für Apps lesbar machen","text":"Ein Quickie... App-ID finden: ~$ flatpak list --columns=name,application --app Name Application ID Delta Chat chat.delta.desktop Pinta com.github.PintaProject.Pinta PDF Arranger com.github.jeromerobert.pdfarranger Flameshot org.flameshot.Flameshot KeePassXC org.keepassxc.KeePassXC Telegram Desktop org.telegram.desktop Im User-Kontext Zugriff auf ~/.icons geben: flatpak --user override org.telegram.desktop --filesystem=/home/$USER/.icons/:ro","tags":"Linux","url":"flatpak-cursor-theme-fur-apps-lesbar-machen.html","loc":"flatpak-cursor-theme-fur-apps-lesbar-machen.html"},{"title":"YogaDNS als flexibler DNS-Client für Windows mit DoH und DoT","text":"Gerade zufällig drüber gestolpert: YogaDNS . Viel einfacher kann die Namensauflösung wohl kaum unter Windows gesteuert werden.","tags":"Windows","url":"yogadns-als-flexibler-dns-client-fur-windows-mit-doh-und-dot.html","loc":"yogadns-als-flexibler-dns-client-fur-windows-mit-doh-und-dot.html"},{"title":"Flatpak-Anwendungen aus CLI verwenden","text":"Für mich primär aus einem Grund wichtig: Autostart und Keyboard Shortcuts. Runtimes interessieren uns herzlich wenig, daher listen wir nur Anwendungen auf. Der Scope ist per Standard --system . Anwendungen, die in den User-Scope installiert wurden, seht ihr mit --user . ~$ flatpak list --columns=name,application --app Name Application ID Delta Chat chat.delta.desktop Pinta com.github.PintaProject.Pinta PDF Arranger com.github.jeromerobert.pdfarranger Flameshot org.flameshot.Flameshot KeePassXC org.keepassxc.KeePassXC Telegram Desktop org.telegram.desktop Die Application ID ist relevant. Wir starten eine Anwendung wie folgt: flatpak run org.flameshot.Flameshot Parameter können beliebig angehangen werden. Im Fall von Flameshot etwa \"gui\": flatpak run org.flameshot.Flameshot gui Kann auch als Alias verwendet ( alias flameshot=\"flatpak run org.flameshot.Flameshot gui\" ) und in die ~/.bashrc eingepflegt werden. Oder welcher Shell ihr auch treu seid...","tags":"Linux","url":"flatpak-anwendungen-aus-cli-verwenden.html","loc":"flatpak-anwendungen-aus-cli-verwenden.html"},{"title":"OpenVPN-Clients: DNS-Einstellungen und Routen ignorieren","text":"Es kann durchaus Vorteile haben viele oder gar alle Anfragen über einen vertrauten Tunnel zu schicken. Bevorzugen und empfehlen möchte ich, die weiterzuleitenden Zonen oder Hosts selber auszuwählen und an entsprechender Stelle einzupflegen (Stichwort DNS-Overrides). Weiterhin ist es ratsam nicht den gesamten Traffic über ein VPN-Profil zu jagen und stattdessen auszuwählen, welche Routen man tatsächlich haben möchte. In einer OpenVPN-Konfigurationsdatei hängt ihr ab Version 2.4 Folgendes an, um DNS-Servervorgaben zu unterbinden: pull-filter ignore \"dhcp-option DNS\" \"For the sake of completeness\" noch das Filtern der Routen... :) pull-filter ignore redirect-gateway pull-filter ignore \"route \" Es ist sogar möglich einzelne Routen - falls vorhanden - zu akzeptieren: pull-filter accept \"route 192.168.\" Ansonsten nehmt ihr den manuellen Weg und fügt die Routen selber hinzu. Die Sache erübrigt sich natürlich, wenn ihr den VPN-Server selber in der Hand habt...","tags":"Linux","url":"openvpn-clients-dns-einstellungen-und-routen-ignorieren.html","loc":"openvpn-clients-dns-einstellungen-und-routen-ignorieren.html"},{"title":"DNS über TLS, DNS over HTTPS","text":"Neben Suchanfragen via GET-Methode gehört auch DNS zu einem ewigen Klassiker für Daten-Leaks. Da keiner Netzwerkschnüffler mag, verwendet man heute DNS-over-TLS. Neben einem TLS-Kanal auf Port 853 funktioniert das übrigens auch mit etwas mehr Overhead über HTTPS, es scheint mir aber so, als sie hat sich alles in Richtung DNS-over-TLS entwickelt, hm, abwarten. Update : Ich muss die Aussage zumindest teilweise revidieren, denn wie es scheint, sind beide mindestens gleichauf. Eine Liste zu pflegen wäre zu viel Aufwand und redundant. Schaut einfach hier . Privat vertraue ich meinem Netzwerk bis zur OPNsense. Ab hier geht es weiter via DNS-over-TLS. Mit OPNsense in der Version 21.7 gibt es nun auch die Möglichkeit einen Servernamen zu validieren: https://twitter.com/DKaufmann_/status/1421023327762751489 Da Mozilla DNS-over-HTTPS anstrebt, findet ihr in den Verbindungseinstellungen die Möglichkeit einen DNS-over-HTTPS Server zu hinterlegen, schöne Sache! An dieser Stelle sei auch ein kleiner Verweis erlaubt: https://www.dnshome.de/ - schaut es euch an!","tags":"Linux","url":"dns-uber-tls-dns-over-https.html","loc":"dns-uber-tls-dns-over-https.html"},{"title":"Firefox Next ohne Branding auf Linux Mint","text":"Ich möchte Firefox Next auf einem Linux Mint 20.x installieren. Das Mint-Branding vom Firefox sorgte für Überraschungen. Es bewirkt beispielsweise, dass Suchvorschläge mit Startpage nicht funktionieren, was an den Standard \"searchplugins\" liegen könnte. Sehr ärgerlich, nicht weiter debugged, denn - Punkt zwei: Ich mag den Browser lieber so, wie Mozilla ihn mir gibt. Das soll meine Basis sein. # Firefox schlie ß en und nochmal nachtreten . : ) sudo kill - 9 $ ( pgrep firefox ) # Firefox entfernen sudo apt purge firefox ' firefox-locale* ' xul - ext - ubufox # Vorhandene lokale Daten l ö schen , falls gew ü nscht cd ; rm -rf .mozilla .cache/mozilla # Linux Mint Branding - Reste entfernen sudo rm - rf / usr / lib / firefox / usr / lib / firefox - addons / # Neues Branding verhindern ( wird IMMER angewendet , wenn Datei vorhanden ! Daher l ö schen ! ) sudo mv / usr / share / ubuntu - system - adjustments / firefox / / usr / share / ubuntu - system - adjustments / firefox_backup # Repository hinzuf ü gen sudo add - apt - repository ppa : mozillateam / firefox - next sudo apt update # Firefox aus PPA bevorzugen sudo bash - c ' cat << EOF > /etc/apt/preferences.d/mozilla-next.pref Package : * Pin : release o = LP - PPA - mozillateam - firefox - next Pin - Priority : 800 EOF '","tags":"Linux","url":"firefox-next-ohne-branding-auf-linux-mint.html","loc":"firefox-next-ohne-branding-auf-linux-mint.html"},{"title":"OCR per Rechtsklick auf Dokument in Nemo ausführen","text":"Was passiert? Es wird eine Rechtsklick-Aktion zu Nemo (Linux Mint Datei-Manager) hinzugfügt, die eine oder mehrere Bilder (Scans) begradigt, zu PDFs konvertiert, OCR (Texterkennung) ausführt und anschließend: pro Bild eine PDF erstellt und behält. alle PDFs zu einer großen PDF zusammenführt. Das ist, was ich benötige. Wenn ihr die einzelnen PDFs nicht benötigt oder das Zusammenführen auslassen möchtet, passt gerne das Script an. Wie es geht... Zuerst das Script für das Verarbeiten der Bilder erstellen: /usr/local/bin/nemo_ocr 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 #!/bin/bash cd \" $1 \" shift while (( ${#} )) ; do IFS = ';' read -a files <<< \" ${ 1 } \" for word in \" ${ files [@] } \" ; do deskew -b ffffff \" ${ word } \" -o \" ${ word } _deskew.jpg\" tesseract \" ${ word } _deskew.jpg\" \" ${ word } _ocr\" -l deu pdf rm \" ${ word } _deskew.jpg\" done shift done # Auskommentieren, wenn keine kombinierte PDF benötigt wird. pdftk *_ocr.pdf cat output combined_ $( date + \"%Y_%m_%d_%I_%M\" ) .pdf Anschließend ausführbar markieren: chmod +x /usr/local/bin/nemo_ocr Nun das Script für die Nemo Aktion anlegen: cd ~/ . local / share / nemo / actions cat << EOF > OCR . nemo_action [ Nemo Action ] Active = true Name = OCR zu PDF ( deu ) Comment = OCR auf Dokument ausführen und PDF erstellen ( deu ) Exec =/ usr / local / bin / nemo_ocr \"%P\" \"%F\" Icon - Name = pdf Selection = any Extensions = any EscapeSpaces = false Separator = ; EOF Diese Action kann entsprechend auf Extensions limitiert werden ( Extensions=jpeg;jpg;png; etwa). Benötigt selbstverständlich die jeweiligen Pakete: sudo apt-get install tesseract-ocr tesseract-ocr-deu pdftk tesseract-ocr-deu steht dabei für das deutsche Sprachpaket. Mit pdftk werden PDFs verändert - in dem Fall zusammengefügt. deskew findet ihr hier . Einfach entpacken und die deskew Datei aus dem Bin Verzeichnis nach, beispielsweise, /usr/local/bin kopieren und ausführbar markieren. Mehr zu den Nemo Actions hier .","tags":"Linux","url":"ocr-per-rechtsklick-auf-dokument-in-nemo-ausfuhren.html","loc":"ocr-per-rechtsklick-auf-dokument-in-nemo-ausfuhren.html"},{"title":"HEIC Dateien in Linux Mint/Ubuntu Bildbetrachter öffnen und Thumbnails anzeigen","text":"Update vom 08. Nov 2021: Zeigt zudem Thumbnails in Nautilus an. sudo apt install heif-gdk-pixbuf heif-thumbnailer libheif1 Das war's schon.","tags":"Linux","url":"heic-dateien-in-linux-mintubuntu-bildbetrachter-offnen-und-thumbnails-anzeigen.html","loc":"heic-dateien-in-linux-mintubuntu-bildbetrachter-offnen-und-thumbnails-anzeigen.html"},{"title":"iCloud, OneDrive: Attribut \"Always keep on device\" per PS setzen","text":"Da es scheinbar vorkommt, dass Dateien trotz Wunsch zur lokalen Verfügbarkeit nicht heruntergeladen werden, habe ich mir kurzerhand die Attribute der Dateien angeschaut, verglichen und festgestellt, dass OneDrive als auch iCloud das Attribut \"525344\" bzw. \"0x00080420\" setzen, wenn \"Always keep on this device\" gesetzt ist. Das Attribute für \"Free up space\" ist demnach wohl \"5248544\" bzw. \"0x5248544\", das habe ich jedoch nicht weiter getestet. Um alle nicht sofort lokal verfügbaren Dateien anzupassen, habe ich mir folgendes Script erstellt: get - childitem $e nv : userprofile ' \\Pictures\\iCloud Photos\\Photos ' - Force - File - Recurse - Include * heic , * jpg , * jpeg , * png , * gif , * mp4 , * mov | where Attributes - ne ' 525344 ' | foreach { $ prop = Get - ItemProperty - Path $ _ . fullname $ prop . Attributes = $ prop . Attributes - bor 525344 } Ein Aufgabenplaner-Job könnte so aussehen: [...] <Exec> <Command>powershell</Command> <Arguments>-executionpolicy bypass -file c:\\fix_sync_icloud.ps1</Arguments> </Exec> [...]","tags":"Windows","url":"icloud-onedrive-attribut-always-keep-on-device-per-ps-setzen.html","loc":"icloud-onedrive-attribut-always-keep-on-device-per-ps-setzen.html"},{"title":"IPv6 Prefix via Nginx, LUA und einem einfachen Bash-Script ausgeben (ohne PHP)","text":"Hi, ein Snippet (mal wieder). Daher ganz kurz und knapp. Unter Debian benötigt ihr die Pakete nginx-full sowie subnetcalc , da hier die entsprechenden LUA Module vorhanden sind. Wer ganz wild drauf ist, kompiliert es sich nach... :) In der entsprechenden Site-Konfiguration: location / { default_type 'text/plain'; content_by_lua_block { local handle = io.popen(\"/opt/ip6_prefix.sh\") local result = handle:read(\"*a\") handle:close() ngx.header.content_type = \"text/plain\" ngx.say(result) } } Das Script /opt/ip6_prefix.sh : PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin subnetcalc $(curl -6 ip6.mailcow.email -s) 64 -n | grep Network | cut -d= -f2 | tr -d '[:space:]' Anschließend als ausführbar markieren durch chmod +x /opt/ip6_prefix.sh","tags":"Linux","url":"ipv6-prefix-via-nginx-lua-und-einem-einfachen-bash-script-ausgeben-ohne-php.html","loc":"ipv6-prefix-via-nginx-lua-und-einem-einfachen-bash-script-ausgeben-ohne-php.html"},{"title":"Firefox: Einzelne Zonen über IPv4 auflösen","text":"Hi, ein kleines Snippet... Zuerst about:config öffnen, anschließend: network.dns.ipv4OnlyDomains = .netflix.com,.google.com","tags":"Firefox","url":"firefox-einzelne-zonen-uber-ipv4-auflosen.html","loc":"firefox-einzelne-zonen-uber-ipv4-auflosen.html"},{"title":"for-loop zum Mounten vor chroot","text":"# for i in proc sys dev ; do mount --rbind /$i /mnt/$i ; done Scharmlos geklaut aus dem SUSE Wiki. :)","tags":"Linux","url":"for-loop-zum-mounten-vor-chroot.html","loc":"for-loop-zum-mounten-vor-chroot.html"},{"title":"Dateiberechtigungen sichern","text":"Ein kleiner Helfer, der gerne beim Backup vergessen wird: getfacl - get file acl . Das Tool sichert die Dateiberechtigungen (auch rekursiv: -R): getfacl -R /ein/pfad > acl_ein_pfad_$(date +\"%d.%m.%Y_%H%M\").acl Und zurück: setfacl --restore=datei.acl Für Debian und Ubuntu lautet der Paketname \"acl\".","tags":"Linux","url":"dateiberechtigungen-sichern.html","loc":"dateiberechtigungen-sichern.html"},{"title":"Windows DNS Cache deaktivieren/aktivieren","text":"Deaktivieren: reg add \"HKLM\\System\\CurrentControlSet\\Services\\Dnscache\" / v \"Start\" / t REG_DWORD / d \"4\" / f Aktivieren: reg add \"HKLM\\System\\CurrentControlSet\\Services\\Dnscache\" / v \"Start\" / t REG_DWORD / d \"2\" / f","tags":"Windows","url":"windows-dns-cache-deaktivierenaktivieren.html","loc":"windows-dns-cache-deaktivierenaktivieren.html"},{"title":"GoCryptFS kompilieren (für HW-beschleunigtes AES) und Systemd Dienst einrichten","text":"Wichtig : Nach der Initialisierung den Master-Key sicher speichern! # 1. yum install openssl - devel fuse # 2. go get - d github . com / rfjakob / gocryptfs cd $ ( go env GOPATH ) / src / github . com / rfjakob / gocryptfs . / build . bash cp gocryptfs / usr / local / bin / # 3. mkdir - p / data / { crypted , decrypted } # 4. if [ ! -f /data/crypted/gocryptfs.conf ] ; then if ! gocryptfs - init / data / crypted ; then echo \"cannot init /data/crypted directory, skipping\" fi else echo \"/data/crypted is an initialized gocryptfs directory\" fi # 5. systemctl stop gocryptfs # 6. cat << 'EOF' > / etc / systemd / system / gocryptfs . service [ Unit ] Description = gocryptfs Mount Unit Requires = network . target local - fs . target After = network . target local - fs . target [ Service ] Type = forking ExecStart =/ usr / local / bin / gocryptfs - extpass \"systemd-ask-password GoCryptFS:\" - allow_other / data / crypted / / data / decrypted / Restart = on - failure RestartSec = 5 [ Install ] WantedBy = multi - user . target EOF systemctl daemon - reload # Do not start on boot systemctl disable gocryptfs # 7. until systemctl start gocryptfs ; do sleep 1 done","tags":"Linux","url":"gocryptfs-kompilieren-fur-hw-beschleunigtes-aes-und-systemd-dienst-einrichten.html","loc":"gocryptfs-kompilieren-fur-hw-beschleunigtes-aes-und-systemd-dienst-einrichten.html"},{"title":"Rsyslog: via UDP erhaltene Logs in eine Datei schreiben","text":"$ template RemoteUDP , \"/var/log/remote-udp.log\" : inputname , isequal , \"imudp\" ? RemoteUDP & ~ & ~ beendet die Verarbeitung der Regel.","tags":"Linux","url":"rsyslog-via-udp-erhaltene-logs-in-eine-datei-schreiben.html","loc":"rsyslog-via-udp-erhaltene-logs-in-eine-datei-schreiben.html"},{"title":"Template Zammad Reverse Proxy mit Apache","text":"<VirtualHost *:80 > ServerName ticket.domain.tld RewriteEngine on RewriteCond %{HTTPS} !=on RewriteRule &#94;/?(.*) https://%{HTTP_HOST}/$1 [R=301,L] ProxyPass / http://127.0.0.1:8090/ ProxyPassReverse / http://127.0.0.1:8090/ ProxyPreserveHost On ProxyAddHeaders On RequestHeader set X-Forwarded-Proto \"http\" </VirtualHost> <VirtualHost *:443 > ServerName ticket.domain.tld ProxyPass /ws ws://127.0.0.1:8090/ws ProxyPassReverse /ws ws://127.0.0.1:8090/ws ProxyPass / http://127.0.0.1:8090/ ProxyPassReverse / http://127.0.0.1:8090/ ProxyPreserveHost On ProxyAddHeaders On RequestHeader set X-Forwarded-Proto 'https'env=HTTPS RequestHeader set X-Forwarded-Ssl on SSLCertificateFile /etc/letsencrypt/live/ticket.domain.tld/fullchain.pem SSLCertificateKeyFile /etc/letsencrypt/live/ticket.domain.tld/privkey.pem Include /etc/letsencrypt/options-ssl-apache.conf </VirtualHost>","tags":"Linux","url":"template-zammad-reverse-proxy-mit-apache.html","loc":"template-zammad-reverse-proxy-mit-apache.html"},{"title":"Rspamd: Subject umschreiben und Reply-To hinzufügen","text":"Ändert Subject auf \"[Tag] Altes-Subject\" und fügt einen Reply-To \"moo@moo.com\" hinzu. Die alten Headerfelder werden vorher entfernt. Nur ein Snippet. remove_headers { X = 0 } sollte alle Header entfernen, nicht nur den ersten. Beim Subject und Reply-To eher unnötig. rspamd_config : register_symbol ({ name = 'SUBJECT_REWRITE_ADD_HEADER' , type = 'postfilter' , callback = function ( task ) local util = require ( \"rspamd_util\" ) local rspamd_logger = require \"rspamd_logger\" local mailcow_domain = task : get_symbol ( \"RCPT_MAILCOW_DOMAIN\" ) if mailcow_domain then local tag = \"Tag\" rspamd_logger . infox ( \"add fancy list header\" ) local sbj = task : get_header ( 'Subject' ) new_sbj = '=?UTF-8?B?' .. tostring ( util . encode_base64 ( '[' .. tag .. '] ' .. sbj )) .. '?=' task : set_milter_reply ({ remove_headers = { [ 'Subject' ] = 1 , [ 'Reply-To' ] = 1 , }, add_headers = { [ 'Subject' ] = new_sbj , [ 'Reply-To' ] = 'moo@moo.com' } }) end end , priority = 11 })","tags":"Linux","url":"rspamd-subject-umschreiben-und-reply-to-hinzufugen.html","loc":"rspamd-subject-umschreiben-und-reply-to-hinzufugen.html"},{"title":"Rspamd: Ratelimit-Überschreitung in Slack Channel teilen","text":"Hallo, Long time no read. Mehr ein Snippet als ein echter Beitrag. Verwendet wird der der metadata_exporter von Rspamd. Eine Mail wird gesendet, wenn das Ratelimit auslöst und die Mail von einem authentifizierten Benutzer kommt. Das kann im LUA-Script entsprechend angepasst werden. Hier die \"local.d/metadata_exporter.conf\": rules { RLINFO { backend = \"send_mail\" ; smtp = \"localhost\" ; smtp_port = 25 ; mail_to = \"ratelimit@localhost\" ; selector = \"ratelimited\" ; formatter = \"email_alert\" ; } } custom_select { ratelimited = << EOD return function ( task ) local ratelimited = task : get_symbol ( \"RATELIMITED\" ) local uname = task : get_user () if uname and ratelimited then return true end return end EOD ; } Und die entsprechende \"local.d/ratelimit.conf\", um das Info-Symbol zu setzen: info_symbol = \"RATELIMITED\"; In diesem Beispiel pipe ich es via ratelimit@localhost an ein Python-Script, das die Nachricht an einen Slack Channel sendet: Das Alias sieht dann etwa so aus: ratelimit: |/usr/local/bin/slack_alert.py Das Python Script /usr/local/bin/slack_alert.py : 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 #!/usr/bin/env python import json import requests import sys import email webhook_url = 'https://hooks.slack.com/services/AAAAAAAA/BBBBBBB/CCCCCCCCCCCCCCCCCCCCCCC' ; slack_data = sys . stdin . read () if not slack_data : print \"No data\" exit msg = email . message_from_string ( slack_data ) response = requests . post ( webhook_url , json = { \"text\" : msg . get_payload ()}, headers = { 'Content-Type' : 'application/json' } ) if response . status_code != 200 : raise ValueError ( 'Request to slack returned an error %s , the response is: \\n %s ' % ( response . status_code , response . text ) )","tags":"Linux","url":"rspamd-ratelimit-uberschreitung-in-slack-channel-teilen.html","loc":"rspamd-ratelimit-uberschreitung-in-slack-channel-teilen.html"}]};