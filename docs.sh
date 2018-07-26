#!/usr/bin/env bash
set -ex

typedoc --theme default --exclude '**/*.test.ts' --out docs --mode file --target ES6

cd ./docs

touch .nojekyll

git init
git remote add origin git@github.com:jahed/promises.git
git checkout -b gh-pages
git add .
git commit -m 'docs: new build'
git push -u origin gh-pages --force

echo 'Done.'
