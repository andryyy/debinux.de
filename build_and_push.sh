#!/bin/bash
cd /home/andre/virtualenvs/pelican
source bin/activate
cd debinux
make html
git pull
git add -A
git commit -m "$(date)"
git push origin gh-pages
