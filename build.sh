#!/bin/bash
# delete old builds
rm -rf .next
yarn build
git add .next
git commit -m "[automatic build]"

# update server
git checkout master 
merge develop --strategy-option theirs --no-ff --no-edit 
git push