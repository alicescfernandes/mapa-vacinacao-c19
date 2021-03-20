#!/bin/bash
git checkout master -f
git pull
yarn
pm2 stop next
pm2 start yarn --name "next" -x -- start
#pm2 restart nextjs