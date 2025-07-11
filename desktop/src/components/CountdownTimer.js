import React, { useState, useEffect } from 'react';
import { getCountdown } from '../utils/dateUtils';
import './CountdownTimer.css';

const CountdownTimer = ({ eventDate, eventName, size = 'medium', showLabels = true }) => {
  const [countdown, setCountdown] = useState(getCountdown(eventDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(eventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  if (!countdown || countdown.expired) {
    return (
      <div className={`countdown-timer countdown-${size} expired`}>
        <div className="countdown-label">Event Started!</div>
      </div>
    );
  }

  const { days, hours, minutes, seconds } = countdown;

  return (
    <div className={`countdown-timer countdown-${size}`}>
      {eventName && (
        <div className="countdown-event-name">{eventName}</div>
      )}
      <div className="countdown-display">
        <div className="countdown-unit">
          <div className="countdown-number">{days.toString().padStart(2, '0')}</div>
          {showLabels && <div className="countdown-label">Days</div>}
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-unit">
          <div className="countdown-number">{hours.toString().padStart(2, '0')}</div>
          {showLabels && <div className="countdown-label">Hours</div>}
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-unit">
          <div className="countdown-number">{minutes.toString().padStart(2, '0')}</div>
          {showLabels && <div className="countdown-label">Minutes</div>}
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-unit">
          <div className="countdown-number">{seconds.toString().padStart(2, '0')}</div>
          {showLabels && <div className="countdown-label">Seconds</div>}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer; 