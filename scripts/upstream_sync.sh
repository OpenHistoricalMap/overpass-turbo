#!/bin/bash

# Take upstream translations as they are (Transifex). OHM strings live in
# locales/overrides/ (translatewiki.net), which upstream never touches.
git checkout upstream/master -- locales/
git add locales/

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
