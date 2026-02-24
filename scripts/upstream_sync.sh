#!/bin/bash

# Ignore upstream translations
for t in ./locales/*.json; do
  echo "$t"
  git checkout HEAD "$t"
done
# git commit -m "Ignore upstream translations" ./locales/*.json

concerns=('js/configs.ts', 'js/ide.js' 'js/map.ts')
for i in $(git diff --name-only --diff-filter=U --relative); do
  echo "$i"
  for c in "${concerns[@]}"; do
    echo "$c"
    if [[ $i != $c ]];then
      git checkout --theirs -- $i
      git add $i
    fi
  done
done

#if [ -n "$(git status --porcelain)" ]; then
#  iso=$(date -Iminutes)
#  git commit -m "Merge upstream ("$iso")."
#fi
