#!/bin/bash
set -e

export NVM_DIR="${NVM_DIR:-/usr/local/share/nvm}"
. "$NVM_DIR/nvm.sh"
nvm install --lts
npm install -g @playwright/cli@latest
playwright-cli install
npx -y playwright install-deps
