Title: OCR per Rechtsklick auf Dokument in Nemo ausführen
Category: Linux
Date: 2021-08-17 12:35
Modified: 2021-08-19 22:40
Tags: linux, debian, ocr, pdf
Authors: André Peters

```
cd ~/.local/share/nemo/actions
cat << EOF
[Nemo Action]
Active=true
Name=OCR zu PDF (deu)
Comment=OCR auf Dokument ausführen und PDF erstellen (deu)
Exec=tesseract "%F" "%F_deu_ocr" -l deu pdf
Icon-Name=pdf
Selection=s
Extensions=any;
Quote=double
EscapeSpaces=true
EOF
```

Diese Action kann entsprechend auf Extensions limitiert werden (`Extensions=jpeg;jpg;png;` etwa).

Benötigt selbstverständlich die jeweiligen Pakete:

```
sudo apt-get install tesseract-ocr tesseract-ocr-deu
```

`tesseract-ocr-deu` steht dabei für das deutsche Sprachpaket.

Mehr zu den Nemo Actions [hier](https://github.com/linuxmint/nemo/blob/master/files/usr/share/nemo/actions/sample.nemo_action).
