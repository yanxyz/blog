#/bin/sh

# bundle exec rougify list > rougify.txt

serve() {
    sed -i 's/# github:/github:/' _config.yml
    # bundle exec rougify list > ./_temp/rougify.txt
    bundle exec jekyll clean
    bundle exec jekyll serve
}

reinit() {
    rm ./.git -rf
    git init
    git remote add origin git@github.com:yanxyz/note.git
    sed -i 's/github:/# github:/' _config.yml
    git add .
    git commit -m "init afresh"
    git push --force --set-upstream origin master
}

scriptname=`basename "$0"`

show_help() {
  echo "Usage:"
  echo
  echo "$scriptname serve"
  echo "start jekyll"
  echo
  echo "$scriptname reinit"
  echo "create the repo afresh that means the history is totally discarded"
  echo
  exit
}

case $1 in
  'serve')
    serve
    ;;
  'reinit')
    reinit
    ;;
  *)
    show_help
    ;;
esac
