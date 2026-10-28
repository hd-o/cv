#!/bin/bash
set -e

. "$NVM_DIR/nvm.sh" && nvm install --lts
npm install -g @playwright/cli@latest
playwright-cli install
npx -y playwright install-deps
