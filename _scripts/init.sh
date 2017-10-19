#!/bin/sh

repo="git@github.com:yanxyz/note.git"

cd ..
rm -rf ./.git
git init
git add .
git commit -m "Amendment"
git remote add origin $repo
git push -fu origin master
