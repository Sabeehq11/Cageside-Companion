import React from 'react';
import './LeaderboardEntry.css';

const LeaderboardEntry = ({ user, currentUser = false, rank, showBadges = true }) => {
  if (!user) return null;

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  const getStreakColor = (streak) => {
    if (!streak) return '#999999';
    return streak.type === 'win' ? '#38c172' : '#e3342f';
  };

  return (
    <div className={`leaderboard-entry ${currentUser ? 'current-user' : ''} ${rank <= 3 ? 'top-three' : ''}`}>
      <div className="rank-section">
        <div className="rank-icon">{getRankIcon(rank)}</div>
      </div>

      <div className="user-info">
        <div className="avatar-section">
          <img 
            src={user.avatar} 
            alt={user.username}
            className="user-avatar"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/60x60/404040/cccccc?text=?';
            }}
          />
          {currentUser && <div className="current-user-indicator">YOU</div>}
        </div>
        
        <div className="user-details">
          <div className="username">{user.username}</div>
          {showBadges && user.badges && user.badges.length > 0 && (
            <div className="badges">
              {user.badges.slice(0, 2).map((badge, index) => (
                <span key={index} className="badge">{badge}</span>
              ))}
              {user.badges.length > 2 && (
                <span className="badge-more">+{user.badges.length - 2}</span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-item">
          <div className="stat-value points">{user.points.toLocaleString()}</div>
          <div className="stat-label">Points</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value accuracy">{user.accuracy}%</div>
          <div className="stat-label">Accuracy</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-value predictions">{user.totalPredictions}</div>
          <div className="stat-label">Predictions</div>
        </div>
        
        {user.streak && (
          <div className="stat-item">
            <div 
              className="stat-value streak"
              style={{ color: getStreakColor(user.streak) }}
            >
              {user.streak.count}{user.streak.type === 'win' ? 'W' : 'L'}
            </div>
            <div className="stat-label">Streak</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardEntry; 