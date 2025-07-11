// Mock data for CageSide Companion

export const mockEvents = [
  {
    id: 'ufc-304',
    name: 'UFC 304',
    date: '2024-12-28T03:00:00Z',
    status: 'upcoming',
    location: 'Las Vegas, NV',
    type: 'numbered',
    mainCard: [
      {
        id: 'main-event',
        fighter1: 'jon-jones',
        fighter2: 'stipe-miocic',
        weightClass: 'Heavyweight',
        title: 'UFC Heavyweight Championship',
        isMainEvent: true
      },
      {
        id: 'co-main',
        fighter1: 'alex-pereira',
        fighter2: 'jamahal-hill',
        weightClass: 'Light Heavyweight',
        title: 'UFC Light Heavyweight Championship',
        isMainEvent: false
      }
    ]
  },
  {
    id: 'ufc-303',
    name: 'UFC 303',
    date: '2024-11-15T03:00:00Z',
    status: 'completed',
    location: 'Madison Square Garden, NY',
    type: 'numbered',
    results: {
      mainEvent: {
        winner: 'alex-pereira',
        method: 'KO/TKO',
        round: 2,
        time: '3:45'
      }
    }
  },
  {
    id: 'ufc-fight-night-50',
    name: 'UFC Fight Night 50',
    date: '2024-12-15T02:00:00Z',
    status: 'upcoming',
    location: 'UFC Apex, Las Vegas',
    type: 'fight-night',
    mainCard: [
      {
        id: 'main-fn',
        fighter1: 'islam-makhachev',
        fighter2: 'charles-oliveira',
        weightClass: 'Lightweight',
        title: 'Main Event',
        isMainEvent: true
      }
    ]
  }
];

export const mockFighters = [
  {
    id: 'jon-jones',
    name: 'Jon Jones',
    nickname: 'Bones',
    division: 'Heavyweight',
    record: { wins: 27, losses: 1, draws: 0 },
    age: 36,
    height: '6\'4"',
    reach: '84.5"',
    style: 'Well-rounded',
    bio: 'Former UFC Light Heavyweight Champion, now competing at heavyweight. Widely considered one of the greatest MMA fighters of all time.',
    stats: {
      finishRate: 65,
      takedownAccuracy: 45,
      strikingAccuracy: 58
    },
    streak: { type: 'win', count: 1 },
    lastFight: '2024-03-15',
    image: 'https://via.placeholder.com/300x400/007bff/ffffff?text=Jon+Jones'
  },
  {
    id: 'stipe-miocic',
    name: 'Stipe Miocic',
    nickname: 'The Firefighter',
    division: 'Heavyweight',
    record: { wins: 20, losses: 4, draws: 0 },
    age: 41,
    height: '6\'4"',
    reach: '80"',
    style: 'Wrestler',
    bio: 'Former UFC Heavyweight Champion with most title defenses in heavyweight division history.',
    stats: {
      finishRate: 70,
      takedownAccuracy: 52,
      strikingAccuracy: 55
    },
    streak: { type: 'loss', count: 1 },
    lastFight: '2024-01-20',
    image: 'https://via.placeholder.com/300x400/e3342f/ffffff?text=Stipe+Miocic'
  },
  {
    id: 'alex-pereira',
    name: 'Alex Pereira',
    nickname: 'Poatan',
    division: 'Light Heavyweight',
    record: { wins: 10, losses: 2, draws: 0 },
    age: 36,
    height: '6\'4"',
    reach: '79"',
    style: 'Striker',
    bio: 'Former UFC Middleweight Champion, now Light Heavyweight Champion. Known for devastating knockout power.',
    stats: {
      finishRate: 90,
      takedownAccuracy: 25,
      strikingAccuracy: 62
    },
    streak: { type: 'win', count: 3 },
    lastFight: '2024-11-15',
    image: 'https://via.placeholder.com/300x400/38c172/ffffff?text=Alex+Pereira'
  },
  {
    id: 'islam-makhachev',
    name: 'Islam Makhachev',
    nickname: 'The Dagestani Destroyer',
    division: 'Lightweight',
    record: { wins: 25, losses: 1, draws: 0 },
    age: 32,
    height: '5\'10"',
    reach: '70"',
    style: 'Grappler',
    bio: 'Current UFC Lightweight Champion with dominant wrestling and submission skills.',
    stats: {
      finishRate: 52,
      takedownAccuracy: 78,
      strikingAccuracy: 49
    },
    streak: { type: 'win', count: 13 },
    lastFight: '2024-09-10',
    image: 'https://via.placeholder.com/300x400/007bff/ffffff?text=Islam+Makhachev'
  },
  {
    id: 'charles-oliveira',
    name: 'Charles Oliveira',
    nickname: 'Do Bronx',
    division: 'Lightweight',
    record: { wins: 34, losses: 9, draws: 0 },
    age: 34,
    height: '5\'10"',
    reach: '74"',
    style: 'Submission Specialist',
    bio: 'Former UFC Lightweight Champion with most submission wins in UFC history.',
    stats: {
      finishRate: 76,
      takedownAccuracy: 42,
      strikingAccuracy: 45
    },
    streak: { type: 'win', count: 2 },
    lastFight: '2024-08-22',
    image: 'https://via.placeholder.com/300x400/8e44ad/ffffff?text=Charles+Oliveira'
  },
  {
    id: 'jamahal-hill',
    name: 'Jamahal Hill',
    nickname: 'Sweet Dreams',
    division: 'Light Heavyweight',
    record: { wins: 12, losses: 1, draws: 0 },
    age: 32,
    height: '6\'4"',
    reach: '81"',
    style: 'Striker',
    bio: 'Former UFC Light Heavyweight Champion with excellent boxing and knockout power.',
    stats: {
      finishRate: 83,
      takedownAccuracy: 30,
      strikingAccuracy: 58
    },
    streak: { type: 'loss', count: 1 },
    lastFight: '2024-07-30',
    image: 'https://via.placeholder.com/300x400/e3342f/ffffff?text=Jamahal+Hill'
  }
];

