#!/usr/bin/env bash

set -e

GITREPO=https://github.com/uport-project/veramo.git

rm -rf veramo
git clone $GITREPO veramo
cd veramo
# git fetch --all && git checkout main
git checkout italo/fix-docs
yarn && yarn bootstrap && yarn build && yarn docs
cd ..
cp -fR ./veramo/docs/api ./docs/
