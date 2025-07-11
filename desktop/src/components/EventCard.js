import React from 'react';
import Card from './UI/Card';
import CountdownTimer from './CountdownTimer';
import { formatDate } from '../utils/dateUtils';
import { mockFighters } from '../data/mockData';
import './EventCard.css';

const EventCard = ({ event, onClick, showCountdown = true, size = 'medium' }) => {
  if (!event) return null;

  const getFighterById = (id) => mockFighters.find(f => f.id === id);
  const isUpcoming = event.status === 'upcoming';
  const isLive = event.status === 'live';
  const isCompleted = event.status === 'completed';

  return (
    <Card 
      className={`event-card event-card-${size} event-${event.status}`}
      variant={isLive ? 'danger' : isUpcoming ? 'primary' : 'default'}
      hover={!!onClick}
      onClick={onClick}
    >
      <div className="event-header">
        <div className="event-title-section">
          <h3 className="event-name">{event.name}</h3>
          <p className="event-location">{event.location}</p>
          <p className="event-date">{formatDate(event.date, true)}</p>
        </div>
        <div className={`event-status status-${event.status}`}>
          {isLive && '🔴 '}
          {event.status.toUpperCase()}
        </div>
      </div>

      {isUpcoming && showCountdown && (
        <div className="event-countdown">
          <CountdownTimer 
            eventDate={event.date} 
            size="small" 
            showLabels={false}
          />
        </div>
      )}

      <div className="event-fights">
        {event.mainCard && event.mainCard.slice(0, 2).map((fight, index) => {
          const fighter1 = getFighterById(fight.fighter1);
          const fighter2 = getFighterById(fight.fighter2);
          
          return (
            <div key={fight.id} className={`fight-matchup ${fight.isMainEvent ? 'main-event' : ''}`}>
              {fight.isMainEvent && <div className="main-event-badge">MAIN EVENT</div>}
              
              <div className="fight-title">{fight.title}</div>
              <div className="fighters">
                <div className="fighter">
                  <span className="fighter-name">{fighter1?.name || 'TBD'}</span>
                  <span className="fighter-record">
                    {fighter1?.record ? `${fighter1.record.wins}-${fighter1.record.losses}` : ''}
                  </span>
                </div>
                <div className="vs">VS</div>
                <div className="fighter">
                  <span className="fighter-name">{fighter2?.name || 'TBD'}</span>
                  <span className="fighter-record">
                    {fighter2?.record ? `${fighter2.record.wins}-${fighter2.record.losses}` : ''}
                  </span>
                </div>
              </div>
              <div className="weight-class">{fight.weightClass}</div>
            </div>
          );
        })}
      </div>

      {isCompleted && event.results && (
        <div className="event-results">
          <div className="results-header">Results</div>
          <div className="main-result">
            <span className="winner">{event.results.mainEvent.winner.replace('-', ' ')}</span>
            <span className="method">by {event.results.mainEvent.method}</span>
            <span className="round-time">
              Round {event.results.mainEvent.round} ({event.results.mainEvent.time})
            </span>
          </div>
        </div>
      )}
    </Card>
  );
};

export default EventCard; 