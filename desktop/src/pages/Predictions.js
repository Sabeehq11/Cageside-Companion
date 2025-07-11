import React, { useState } from 'react';
import PredictionForm from '../components/PredictionForm';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import { mockEvents, mockPredictions, mockCommunityPredictions, mockFighters } from '../data/mockData';
import './Predictions.css';

const Predictions = () => {
  const [activeTab, setActiveTab] = useState('make');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedFight, setSelectedFight] = useState(null);

  const upcomingEvents = mockEvents.filter(event => event.status === 'upcoming');
  const userPredictions = mockPredictions.filter(pred => pred.userId === 'user-123');

  const handlePredictionSubmit = async (prediction) => {
    console.log('Submitting prediction:', prediction);
    // Mock submission - in real app would save to database
    alert('Prediction submitted successfully!');
  };

  const getFighterById = (id) => mockFighters.find(f => f.id === id);

  const PredictionHistory = () => (
    <div className="prediction-history">
      <h3>Your Prediction History</h3>
      <div className="predictions-list">
        {userPredictions.map(prediction => {
          const event = mockEvents.find(e => e.id === prediction.eventId);
          const fight = event?.mainCard?.find(f => f.id === prediction.fightId);
          const winner = getFighterById(prediction.winner);
          
          return (
            <Card key={prediction.id} className="prediction-card">
              <div className="prediction-header">
                <div className="event-info">
                  <h4>{event?.name}</h4>
                  <p>{fight?.title}</p>
                </div>
                <div className={`prediction-status status-${prediction.status}`}>
                  {prediction.status}
                </div>
              </div>
              
              <div className="prediction-details">
                <div className="prediction-pick">
                  <strong>Pick:</strong> {winner?.name || 'Unknown Fighter'}
                </div>
                <div className="prediction-method">
                  <strong>Method:</strong> {prediction.method}
                </div>
                <div className="prediction-round">
                  <strong>Round:</strong> {prediction.round}
                </div>
                <div className="prediction-confidence">
                  <strong>Confidence:</strong> {prediction.confidence}%
                </div>
              </div>
              
              {prediction.points > 0 && (
                <div className="prediction-points">
                  +{prediction.points} points earned
                </div>
              )}
            </Card>
          );
        })}
        
        {userPredictions.length === 0 && (
          <div className="no-predictions">
            <h4>No predictions yet</h4>
            <p>Make your first prediction to get started!</p>
          </div>
        )}
      </div>
    </div>
  );

  const CommunityPredictions = () => (
    <div className="community-predictions">
      <h3>Community Predictions</h3>
      <div className="community-fights">
        {Object.entries(mockCommunityPredictions).map(([fightId, predictions]) => {
          const event = mockEvents.find(e => e.mainCard?.some(f => f.id === fightId));
          const fight = event?.mainCard?.find(f => f.id === fightId);
          
          if (!fight) return null;
          
          const fighter1 = getFighterById(fight.fighter1);
          const fighter2 = getFighterById(fight.fighter2);
          
          return (
            <Card key={fightId} className="community-fight-card">
              <div className="fight-header">
                <h4>{fight.title}</h4>
                <p>{event.name}</p>
              </div>
              
              <div className="fighters-prediction">
                <div className="fighter-prediction">
                  <div className="fighter-info">
                    <img src={fighter1?.image} alt={fighter1?.name} className="fighter-thumb" />
                    <span>{fighter1?.name}</span>
                  </div>
                  <div className="prediction-bar">
                    <div 
                      className="prediction-fill fighter1" 
                      style={{ width: `${predictions[fight.fighter1]}%` }}
                    ></div>
                    <span className="prediction-percentage">{predictions[fight.fighter1]}%</span>
                  </div>
                </div>
                
                <div className="vs-divider">VS</div>
                
                <div className="fighter-prediction">
                  <div className="fighter-info">
                    <img src={fighter2?.image} alt={fighter2?.name} className="fighter-thumb" />
                    <span>{fighter2?.name}</span>
                  </div>
                  <div className="prediction-bar">
                    <div 
                      className="prediction-fill fighter2" 
                      style={{ width: `${predictions[fight.fighter2]}%` }}
                    ></div>
                    <span className="prediction-percentage">{predictions[fight.fighter2]}%</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="predictions-page">
      <div className="page-header">
        <h1>🔮 Predictions</h1>
        <p>Make predictions and compete with the community</p>
      </div>

      <div className="predictions-tabs">
        <Button
          variant={activeTab === 'make' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('make')}
        >
          Make Predictions
        </Button>
        <Button
          variant={activeTab === 'history' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('history')}
        >
          My History ({userPredictions.length})
        </Button>
        <Button
          variant={activeTab === 'community' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('community')}
        >
          Community Picks
        </Button>
      </div>

      <div className="predictions-content">
        {activeTab === 'make' && (
          <div className="make-predictions">
            <div className="event-selection">
              <h3>Select an Event</h3>
              <div className="events-grid">
                {upcomingEvents.map(event => (
                  <Card
                    key={event.id}
                    className={`event-selection-card ${selectedEvent?.id === event.id ? 'selected' : ''}`}
                    onClick={() => setSelectedEvent(event)}
                    hover
                  >
                    <h4>{event.name}</h4>
                    <p>{event.location}</p>
                    <p>{new Date(event.date).toLocaleDateString()}</p>
                    <div className="fights-count">
                      {event.mainCard?.length || 0} fights available
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {selectedEvent && (
              <div className="fight-selection">
                <h3>Select a Fight from {selectedEvent.name}</h3>
                <div className="fights-grid">
                  {selectedEvent.mainCard?.map(fight => {
                    const fighter1 = getFighterById(fight.fighter1);
                    const fighter2 = getFighterById(fight.fighter2);
                    
                    return (
                      <Card
                        key={fight.id}
                        className={`fight-selection-card ${selectedFight?.id === fight.id ? 'selected' : ''}`}
                        onClick={() => setSelectedFight(fight)}
                        hover
                      >
                        <div className="fight-title">{fight.title}</div>
                        <div className="fight-matchup">
                          <span>{fighter1?.name}</span>
                          <span className="vs">VS</span>
                          <span>{fighter2?.name}</span>
                        </div>
                        <div className="weight-class">{fight.weightClass}</div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {selectedFight && (
              <div className="prediction-form-section">
                <PredictionForm
                  fight={selectedFight}
                  onSubmit={handlePredictionSubmit}
                />
              </div>
            )}
          </div>
        )}

        {activeTab === 'history' && <PredictionHistory />}
        {activeTab === 'community' && <CommunityPredictions />}
      </div>
    </div>
  );
};

export default Predictions; 