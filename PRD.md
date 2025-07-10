# Product Requirements Document (PRD)

## Project Name: CageSide Companion

### Overview:
**CageSide Companion** is a cross-platform UFC companion app designed for both desktop and mobile users. The app combines real-time fight data, fighter insights, and fan interaction to enhance how UFC fans experience events. It solves real-world problems like missing fight updates, lack of fighter knowledge, and limited fan engagement — while making the experience fun and interactive.

---

## Platforms:
- ✅ Desktop App (Built with Electron.js)
- ✅ Mobile App (Built with React Native or Flutter)
- ✅ Shared backend using Firebase or Supabase
- ✅ Unified design and experience across both platforms, with custom features per platform

---

## Target Users:
- Hardcore UFC fans who follow every card and stat
- Casual viewers who want an easy way to follow fights
- Fans who enjoy debating, predicting outcomes, and discovering new fighters

---

## Core Features (Shared Across Desktop + Mobile):

### 1. Live Fight Dashboard
- Real-time stats for ongoing fights: strikes, takedowns, submissions
- Round-by-round scoring
- AI-powered "Who's winning?" fan polls after each round
- Visual timeline of the fight (key events like knockdowns)

### 2. Event Tracker
- Upcoming fight cards with countdowns
- Ability to subscribe to fighters/events
- Auto-adjusts to user's time zone
- Notifications for event start and main card

### 3. Fighter Profiles
- Fighter bios: record, age, style, gym, background
- Win/loss graph + highlight reels via YouTube API
- Style breakdowns (e.g., striker vs wrestler)
- AI-generated pre-fight matchup predictions

### 4. Fan Interaction + Community
- Pre-fight predictions with points system
- Community polls and weekly debate topics
- Fantasy fight cards (users build dream matchups)
- Leaderboards for most accurate predictors
- Comment sections for events and fighters

### 5. UFC News + Fight IQ Learning
- Curated MMA news feed
- Short educational articles on moves, rules, judging
- Post-fight AI summaries (who won + why)
- "Did you know?" daily trivia card

---

## Desktop-Only Features (Electron)

- Split-screen layout: stats + video + chat side by side
- Picture-in-picture mini window during live fights
- Multi-fight dashboard for fight nights (track more than one fight)
- Export fight stats or create fighter comparison snapshots (for creators/streamers)

---

## Mobile-Only Features

- Swipeable cards for browsing fighters and predictions
- Push notifications (event alerts, KO alerts, fantasy updates)
- Quick poll voting from lock screen

---

## Optional Future Add-ons
- NFT collectibles of highlight moments
- Fighter merch store integration
- Live score prediction AI (judge vs fan prediction accuracy tracking)

---

## Tech Stack:
- **Frontend (Desktop)**: Electron.js + Vanilla JS or React
- **Frontend (Mobile)**: React Native (preferred) or Flutter
- **Backend**: Firebase or Supabase (user auth, real-time data, storage)
- **Media APIs**: YouTube, ESPN (if available), MMA junkie scraping (if necessary)

---

## MVP Priorities (Phase 1 Launch):
1. Event Tracker
2. Live Fight Dashboard
3. Fighter Profiles
4. Fan Predictions + Leaderboard
5. Firebase setup for data/auth

---

## Success Metrics:
- Daily active users (DAU)
- Number of predictions submitted per event
- Average session time during fight nights
- User retention rate over 30 days
- Community engagement (posts, votes, comments)

---

## UX Style Notes:
- Clean, dark-mode UI by default
- Use fighter photos, icons, and color-coding for styles (e.g., red = striker, blue = wrestler)
- Fast navigation between upcoming cards, live fights, and profiles
- Smooth responsive design for mobile and scalable layout for desktop

---

## Versioning:
- v1.0: MVP with basic features and fighter data
- v1.5: Live chat, community voting
- v2.0: Fantasy cards, stat export, trivia/learning section 