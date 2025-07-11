# CageSide Companion

A UFC-focused desktop companion app built with Electron and React.

## 🚀 Phase 1 - Project Setup Complete

This is a production-ready Electron + React desktop app scaffold featuring:

### ✅ Core Features Implemented:
- **Electron App**: Secure desktop application with proper window management
- **React 18**: Modern React with React Router DOM for navigation
- **Dark UFC Theme**: Professional dark theme with blue accents
- **Sidebar Navigation**: 5 main sections with icons and active states
- **Responsive Design**: Works on different screen sizes
- **Shared Utilities**: Date formatting, statistics calculations, and UFC constants

### 🏗️ Project Structure:
```
/
├── desktop/           # React frontend app
│   ├── src/
│   │   ├── components/   # Layout and UI components
│   │   ├── pages/        # Route pages (Home, Events, etc.)
│   │   └── styles/       # CSS styling
│   ├── public/          # Static assets
│   ├── main.js          # Electron main process
│   └── preload.js       # Electron preload script
├── shared/            # Shared utilities and constants
│   ├── constants/       # Theme colors, UFC data
│   └── utils/          # Date/stat calculation functions
└── docs/              # Documentation (PRD, Workflow, etc.)
```

### 🎨 UFC Theme Colors:
- **Background**: Black (#000000)
- **Primary**: Blue (#007bff)
- **Alert**: Red (#e3342f)
- **Success**: Green (#38c172)
- **Text**: Light gray/white

### 📱 Navigation Pages:
1. **Home** - Welcome dashboard with feature overview
2. **Events** - UFC event scheduling and tracking
3. **Fighters** - Fighter profiles and statistics
4. **Predictions** - Fight predictions and scoring
5. **Leaderboard** - Global prediction rankings

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start development (React + Electron)
npm start

# Build React app
npm run react-build

# Build Electron app for distribution
npm run build

# Run only React dev server
npm run react-start

# Run only Electron
npm run electron
```

## 🎯 Next Steps (Phase 2)

The scaffold is ready for Phase 2 development:
- UI component development
- Firebase integration
- Real UFC data integration
- Live event tracking
- User authentication
- Prediction system implementation

## 🔧 Technical Details

- **Frontend**: React 18 with React Router DOM
- **Desktop**: Electron 28+ with secure defaults
- **Styling**: Custom CSS with UFC-inspired dark theme
- **Build**: React Scripts + Electron Builder
- **Security**: Context isolation enabled, node integration disabled

## 📖 Documentation

See the `/docs` folder for:
- `PRD.md` - Product Requirements Document
- `WORKFLOW.md` - Development workflow and phases
- `ARCHITECTURE.md` - Technical architecture overview

---

**CageSide Companion** - Your ultimate UFC desktop companion! 🥊 