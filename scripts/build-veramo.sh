#!/usr/bin/env bash

GITREPO=https://github.com/uport-project/veramo.git

rm -rf veramo
git clone $GITREPO veramo
cd veramo
yarn && yarn build