export const mockPredictions = [
  {
    id: 'pred-1',
    eventId: 'ufc-304',
    fightId: 'main-event',
    userId: 'user-123',
    winner: 'jon-jones',
    method: 'Decision',
    round: 5,
    confidence: 75,
    points: 0,
    status: 'pending',
    timestamp: '2024-12-20T10:30:00Z'
  },
  {
    id: 'pred-2',
    eventId: 'ufc-303',
    fightId: 'co-main',
    userId: 'user-123',
    winner: 'alex-pereira',
    method: 'KO/TKO',
    round: 2,
    confidence: 90,
    points: 25,
    status: 'correct',
    timestamp: '2024-11-10T14:15:00Z'
  },
  {
    id: 'pred-3',
    eventId: 'ufc-303',
    fightId: 'main-event-303',
    userId: 'user-123',
    winner: 'opponent',
    method: 'Submission',
    round: 3,
    confidence: 60,
    points: 0,
    status: 'incorrect',
    timestamp: '2024-11-05T16:45:00Z'
  }
];

export const mockLeaderboard = [
  {
    id: 'user-1',
    username: 'UFCKing2024',
    points: 1250,
    accuracy: 78,
    totalPredictions: 45,
    correctPredictions: 35,
    rank: 1,
    badges: ['🥇 Champion', '🔥 Hot Streak', '📊 Analyst'],
    streak: { type: 'win', count: 8 },
    avatar: 'https://via.placeholder.com/60x60/007bff/ffffff?text=UK'
  },
  {
    id: 'user-2',
    username: 'CagePredictor',
    points: 1180,
    accuracy: 82,
    totalPredictions: 38,
    correctPredictions: 31,
    rank: 2,
    badges: ['🥈 Runner-up', '🎯 Sharp Shooter'],
    streak: { type: 'win', count: 5 },
    avatar: 'https://via.placeholder.com/60x60/38c172/ffffff?text=CP'
  },
  {
    id: 'user-3',
    username: 'MMAMaster',
    points: 1095,
    accuracy: 75,
    totalPredictions: 52,
    correctPredictions: 39,
    rank: 3,
    badges: ['🥉 Third Place', '📈 Consistent'],
    streak: { type: 'loss', count: 2 },
    avatar: 'https://via.placeholder.com/60x60/e3342f/ffffff?text=MM'
  },
  {
    id: 'user-123',
    username: 'FightFan2024',
    points: 890,
    accuracy: 68,
    totalPredictions: 28,
    correctPredictions: 19,
    rank: 15,
    badges: ['🌟 Rising Star'],
    streak: { type: 'win', count: 3 },
    avatar: 'https://via.placeholder.com/60x60/8e44ad/ffffff?text=FF'
  }
];

export const mockNews = [
  {
    id: 'news-1',
    title: 'Jon Jones vs Stipe Miocic: The Ultimate Heavyweight Showdown',
    summary: 'Two legends collide in what promises to be the fight of the century.',
    date: '2024-12-22T12:00:00Z',
    category: 'Breaking News'
  },
  {
    id: 'news-2',
    title: 'UFC 304 Early Weigh-in Results: All Fighters Make Weight',
    summary: 'No issues at the scales as all main card fighters successfully make weight.',
    date: '2024-12-21T18:30:00Z',
    category: 'Event News'
  },
  {
    id: 'news-3',
    title: 'Alex Pereira Reveals Training Camp Secrets',
    summary: 'The champion discusses his preparation for the upcoming title defense.',
    date: '2024-12-20T14:15:00Z',
    category: 'Fighter News'
  }
];

export const mockStats = {
  totalFighters: 750,
  totalEvents: 628,
  weightDivisions: 12,
  activeFighters: 642,
  upcomingEvents: 3,
  completedEvents: 625
};

export const mockCommunityPredictions = {
  'main-event': {
    'jon-jones': 65,
    'stipe-miocic': 35
  },
  'co-main': {
    'alex-pereira': 78,
    'jamahal-hill': 22
  }
}; 