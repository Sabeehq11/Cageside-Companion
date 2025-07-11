import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import Button from '../components/UI/Button';
import { mockEvents, mockFighters, mockNews, mockStats } from '../data/mockData';
import './Home.css';

const Home = () => {
  const nextEvent = mockEvents.find(event => event.status === 'upcoming');
  const spotlightFighter = mockFighters.find(fighter => fighter.id === 'alex-pereira');
  const recentNews = mockNews.slice(0, 4);

  return (
    <div className="home-page">
      <div className="page-header">
        <h1>CageSide Companion</h1>
        <p>Your premium UFC prediction and tracking experience</p>
      </div>

      <div className="home-grid">
        {/* Left Column */}
        <div className="left-column">
          {/* Next UFC Event Card */}
          <div className="event-card">
            <div className="event-card-header">
              <h2>Next UFC Event</h2>
            </div>
            {nextEvent ? (
              <div className="event-card-content">
                <div className="event-title">
                  <h3>{nextEvent.name}</h3>
                  <p className="event-location">{nextEvent.location}</p>
                  <p className="event-time">December 28, 2024 • 10:00 PM EST</p>
                </div>
                <div className="countdown-wrapper">
                  <CountdownTimer 
                    eventDate={nextEvent.date} 
                    eventName=""
                    size="large"
                    showLabels={false}
                  />
                </div>
                <div className="event-button">
                  <Button className="event-started-btn">
                    EVENT STARTED!
                  </Button>
                </div>
              </div>
            ) : (
              <p className="no-event-message">No upcoming events scheduled</p>
            )}
          </div>

          {/* Fighter Spotlight Card */}
          <div className="fighter-card">
            <div className="fighter-card-header">
              <h2>Fighter Spotlight</h2>
            </div>
            {spotlightFighter ? (
              <div className="fighter-card-content">
                <div className="fighter-avatar-wrapper">
                  <div className="fighter-avatar-circle"></div>
                </div>
                <div className="fighter-info">
                  <h3 className="fighter-name">{spotlightFighter.name}</h3>
                  <p className="fighter-record">
                    {spotlightFighter.record.wins}-{spotlightFighter.record.losses}-{spotlightFighter.record.draws}
                  </p>
                  <p className="fighter-division">{spotlightFighter.division}</p>
                </div>
                <div className="fighter-stats">
                  <div className="stat-pill stat-red">
                    {spotlightFighter.stats.finishRate}% Finish Rate
                  </div>
                  <div className="stat-pill stat-blue">
                    {spotlightFighter.stats.strikingAccuracy}% Accuracy
                  </div>
                  <div className="stat-pill stat-green">
                    {spotlightFighter.streak.count} Win Streak
                  </div>
                </div>
              </div>
            ) : (
              <p className="no-fighter-message">No fighter spotlight available</p>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* UFC News Card */}
          <div className="news-card">
            <div className="news-card-header">
              <h2>UFC News & Highlights</h2>
            </div>
            <div className="news-list">
              {recentNews.map(article => (
                <div key={article.id} className="news-item">
                  <div className="news-icon">📰</div>
                  <div className="news-content">
                    <h4 className="news-title">{article.title}</h4>
                    <p className="news-subtitle">{article.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Card */}
          <div className="stats-card">
            <div className="stats-card-header">
              <h2>UFC Stats</h2>
            </div>
            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-icon">🥊</div>
                <div className="stat-value">{mockStats.totalFighters}</div>
                <div className="stat-label">Total Fighters</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🏆</div>
                <div className="stat-value">{mockStats.totalEvents}</div>
                <div className="stat-label">Total Events</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">⚖️</div>
                <div className="stat-value">{mockStats.weightDivisions}</div>
                <div className="stat-label">Weight Divisions</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">📅</div>
                <div className="stat-value">{mockStats.upcomingEvents}</div>
                <div className="stat-label">Upcoming Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 