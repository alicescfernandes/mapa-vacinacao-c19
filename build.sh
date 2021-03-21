#!/bin/bash
# update server
git reset .next && git checkout .next
git clean -fd .next

git checkout master  
git merge develop --strategy-option theirs --no-ff --no-edit --no-commit

# delete old builds
rm -rf .next
yarn build
git add .next

git commit -n -m "Merge branch 'develop' [automatic build]"

git push
git push production master -f