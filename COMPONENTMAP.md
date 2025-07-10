# Component Map – CageSide Companion

---

## 🏠 Home Screen

- `Navbar` – Main navigation (desktop)
- `TabNav` – Bottom tabs (mobile)
- `NextFightCard` – Highlights upcoming event
- `FighterSpotlight` – Rotates trending fighters
- `NewsFeed` – UFC-related headlines

---

## 📆 Events Page

- `EventList` – Scrollable list of all events
- `CountdownTimer` – Real-time countdown
- `EventCard` – Clickable cards with status badge

---

## 🥋 Fighter Profiles

- `FighterHeader` – Name, record, image
- `BioBlock` – Bio, age, gym, style
- `HighlightReel` – Embedded video (YouTube)
- `StatRadarChart` – Visual style comparison (optional)

---

## 📊 Prediction System

- `PredictionForm` – Select fighter, round, method
- `SubmitButton` – Save prediction to Firestore
- `PredictionHistory` – User's past picks

---

## 🏆 Leaderboard Page

- `LeaderboardList` – Ranks users by points
- `UserBadge` – Level or rank based on accuracy
- `FilterDropdown` – Time range or weight class filters

---

## 📲 Notifications (Mobile Only)

- `NotificationIcon` – Bell with badge
- `PushOptInBanner` – Prompt user to allow alerts

---

## 🔁 Shared Components

- `UserAvatar`
- `LoadingSpinner`
- `ErrorToast`
- `ThemeToggle`
- `BackButton`

---

## 🧪 Admin (Optional Later)

- `FighterUploader` – Add/update fighter info
- `EventEditor` – Create or modify fight cards
- `FunctionTrigger` – Manually run backend functions 