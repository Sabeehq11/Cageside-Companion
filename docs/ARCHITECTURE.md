# Architecture Overview – CageSide Companion

## 🧱 App Structure

This is a cross-platform app with the following structure:

- `/desktop/` → Electron frontend (HTML/JS)
- `/mobile/` → React Native frontend (JS)
- `/backend/` → Firebase (Firestore, Auth, Cloud Functions)
- `/shared/` → Reusable components, icons, config

## 🏗️ System Architecture

### 1. Frontend (Electron + React Native)
- UI built with component-based architecture
- Auth via Firebase SDK
- Real-time data via Firestore listeners
- Shared logic for predictions, profiles, and events

### 2. Backend (Firebase)
- Firestore (NoSQL DB) stores fighter/event/prediction data
- Firebase Auth handles user accounts (email + anonymous)
- Firebase Cloud Functions automate:
  - Scoring prediction outcomes
  - Sending push notifications
  - Updating leaderboard

### 3. APIs & Integrations
- YouTube API (for fighter highlights)
- Optional: MMA Junkie scraping (if needed for cards)

## 🔁 Data Flow

1. User opens app → Auth triggered
2. Fetches:
   - `/events` (upcoming or live)
   - `/fighters` (linked to events)
   - `/predictions` (user-specific)
3. User submits prediction → stored in Firestore
4. After event → Cloud Function scores predictions
5. Leaderboard updates for all users

## 🔐 Security

- Firestore security rules (to be defined)
- Client-side only accesses user-level data
- Admin roles handled via Cloud Functions (if needed)

## ⚙️ Dev Notes

- Shared utilities go in `/shared/`
- Firebase config split per environment (dev/prod)
- Mobile uses Expo for faster builds 