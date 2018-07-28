#!/usr/bin/env bash
set -ex

cd ./docs

touch .nojekyll

git init
git remote add origin git@github.com:jahed/promises.git
git checkout -b gh-pages
git add index.html
git commit -m 'docs: new build'
git push -u origin gh-pages --force

echo 'Done.'
