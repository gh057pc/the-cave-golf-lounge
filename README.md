# The Cave - Golf Lounge PWA

## Overview
This is the Progressive Web Application for "The Cave", built with Next.js, Tailwind CSS, and Firebase.

## Getting Started

### Prerequisites
- Node.js (v16 or compatible)
- Firebase Account

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Deployment (GitHub Pages)
The project is configured to deploy to GitHub Pages.

1. Push your code to a GitHub repository.
2. Go to Settings > Pages in your repository.
3. Select `gh-pages` branch as source after running the deploy command.

**Manual Deployment:**
```bash
npm run deploy
```
This command builds the app and pushes the `out` directory to the `gh-pages` branch.

### Firebase Setup
1. Create a project in [Firebase Console](https://console.firebase.google.com/).
2. Create a Web App and copy the configuration keys.
3. Add these keys to your environment variables (create a `.env.local` file for local dev):

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

Note: Since this is a static site, these variables will be embedded in the build. Ensure you secure your Firestore rules.
