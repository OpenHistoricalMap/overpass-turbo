#!/bin/bash
# awk incantation based on https://stackoverflow.com/questions/4780203/deleting-lines-from-one-file-which-are-in-another-file

# don't process .tmp files, symbolic links, or en.json or en.tabbed.json. en.tabbed.json is created (but not saved/checked
# in) by replacing spaces with tabs. we need this because translatewiki uses tabs and we're merely comparing lines not actual
# objects with keys & values.

for i in *;do
  if ! [[ $i = en.* || $i = *.tmp || -L $i ]];then
    echo "$i"
    awk '{ if (f==1) { r[$0] } else if (($0 ~ /^\{|\}$/) || (! ($0 in r))) { print $0 } }' f=1 en.tabbed.json f=2 "$i" > "$i.tmp"
    mv "$i.tmp" "$i"
  fi
done
