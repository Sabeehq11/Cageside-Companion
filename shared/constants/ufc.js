// UFC Weight Classes (in pounds)
export const WEIGHT_CLASSES = {
  STRAWWEIGHT: { name: 'Strawweight', limit: 115, gender: 'women' },
  FLYWEIGHT: { name: 'Flyweight', limit: 125, gender: 'men' },
  WOMENS_FLYWEIGHT: { name: "Women's Flyweight", limit: 125, gender: 'women' },
  BANTAMWEIGHT: { name: 'Bantamweight', limit: 135, gender: 'men' },
  WOMENS_BANTAMWEIGHT: { name: "Women's Bantamweight", limit: 135, gender: 'women' },
  FEATHERWEIGHT: { name: 'Featherweight', limit: 145, gender: 'men' },
  WOMENS_FEATHERWEIGHT: { name: "Women's Featherweight", limit: 145, gender: 'women' },
  LIGHTWEIGHT: { name: 'Lightweight', limit: 155, gender: 'men' },
  WELTERWEIGHT: { name: 'Welterweight', limit: 170, gender: 'men' },
  MIDDLEWEIGHT: { name: 'Middleweight', limit: 185, gender: 'men' },
  LIGHT_HEAVYWEIGHT: { name: 'Light Heavyweight', limit: 205, gender: 'men' },
  HEAVYWEIGHT: { name: 'Heavyweight', limit: 265, gender: 'men' }
};

// Fight outcomes
export const FIGHT_OUTCOMES = {
  WIN: 'win',
  LOSS: 'loss',
  DRAW: 'draw',
  NO_CONTEST: 'no-contest'
};

// Win methods
export const WIN_METHODS = {
  KO: 'KO/TKO',
  SUBMISSION: 'Submission',
  DECISION: 'Decision',
  DISQUALIFICATION: 'Disqualification'
};

// Fight statuses
export const FIGHT_STATUS = {
  UPCOMING: 'upcoming',
  LIVE: 'live',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
};

// Event types
export const EVENT_TYPES = {
  NUMBERED: 'numbered', // UFC 300
  FIGHT_NIGHT: 'fight-night', // UFC Fight Night
  PPV: 'ppv' // Pay-per-view
};

// Fighter styles
export const FIGHTER_STYLES = {
  STRIKER: 'Striker',
  WRESTLER: 'Wrestler',
  GRAPPLER: 'Grappler',
  SUBMISSION: 'Submission Specialist',
  WELL_ROUNDED: 'Well-rounded'
};

// Prediction scoring
export const PREDICTION_POINTS = {
  CORRECT_WINNER: 10,
  CORRECT_METHOD: 5,
  CORRECT_ROUND: 3,
  PERFECT_PREDICTION: 25 // All correct
};

// Navigation items
export const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: '🏠', path: '/' },
  { id: 'events', label: 'Events', icon: '🥊', path: '/events' },
  { id: 'fighters', label: 'Fighters', icon: '👤', path: '/fighters' },
  { id: 'predictions', label: 'Predictions', icon: '🔮', path: '/predictions' },
  { id: 'leaderboard', label: 'Leaderboard', icon: '🏆', path: '/leaderboard' }
]; 