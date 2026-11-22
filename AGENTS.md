# Instructions

This project generates a CV using Next.js. Preserve the accuracy of
personal details, dates, links, and credentials when editing content.

## Verification

After code changes, run `npm run lint`.

For UI changes, use the devcontainer's installed `playwright-cli` to
open the running app. Use `playwright-cli --help` for commands.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
