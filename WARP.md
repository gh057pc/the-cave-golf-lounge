# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This is a Next.js project ("the-cave-golf-lounge") built with React and Tailwind CSS. It uses Firebase for backend services (Auth, Firestore, Functions).

- **Framework**: Next.js 13 (Pages Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase

## Common Commands

### Development
- Start the development server:
  ```bash
  npm run dev
  ```
  The app will be available at http://localhost:3000.

### Build & Production
- Build the application for production:
  ```bash
  npm run build
  ```
- Start the production server:
  ```bash
  npm run start
  ```

### Code Quality
- Run the linter:
  ```bash
  npm run lint
  ```

## Architecture & Structure

### Key Directories
- `pages/`: Contains the application routes (Next.js Pages Router).
  - `_app.js`: Global application wrapper.
  - `_document.js`: Custom Document for augmenting the application's `<html>` and `<body>` tags.
  - `api/`: API routes (mapped to `/api/*`).
- `components/`: Reusable React components.
- `lib/`: Utility functions and configurations.
  - `firebase.js`: Initializes and exports Firebase services (`auth`, `db`, `functions`).
- `styles/`: Global styles (Tailwind directives are likely here).
- `public/`: Static assets.

### Configuration & Conventions
- **Imports**: The project is configured with path aliases. Use `@/` to import from the root directory (e.g., `import { db } from '@/lib/firebase';`).
- **Environment Variables**: Firebase configuration requires environment variables. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.
  - `NEXT_PUBLIC_FIREBASE_API_KEY`
  - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
  - etc. (see `lib/firebase.js`)
- **Styling**: Use Tailwind CSS utility classes for styling.

### Deployment
- The `gh-pages` dependency suggests potential for GitHub Pages deployment, though `next build` is the standard build command. Ensure environment variables are set in the deployment environment.
