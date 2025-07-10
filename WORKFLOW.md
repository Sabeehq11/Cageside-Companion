# Development Workflow: CageSide Companion

---

## 🛠️ Overview

This document outlines the full development workflow for **CageSide Companion**, a UFC-focused cross-platform application designed for both desktop (Electron) and mobile (React Native). The app combines real-time event tracking, fighter profiles, and interactive community features.

---

## 🚧 Phase 0 – Project Initialization

### 🔹 0.1 Repo & Folder Structure

- Create the root project folder: `cageside-companion/`
- Inside, structure as follows:
  - `/desktop/` → Electron frontend app
  - `/mobile/` → React Native mobile app
  - `/backend/` → Firebase config and Cloud Functions
  - `/shared/` → Shared assets (icons, fonts, constants)
  - `/docs/` → PRD.md, WORKFLOW.md, LICENSE, README.md

### 🔹 0.2 Files to Create

- LICENSE (MIT)
- README.md
- PRD.md (Product Requirements Document)
- WORKFLOW.md (this file)
- .gitignore
- .env.sample (include Firebase config keys)

### 🔹 0.3 Firebase Setup (Cloud Firestore)

- Create Firebase project in the console
- Enable:
  - Authentication (Email/password, optionally Google)
  - Firestore database
  - Cloud Functions
  - Cloud Messaging (for mobile push)
- Create collections:
  - `/fighters`
  - `/events`
  - `/users`
  - `/predictions`

---

## 💻 Phase 1 – Desktop App (Electron)

### 🔸 1.1 App Shell

- Set up Electron with Webpack or Vite
- Create base window with navigation layout
- Add pages: Home, Events, Fighter Profiles, Predictions, Leaderboard

### 🔸 1.2 UI Components

- Navbar and sidebar
- Countdown timer component
- Fighter card grid view
- Matchup preview modal
- Prediction form (radio/select + submit)
- Leaderboard UI (sortable by points, accuracy)

### 🔸 1.3 Firebase Integration

- Add Firebase config to `/desktop/firebase.js`
- Fetch real-time event data from Firestore
- Render live countdowns
- Submit predictions and save to user document
- Authenticate user (anonymous or email)

### 🔸 1.4 Bonus Desktop Features

- Enable picture-in-picture view for stats or chat
- Export stats as image/snapshot
- Multi-event dashboard layout for stacked fight cards

---

## 📱 Phase 2 – Mobile App (React Native)

### 🔸 2.1 App Shell

- Set up React Native with Expo (optional for easier setup)
- Define main screens: Home, Events, Fighter, Prediction, Leaderboard
- Add basic navigation (React Navigation)

### 🔸 2.2 UI Components

- Swipeable fighter cards
- Pull-to-refresh event list
- Floating action button for quick predictions
- Tab navigation for views
- Notification bell with unread indicator

### 🔸 2.3 Firebase Integration

- Add Firebase config in `/mobile/firebase.js`
- Sync event list from Firestore
- Fetch user predictions
- Store prediction data
- Implement push notifications (FCM)

---

## 🔁 Phase 3 – Shared Features & Backend Logic

### 🔸 3.1 Firebase Cloud Functions

- Auto-calculate prediction scores after each event
- Update leaderboard in Firestore
- Send push notification: "Fight Night Starts Now!" or KO alerts

### 🔸 3.2 Firestore Structure (Example Schema)

#### `/fighters/{fighterId}`
```json
{
  "name": "Jon Jones",
  "record": "27-1",
  "style": "Wrestler",
  "highlightURL": "https://youtube.com/xyz",
  "bio": "Current UFC heavyweight champion",
  "stats": { "wins": 27, "losses": 1, "draws": 0 }
}
```

#### `/events/{eventId}`
```json
{
  "name": "UFC 304",
  "datetime": "2025-07-27T02:00:00Z",
  "fighters": ["jon-jones", "stipe-miocic"],
  "status": "upcoming" | "live" | "completed"
}
```

#### `/predictions/{userId_eventId}`
```json
{
  "userId": "user123",
  "eventId": "ufc304",
  "winner": "jon-jones",
  "method": "submission",
  "round": 3,
  "timestamp": "2025-07-25T19:00:00Z"
}
```

---

## 🧪 Phase 4 – Testing & QA

### 🔸 4.1 Desktop Testing

- Manual navigation and flow testing
- Cross-platform builds for Windows + macOS
- Data sync between UI and Firestore

### 🔸 4.2 Mobile Testing

- iOS and Android builds (via Expo or native)
- UI responsiveness testing
- Firebase Auth & Realtime DB checks
- Push notification test (FCM)

---

## 🚀 Phase 5 – Launch Prep

- Add launch guide to README
- Package Electron app (using electron-builder)
- Generate Android/iOS build via Expo
- Set up Firebase Hosting for landing page (optional)
- Add privacy policy and terms (optional)
- Share with testers or post online for feedback

---

## 🌟 Post-MVP Ideas (Stretch Goals)

- Live chat during fights (Firestore or 3rd-party)
- Fantasy fight builder (drag-and-drop fighter cards)
- Fighter comparison tool (style, stats, age, weight)
- Trivia engine or learning modules
- AI judge score simulator vs actual results
- NFT collectibles for event moments (if applicable)

---

## 🧭 Developer Notes

- Follow component-based architecture (reusable UI)
- Ensure real-time sync and optimistic UI updates
- Use dark mode by default for both platforms
- Comment Firebase functions and document data flow
- Prioritize responsive design and low-latency updates 