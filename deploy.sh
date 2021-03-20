#!/bin/bash
cd ~/mapa-vacinacao-c19
git checkout master -f
git pull
yarn
pm2 stop next
pm2 start yarn --name "next" -x -- start
