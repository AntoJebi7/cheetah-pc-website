# Cheetah PC website

The public landing and download site for the Cheetah PC desktop app, live at https://cheetahpc.cresard.com. Cheetah PC is a product of Cresard Software Services (https://www.cresard.com).

This repository also hosts the Windows installer, as GitHub Release assets. Installers are never committed to the code tree.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Inter via `next/font`. No database, no environment variables, no analytics, and no third-party scripts.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3400
npm run typecheck  # tsc --noEmit
npm run build && npm start
```

## How the download works

All repository and installer settings live in one file, `lib/site.ts`.

- The Download for Windows button points to a stable URL that never changes:
  `https://github.com/AntoJebi7/cheetah-pc-website/releases/latest/download/Cheetah-PC-Setup.exe`
- On the server, `lib/release.ts` reads the public GitHub API for the latest release (no token, cached for one hour) and shows the real version tag, publish date, installer size, and the file's SHA-256 digest when GitHub returns one.
- If there is no release yet, or the lookup fails, the pages still render. They show "The first installer has not been published yet", the button is disabled, and no numbers are shown. Nothing is ever invented.

## Release procedure

1. Build the installer.
2. Rename it exactly `Cheetah-PC-Setup.exe`.
3. On GitHub, create a Release with a version tag (for example `v0.1.0`) and attach that file.
4. Optionally add a `CHECKSUMS` line to the release notes, for example `SHA-256 Cheetah-PC-Setup.exe <hash>`. Get the hash with PowerShell: `Get-FileHash .\Cheetah-PC-Setup.exe -Algorithm SHA256`.
5. The site picks up the new release within an hour. The download link works immediately.

Never commit `.exe`, `.msi`, or `.zip` files. They are ignored by `.gitignore`.

## Deploy

Deployed on Vercel with the default Next.js settings. No environment variables are needed.

## Rights

All rights reserved unless stated otherwise. Cheetah PC and Cresard are products and marks of Cresard Software Services.

Questions: https://www.cresard.com/contact
