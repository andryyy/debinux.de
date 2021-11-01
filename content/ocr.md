Title: OCR per Rechtsklick auf Dokument in Nemo ausführen
Category: Linux
Date: 2021-08-17 12:35
Modified: 2021-11-01 10:07
Tags: linux, debian, ocr, pdf
Authors: André Peters

## Was passiert?

Es wird eine Rechtsklick-Aktion zu Nemo (Linux Mint Datei-Manager) hinzugfügt, die eine oder mehrere Bilder (Scans) begradigt, zu PDFs konvertiert, OCR (Texterkennung) ausführt und anschließend:

- pro Bild eine PDF erstellt und behält.
- alle PDFs zu einer großen PDF zusammenführt.

Das ist, was ich benötige. Wenn ihr die einzelnen PDFs nicht benötigt oder das Zusammenführen auslassen möchtet, passt gerne das Script an.

## Wie es geht...

Zuerst das Script für das Verarbeiten der Bilder erstellen: `/usr/local/bin/nemo_ocr`

```
#!/bin/bash

cd "$1"
shift

while ((${#})); do
  IFS=';' read -a files <<<"${1}"
  for word in "${files[@]}"; do
    deskew -b ffffff "${word}" -o "${word}_deskew.jpg"
    tesseract "${word}_deskew.jpg" "${word}_ocr" -l deu pdf
    rm "${word}_deskew.jpg"
  done
  shift
done

# Auskommentieren, wenn keine kombinierte PDF benötigt wird.
pdftk *_ocr.pdf cat output combined_$(date +"%Y_%m_%d_%I_%M").pdf
```

Anschließend ausführbar markieren: `chmod +x /usr/local/bin/nemo_ocr`

Nun das Script für die Nemo Aktion anlegen:

```
cd ~/.local/share/nemo/actions
cat << EOF > OCR.nemo_action
[Nemo Action]
Active=true
Name=OCR zu PDF (deu)
Comment=OCR auf Dokument ausführen und PDF erstellen (deu)
Exec=/usr/local/bin/nemo_ocr "%P" "%F"
Icon-Name=pdf
Selection=any
Extensions=any
EscapeSpaces=false
Separator=;
EOF
```

Diese Action kann entsprechend auf Extensions limitiert werden (`Extensions=jpeg;jpg;png;` etwa).

Benötigt selbstverständlich die jeweiligen Pakete:

```
sudo apt-get install tesseract-ocr tesseract-ocr-deu pdftk
```

`tesseract-ocr-deu` steht dabei für das deutsche Sprachpaket. Mit `pdftk` werden PDFs verändert - in dem Fall zusammengefügt.

`deskew` findet ihr [hier](https://github.com/galfar/deskew/releases). Einfach entpacken und die `deskew` Datei aus dem `Bin` Verzeichnis nach, beispielsweise, `/usr/local/bin` kopieren und ausführbar markieren.

Mehr zu den Nemo Actions [hier](https://github.com/linuxmint/nemo/blob/master/files/usr/share/nemo/actions/sample.nemo_action).
