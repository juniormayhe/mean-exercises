#!/bin/bash
PROJECT_NAME=mean-exercises
URL=https://github.com/juniormayhe/mean-exercises.git
cd /$PROJECT_NAME
git init
git add .
git config --global user.email "juniormayhe@gmail.com"
git config --global user.name "Wanderley Mayhe Junior"
git commit -m "Initial commit"
git remote add origin remote repository $URL
