RunItUp

RunItUp is a Progressive Web App (PWA) designed to make running fun and rewarding, transforming your workouts into a gamified experience. Built with Vue.js and Tailwind CSS, it offers a sleek, iOS-native-like interface that tracks your runs, logs stats, and levels you up based on your progress. Installable on your iPhone’s home screen, RunItUp works offline and feels like a native app with smooth animations, geolocation tracking, and local data persistence.

Features

Track Runs: Use geolocation to measure real-time distance and pace during workouts.

Log Manual Runs: Input distance and time to record runs manually.

Gamified Progress: Earn XP for every mile, unlocking levels from Turtle 🐢 to Eagle 🦅.

Offline Support: Access the app and view stats without an internet connection via Service Workers and localStorage.

Native-Like UX: iOS-inspired design with responsive layouts, tactile button feedback, and safe-area insets for a seamless iPhone experience.

Installable PWA: Add to your home screen for a full-screen, app-like experience.

Tech Stack

Vue.js: Reactive frontend framework for dynamic UI.

Tailwind CSS: Utility-first CSS for iOS-like styling.

Service Workers: Enable offline functionality and fast loading.

Web APIs: Geolocation for run tracking, with potential for notifications and vibration feedback.

localStorage: Persists user stats (distance, time, XP, run count).

Installation

Access the App: Open the app URL in Safari on your iPhone (e.g., hosted on Netlify/Vercel).

Add to Home Screen: Tap Safari’s “Share” button and select “Add to Home Screen” for a native-like experience.

Prerequisites: No installation required; works on any modern browser. For offline support, ensure the app is served over HTTPS.

Usage

Start a Workout: Click “Start Workout” to track distance and pace using geolocation.

Log a Run: Manually enter distance and time to record a run.

View Stats: Monitor total distance, time, XP, and your current level with a progress bar.

Offline Mode: Stats and UI remain accessible without internet.
