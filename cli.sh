#!/bin/sh

repo="git@github.com:yanxyz/note.git"

init() {
    rm -rf ./.git
    git init
    git add .
    git commit -m "Amendment"
    git remote add origin $repo
    git push -fu origin master
}

update() {

}

build() {
    bundle exec jekyll build --incremental
}

if [ "$1" = "-f" ]; then
    init
elif [ "$1" = "-u" ]; then
    update
else
    echo '-f recreate repo'
    echo '-u update'
fi
