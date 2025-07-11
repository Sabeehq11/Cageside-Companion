import React, { useState } from 'react';
import LeaderboardEntry from '../components/LeaderboardEntry';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { mockLeaderboard } from '../data/mockData';
import './Leaderboard.css';

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState('overall');
  const [sortBy, setSortBy] = useState('points');

  // Find current user
  const currentUserId = 'user-123';
  const currentUser = mockLeaderboard.find(user => user.id === currentUserId);

  // Sort leaderboard based on selected criteria
  const getSortedLeaderboard = () => {
    return [...mockLeaderboard].sort((a, b) => {
      switch (sortBy) {
        case 'accuracy':
          return b.accuracy - a.accuracy;
        case 'predictions':
          return b.totalPredictions - a.totalPredictions;
        default:
          return b.points - a.points;
      }
    });
  };

  const sortedLeaderboard = getSortedLeaderboard();

  // Mock monthly leaderboard (subset for demo)
  const monthlyLeaderboard = sortedLeaderboard.slice(0, 8).map((user, index) => ({
    ...user,
    rank: index + 1,
    points: Math.floor(user.points * 0.3), // Simulate monthly points
  }));

  const currentLeaderboard = activeTab === 'overall' ? sortedLeaderboard : monthlyLeaderboard;

  const achievementCategories = [
    {
      name: 'Prediction Achievements',
      achievements: [
        { icon: '🎯', name: 'First Blood', description: 'Make your first prediction', unlocked: true },
        { icon: '🔥', name: 'Hot Streak', description: 'Win 5 predictions in a row', unlocked: true },
        { icon: '📊', name: 'Analyst', description: 'Make 50 predictions', unlocked: true },
        { icon: '🏆', name: 'Champion', description: 'Reach #1 on leaderboard', unlocked: false },
      ]
    },
    {
      name: 'Accuracy Achievements',
      achievements: [
        { icon: '🎯', name: 'Sharp Shooter', description: 'Achieve 80% accuracy', unlocked: true },
        { icon: '🧠', name: 'Mind Reader', description: 'Predict 3 exact outcomes', unlocked: false },
        { icon: '⚡', name: 'Lightning Round', description: 'Perfect event prediction', unlocked: false },
        { icon: '🔮', name: 'Oracle', description: '90% accuracy over 20 fights', unlocked: false },
      ]
    }
  ];

  return (
    <div className="leaderboard-page">
      <div className="page-header">
        <h1>🏆 Leaderboard</h1>
        <p>Compete with the community and earn your place among champions</p>
      </div>

      <div className="leaderboard-tabs">
        <Button
          variant={activeTab === 'overall' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('overall')}
        >
          Overall Rankings
        </Button>
        <Button
          variant={activeTab === 'monthly' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('monthly')}
        >
          Monthly Rankings
        </Button>
        <Button
          variant={activeTab === 'achievements' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('achievements')}
        >
          Achievements
        </Button>
      </div>

      {(activeTab === 'overall' || activeTab === 'monthly') && (
        <>
          <div className="leaderboard-controls">
            <div className="sort-section">
              <label>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="points">Points</option>
                <option value="accuracy">Accuracy</option>
                <option value="predictions">Total Predictions</option>
              </select>
            </div>
            
            <div className="period-info">
              <span className="period-label">
                {activeTab === 'overall' ? 'All Time' : 'December 2024'}
              </span>
            </div>
          </div>

          {/* Current User Highlight */}
          {currentUser && (
            <div className="current-user-section">
              <h3>Your Position</h3>
              <LeaderboardEntry
                user={currentUser}
                rank={currentUser.rank}
                currentUser={true}
                showBadges={true}
              />
            </div>
          )}

          {/* Top 3 Podium */}
          <div className="podium-section">
            <h3>Top Champions</h3>
            <div className="podium">
              {currentLeaderboard.slice(0, 3).map((user, index) => (
                <div key={user.id} className={`podium-position position-${index + 1}`}>
                  <div className="podium-rank">{index + 1}</div>
                  <img src={user.avatar} alt={user.username} className="podium-avatar" />
                  <div className="podium-username">{user.username}</div>
                  <div className="podium-points">{user.points.toLocaleString()} pts</div>
                  <div className="podium-accuracy">{user.accuracy}% accuracy</div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Rankings */}
          <div className="rankings-section">
            <h3>Full Rankings</h3>
            <div className="rankings-list">
              {currentLeaderboard.map((user, index) => (
                <LeaderboardEntry
                  key={user.id}
                  user={user}
                  rank={index + 1}
                  currentUser={user.id === currentUserId}
                  showBadges={true}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === 'achievements' && (
        <div className="achievements-section">
          <h3>Achievement System</h3>
          <div className="achievements-grid">
            {achievementCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="achievement-category">
                <h4>{category.name}</h4>
                <div className="achievements-list">
                  {category.achievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className={`achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`}
                    >
                      <div className="achievement-icon">{achievement.icon}</div>
                      <div className="achievement-details">
                        <div className="achievement-name">{achievement.name}</div>
                        <div className="achievement-description">{achievement.description}</div>
                      </div>
                      {achievement.unlocked && (
                        <div className="achievement-status">✓</div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Achievement Progress */}
          <Card className="achievement-progress">
            <h4>Your Progress</h4>
            <div className="progress-stats">
              <div className="progress-stat">
                <div className="progress-number">6</div>
                <div className="progress-label">Achievements Unlocked</div>
              </div>
              <div className="progress-stat">
                <div className="progress-number">2</div>
                <div className="progress-label">Achievements Remaining</div>
              </div>
              <div className="progress-stat">
                <div className="progress-number">75%</div>
                <div className="progress-label">Completion Rate</div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Leaderboard Stats */}
      <div className="leaderboard-stats">
        <div className="stats-grid">
          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-number">{mockLeaderboard.length}</div>
              <div className="stat-label">Total Users</div>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-number">
                {Math.round(mockLeaderboard.reduce((sum, user) => sum + user.accuracy, 0) / mockLeaderboard.length)}%
              </div>
              <div className="stat-label">Average Accuracy</div>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-number">
                {mockLeaderboard.reduce((sum, user) => sum + user.totalPredictions, 0)}
              </div>
              <div className="stat-label">Total Predictions</div>
            </div>
          </Card>
          <Card className="stat-card">
            <div className="stat-content">
              <div className="stat-number">{mockLeaderboard[0]?.points.toLocaleString()}</div>
              <div className="stat-label">Highest Score</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard; 