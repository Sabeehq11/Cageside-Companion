// Statistical utilities for fighter data and predictions

/**
 * Calculate win percentage
 * @param {number} wins - Number of wins
 * @param {number} losses - Number of losses
 * @param {number} draws - Number of draws (optional)
 * @returns {number} Win percentage (0-100)
 */
export const calculateWinPercentage = (wins, losses, draws = 0) => {
  const totalFights = wins + losses + draws;
  if (totalFights === 0) return 0;
  return Math.round((wins / totalFights) * 100);
};

/**
 * Calculate finish rate (KO/TKO + Submission percentage)
 * @param {number} finishes - Number of finishes
 * @param {number} totalWins - Total number of wins
 * @returns {number} Finish rate percentage (0-100)
 */
export const calculateFinishRate = (finishes, totalWins) => {
  if (totalWins === 0) return 0;
  return Math.round((finishes / totalWins) * 100);
};

/**
 * Format fighter record
 * @param {Object} record - Fighter record object
 * @param {number} record.wins - Number of wins
 * @param {number} record.losses - Number of losses
 * @param {number} record.draws - Number of draws
 * @returns {string} Formatted record string (e.g., "20-3-1")
 */
export const formatRecord = (record) => {
  if (!record) return '0-0-0';
  const { wins = 0, losses = 0, draws = 0 } = record;
  return draws > 0 ? `${wins}-${losses}-${draws}` : `${wins}-${losses}`;
};

/**
 * Calculate prediction accuracy
 * @param {number} correctPredictions - Number of correct predictions
 * @param {number} totalPredictions - Total number of predictions
 * @returns {number} Accuracy percentage (0-100)
 */
export const calculateAccuracy = (correctPredictions, totalPredictions) => {
  if (totalPredictions === 0) return 0;
  return Math.round((correctPredictions / totalPredictions) * 100);
};

/**
 * Calculate prediction points based on accuracy
 * @param {Object} prediction - Prediction object
 * @param {Object} actual - Actual fight result
 * @returns {number} Points earned
 */
export const calculatePredictionPoints = (prediction, actual) => {
  if (!prediction || !actual) return 0;
  
  let points = 0;
  
  // Correct winner
  if (prediction.winner === actual.winner) {
    points += 10;
    
    // Correct method
    if (prediction.method === actual.method) {
      points += 5;
      
      // Correct round
      if (prediction.round === actual.round) {
        points += 3;
        // Perfect prediction bonus
        points += 7; // Total: 25 points
      }
    }
  }
  
  return points;
};

/**
 * Get fighter's recent form (last 5 fights)
 * @param {Array} fights - Array of fight objects
 * @param {string} fighterId - Fighter ID
 * @returns {Array} Array of recent results ['W', 'L', 'W', 'L', 'W']
 */
export const getRecentForm = (fights, fighterId) => {
  if (!fights || !fighterId) return [];
  
  return fights
    .filter(fight => fight.fighter1Id === fighterId || fight.fighter2Id === fighterId)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)
    .map(fight => {
      const isWinner = fight.winnerId === fighterId;
      return isWinner ? 'W' : 'L';
    });
};

/**
 * Calculate streak (current winning/losing streak)
 * @param {Array} recentForm - Array of recent results
 * @returns {Object} Streak object with type and count
 */
export const calculateStreak = (recentForm) => {
  if (!recentForm || recentForm.length === 0) {
    return { type: 'none', count: 0 };
  }
  
  const mostRecent = recentForm[0];
  let count = 0;
  
  for (const result of recentForm) {
    if (result === mostRecent) {
      count++;
    } else {
      break;
    }
  }
  
  return {
    type: mostRecent === 'W' ? 'win' : 'loss',
    count
  };
};

/**
 * Format streak for display
 * @param {Object} streak - Streak object from calculateStreak
 * @returns {string} Formatted streak string
 */
export const formatStreak = (streak) => {
  if (!streak || streak.type === 'none' || streak.count === 0) {
    return 'No active streak';
  }
  
  const type = streak.type === 'win' ? 'Win' : 'Loss';
  return `${streak.count} ${type} Streak`;
};

/**
 * Calculate age from birthdate
 * @param {Date|string} birthDate - Birth date
 * @returns {number} Age in years
 */
export const calculateAge = (birthDate) => {
  if (!birthDate) return 0;
  
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

/**
 * Get weight class from fighter weight
 * @param {number} weight - Fighter weight in pounds
 * @param {string} gender - Fighter gender ('men' or 'women')
 * @returns {string} Weight class name
 */
export const getWeightClass = (weight, gender = 'men') => {
  // This would typically import from constants, but keeping it simple for now
  const weightClasses = {
    men: [
      { name: 'Flyweight', limit: 125 },
      { name: 'Bantamweight', limit: 135 },
      { name: 'Featherweight', limit: 145 },
      { name: 'Lightweight', limit: 155 },
      { name: 'Welterweight', limit: 170 },
      { name: 'Middleweight', limit: 185 },
      { name: 'Light Heavyweight', limit: 205 },
      { name: 'Heavyweight', limit: 265 }
    ],
    women: [
      { name: 'Strawweight', limit: 115 },
      { name: "Women's Flyweight", limit: 125 },
      { name: "Women's Bantamweight", limit: 135 },
      { name: "Women's Featherweight", limit: 145 }
    ]
  };
  
  const classes = weightClasses[gender] || weightClasses.men;
  
  for (const weightClass of classes) {
    if (weight <= weightClass.limit) {
      return weightClass.name;
    }
  }
  
  return 'Super Heavyweight';
}; 