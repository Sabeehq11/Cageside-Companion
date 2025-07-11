import React, { useState } from 'react';
import { mockFighters } from '../data/mockData';
import './Fighters.css';

const Fighters = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFighter, setSelectedFighter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredFighters = mockFighters.filter(fighter => {
    const matchesSearch = fighter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fighter.nickname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         fighter.division.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const handleFighterClick = (fighter) => {
    setSelectedFighter(fighter);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedFighter(null);
  };

  const getDivisionColor = (division) => {
    const colors = {
      'Heavyweight': '#ff4757',
      'Light Heavyweight': '#ff6b7a',
      'Middleweight': '#ffa502',
      'Welterweight': '#2ed573',
      'Lightweight': '#1e90ff',
      'Featherweight': '#a55eea',
      'Bantamweight': '#26d0ce',
      'Flyweight': '#fd79a8'
    };
    return colors[division] || '#cccccc';
  };

  const FighterModal = ({ fighter, onClose }) => {
    if (!fighter) return null;
    
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{fighter.name}</h2>
            <button className="modal-close" onClick={onClose}>✕</button>
          </div>
          
          <div className="modal-body">
            <div className="modal-fighter-section">
              <div className="modal-fighter-image">
                <img src={fighter.image} alt={fighter.name} />
              </div>
              
              <div className="modal-fighter-info">
                <div className="fighter-title">
                  <h3>{fighter.name}</h3>
                  {fighter.nickname && <p className="nickname">"{fighter.nickname}"</p>}
                </div>
                
                <div className="quick-stats">
                  <div className="stat-item">
                    <span className="stat-label">Record</span>
                    <span className="stat-value">{fighter.record.wins}-{fighter.record.losses}-{fighter.record.draws}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Division</span>
                    <span className="stat-value">{fighter.division}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Age</span>
                    <span className="stat-value">{fighter.age}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Reach</span>
                    <span className="stat-value">{fighter.reach}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-bio-section">
              <h4>Biography</h4>
              <p>{fighter.bio}</p>
            </div>

            <div className="modal-stats-section">
              <h4>Fight Statistics</h4>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">{fighter.stats.finishRate}%</div>
                  <div className="stat-label">Finish Rate</div>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: `${fighter.stats.finishRate}%` }}></div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{fighter.stats.strikingAccuracy}%</div>
                  <div className="stat-label">Striking Accuracy</div>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: `${fighter.stats.strikingAccuracy}%` }}></div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{fighter.stats.takedownAccuracy}%</div>
                  <div className="stat-label">Takedown Accuracy</div>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: `${fighter.stats.takedownAccuracy}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-streak-section">
              <h4>Current Streak</h4>
              <div className={`streak-badge ${fighter.streak.type}`}>
                {fighter.streak.count} {fighter.streak.type === 'win' ? 'Win' : 'Loss'} Streak
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fighters-page">
      <div className="page-header">
        <h1>UFC Fighters</h1>
        <p>Discover fighter profiles, stats, and records</p>
      </div>

      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <div className="search-icon">🔍</div>
          <input
            type="text"
            placeholder="Search fighters by name, nickname, or division..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => setSearchTerm('')}
            >
              ✕
            </button>
          )}
        </div>
        <div className="search-results-count">
          {filteredFighters.length} of {mockFighters.length} fighters
        </div>
      </div>

      {/* Fighter Grid */}
      <div className="fighters-grid">
        {filteredFighters.map(fighter => (
          <div key={fighter.id} className="fighter-card">
            <div className="fighter-image-container">
              <img src={fighter.image} alt={fighter.name} className="fighter-image" />
              <div 
                className="division-badge" 
                style={{ backgroundColor: getDivisionColor(fighter.division) }}
              >
                {fighter.division}
              </div>
            </div>
            
            <div className="fighter-info">
              <h3 className="fighter-name">{fighter.name}</h3>
              {fighter.nickname && <p className="fighter-nickname">"{fighter.nickname}"</p>}
              
              <div className="fighter-record">
                <span className="record">{fighter.record.wins}-{fighter.record.losses}-{fighter.record.draws}</span>
                <span className="record-label">W-L-D</span>
              </div>
              
              <div className="fighter-stats">
                <div className="stat">
                  <span className="stat-value">{fighter.stats.finishRate}%</span>
                  <span className="stat-label">Finish Rate</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{fighter.streak.count}</span>
                  <span className="stat-label">{fighter.streak.type === 'win' ? 'Win' : 'Loss'} Streak</span>
                </div>
              </div>
              
              <button 
                className="view-profile-btn"
                onClick={() => handleFighterClick(fighter)}
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredFighters.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon">🥊</div>
          <h3>No fighters found</h3>
          <p>Try adjusting your search term or browse all fighters.</p>
          <button 
            className="clear-search-btn"
            onClick={() => setSearchTerm('')}
          >
            Show All Fighters
          </button>
        </div>
      )}

      {/* Fighter Modal */}
      {showModal && selectedFighter && (
        <FighterModal fighter={selectedFighter} onClose={closeModal} />
      )}
    </div>
  );
};

export default Fighters; 