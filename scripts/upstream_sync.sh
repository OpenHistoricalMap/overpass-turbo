#!/bin/bash

#
#
#

git checkout main
git branch -D the-sacrifice
git checkout -b the-sacrifice
git fetch upstream master

mkdir upstream
for i in $(git ls-tree upstream/master --name-only); do
  if [[ $i == *.md ]];then
    git show upstream/master:$i > upstream/$i
  fi
done
git show upstream/master:LICENSE > upstream/LICENSE
git add upstream
if [ -n "$(git status --porcelain)" ]; then
  git commit -m 'Preserving upstream markdown & text files.'
fi

#git merge --no-ff --no-commit upstream/master
#concerns=('js/ide.js' 'js/map.ts')
#for i in $(git diff --name-only --diff-filter=U --relative);do
#  echo "$i"
#  for c in "${concerns[@]}";do
#    echo "$c"
#    if [[ $i != $c ]];then
#      git checkout --theirs -- $i
#      git add $i
#    fi
#  done
#done
#
#if [ -n "$(git status --porcelain)" ]; then
#  iso=$(date -Iminutes)
#  git commit -m "Merge upstream ("$iso")."
#fi
