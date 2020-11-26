#!/usr/bin/env bash

GITREPO=https://github.com/uport-project/daf.git

git clone $GITREPO daf
cd daf && git checkout beta
yarn && yarn build
