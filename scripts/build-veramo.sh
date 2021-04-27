#!/usr/bin/env bash

GITREPO=https://github.com/uport-project/veramo.git

rm -rf veramo
git clone $GITREPO veramo
cd veramo
git fetch --all && git checkout main
yarn && yarn build
