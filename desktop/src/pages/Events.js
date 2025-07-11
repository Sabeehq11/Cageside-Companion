import React, { useState } from 'react';
import { mockEvents, mockFighters } from '../data/mockData';
import { formatDate } from '../utils/dateUtils';
import './Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const upcomingEvents = mockEvents.filter(event => event.status === 'upcoming');
  const completedEvents = mockEvents.filter(event => event.status === 'completed');
  
  const getFilteredEvents = () => {
    switch (activeTab) {
      case 'upcoming':
        return upcomingEvents;
      case 'completed':
        return completedEvents;
      default:
        return mockEvents;
    }
  };

  const getFighterById = (id) => mockFighters.find(f => f.id === id);

  const filteredEvents = getFilteredEvents();

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>UFC Events</h1>
        <p>Explore upcoming fights and recent results</p>
      </div>

      {/* Tab Navigation */}
      <div className="events-tabs">
        <button
          className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Events
        </button>
        <button
          className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`tab-button ${activeTab === 'completed' ? 'active' : ''}`}
          onClick={() => setActiveTab('completed')}
        >
          Completed
        </button>
      </div>

      {/* Events List */}
      <div className="events-container">
        {filteredEvents.length === 0 ? (
          <div className="no-events">
            <h3>No events found</h3>
            <p>There are no {activeTab === 'all' ? '' : activeTab} events to display.</p>
          </div>
        ) : (
          filteredEvents.map(event => (
            <div key={event.id} className="fight-card">
              <div className="fight-card-header">
                <div className="event-info">
                  <h2 className="event-title">{event.name}</h2>
                  <p className="event-location">{event.location}</p>
                  <p className="event-date">{formatDate(event.date, true)}</p>
                </div>
                <div className="event-badges">
                  {event.status === 'live' && (
                    <div className="event-badge live">🔴 EVENT STARTED</div>
                  )}
                  {event.status === 'upcoming' && (
                    <div className="event-badge upcoming">UPCOMING</div>
                  )}
                  {event.status === 'completed' && (
                    <div className="event-badge completed">COMPLETED</div>
                  )}
                </div>
              </div>

              <div className="fights-list">
                {event.mainCard && event.mainCard.map(fight => {
                  const fighter1 = getFighterById(fight.fighter1);
                  const fighter2 = getFighterById(fight.fighter2);
                  
                  return (
                    <div key={fight.id} className="fight-matchup">
                      {fight.isMainEvent && (
                        <div className="main-event-banner">MAIN EVENT</div>
                      )}
                      
                      <div className="fight-title-belt">
                        <h4>{fight.title}</h4>
                        <span className="weight-class">{fight.weightClass}</span>
                      </div>
                      
                      <div className="fighters-vs">
                        <div className="fighter red-corner">
                          <div className="fighter-image">
                            <img src={fighter1?.image} alt={fighter1?.name} />
                          </div>
                          <div className="fighter-details">
                            <h5 className="fighter-name">{fighter1?.name || 'TBD'}</h5>
                            <p className="fighter-record">
                              {fighter1?.record ? 
                                `${fighter1.record.wins}-${fighter1.record.losses}-${fighter1.record.draws}` : 
                                'Record TBD'
                              }
                            </p>
                            <p className="fighter-division">{fighter1?.division || 'Division TBD'}</p>
                          </div>
                        </div>
                        
                        <div className="vs-separator">🆚</div>
                        
                        <div className="fighter blue-corner">
                          <div className="fighter-image">
                            <img src={fighter2?.image} alt={fighter2?.name} />
                          </div>
                          <div className="fighter-details">
                            <h5 className="fighter-name">{fighter2?.name || 'TBD'}</h5>
                            <p className="fighter-record">
                              {fighter2?.record ? 
                                `${fighter2.record.wins}-${fighter2.record.losses}-${fighter2.record.draws}` : 
                                'Record TBD'
                              }
                            </p>
                            <p className="fighter-division">{fighter2?.division || 'Division TBD'}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {event.status === 'completed' && event.results && (
                <div className="event-results">
                  <div className="results-header">🏆 Result</div>
                  <div className="result-details">
                    <span className="winner">{event.results.mainEvent.winner.replace('-', ' ')}</span>
                    <span className="method">wins by {event.results.mainEvent.method}</span>
                    <span className="round-time">
                      R{event.results.mainEvent.round} ({event.results.mainEvent.time})
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Events; 