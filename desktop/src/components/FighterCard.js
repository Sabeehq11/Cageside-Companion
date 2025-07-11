import React from 'react';
import Card from './UI/Card';
import { formatRecord } from '../utils/statUtils';
import './FighterCard.css';

const FighterCard = ({ fighter, onClick, size = 'medium', showStats = true }) => {
  if (!fighter) return null;

  const record = formatRecord(fighter.record);
  const winPercentage = fighter.record ? 
    Math.round((fighter.record.wins / (fighter.record.wins + fighter.record.losses)) * 100) : 0;

  const getStyleColor = (style) => {
    switch (style) {
      case 'Striker': return '#e3342f';
      case 'Wrestler': return '#007bff';
      case 'Grappler': return '#38c172';
      case 'Submission Specialist': return '#8e44ad';
      default: return '#cccccc';
    }
  };

  return (
    <Card 
      className={`fighter-card fighter-card-${size}`}
      variant="default"
      hover={!!onClick}
      onClick={onClick}
    >
      <div className="fighter-image-container">
        <img 
          src={fighter.image} 
          alt={fighter.name}
          className="fighter-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x400/404040/cccccc?text=No+Image';
          }}
        />
        <div className="fighter-division">{fighter.division}</div>
      </div>
      
      <div className="fighter-info">
        <h3 className="fighter-name">{fighter.name}</h3>
        {fighter.nickname && (
          <p className="fighter-nickname">"{fighter.nickname}"</p>
        )}
        
        <div className="fighter-record">
          <span className="record-text">{record}</span>
          <span className="win-percentage">({winPercentage}% wins)</span>
        </div>

        <div className="fighter-style" style={{ color: getStyleColor(fighter.style) }}>
          <span className="style-indicator">●</span>
          {fighter.style}
        </div>

        {showStats && (
          <div className="fighter-stats">
            <div className="stat-item">
              <span className="stat-label">Age</span>
              <span className="stat-value">{fighter.age}</span>
            </div>
            {fighter.streak && (
              <div className="stat-item">
                <span className="stat-label">Streak</span>
                <span className={`stat-value streak-${fighter.streak.type}`}>
                  {fighter.streak.count} {fighter.streak.type === 'win' ? 'W' : 'L'}
                </span>
              </div>
            )}
            {fighter.stats && (
              <div className="stat-item">
                <span className="stat-label">Finish Rate</span>
                <span className="stat-value">{fighter.stats.finishRate}%</span>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default FighterCard; 