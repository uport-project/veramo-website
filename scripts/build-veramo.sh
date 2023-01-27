#!/usr/bin/env bash

set -e

docsDir=$(pwd)

GITREPO=https://github.com/uport-project/veramo.git

revamoDir=$(mktemp -d)
cd $revamoDir
git clone $GITREPO veramo
cd veramo
git fetch --all && git checkout main
pnpm install && pnpm run build && pnpm run docs

cd $docsDir
rm -fR $docsDir/docs/api
mv $revamoDir/veramo/docs/api $docsDir/docs/
