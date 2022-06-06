#!/usr/bin/env bash

set -e

GITREPO=https://github.com/uport-project/veramo.git

rm -rf veramo
git clone $GITREPO veramo
cd veramo
# git fetch --all && git checkout main
git fetch --all && git checkout italo/fix-docs
yarn && yarn build && yarn docs
cd ..
rm -fR ./docs/api
mv -fr ./veramo/docs/api ./docs/
