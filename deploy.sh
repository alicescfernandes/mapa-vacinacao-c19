#!/bin/bash
git checkout master -f
git pull
yarn
pm2 stop nextjs
pm2 start yarn --name "nextjs" --interpreter bash -- start:80
pm2 start yarn --name "nextjs" --interpreter bash -- start:443
#pm2 restart nextjs