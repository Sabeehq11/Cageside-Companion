// Date formatting utilities for UFC events and fights

/**
 * Format date to display format
 * @param {Date|string} date - Date to format
 * @param {boolean} includeTime - Whether to include time
 * @returns {string} Formatted date string
 */
export const formatDate = (date, includeTime = false) => {
  if (!date) return '';
  
  const dateObj = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...(includeTime && {
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })
  };
  
  return dateObj.toLocaleDateString('en-US', options);
};

/**
 * Get countdown to event
 * @param {Date|string} eventDate - Event date
 * @returns {Object} Countdown object with days, hours, minutes, seconds
 */
export const getCountdown = (eventDate) => {
  if (!eventDate) return null;
  
  const now = new Date();
  const event = new Date(eventDate);
  const diff = event - now;
  
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds, expired: false };
};

/**
 * Format countdown for display
 * @param {Object} countdown - Countdown object from getCountdown
 * @returns {string} Formatted countdown string
 */
export const formatCountdown = (countdown) => {
  if (!countdown || countdown.expired) return 'Event Started';
  
  const { days, hours, minutes, seconds } = countdown;
  
  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  } else {
    return `${minutes}m ${seconds}s`;
  }
};

/**
 * Check if event is live (within 4 hours of start time)
 * @param {Date|string} eventDate - Event date
 * @returns {boolean} Whether event is likely live
 */
export const isEventLive = (eventDate) => {
  if (!eventDate) return false;
  
  const now = new Date();
  const event = new Date(eventDate);
  const diff = now - event;
  
  // Consider live if within 4 hours of start time
  return diff >= 0 && diff <= (4 * 60 * 60 * 1000);
};

/**
 * Get relative time string (e.g., "2 hours ago", "in 3 days")
 * @param {Date|string} date - Date to compare
 * @returns {string} Relative time string
 */
export const getRelativeTime = (date) => {
  if (!date) return '';
  
  const now = new Date();
  const dateObj = new Date(date);
  const diff = now - dateObj;
  const absDiff = Math.abs(diff);
  
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  
  const future = diff < 0;
  const prefix = future ? 'in ' : '';
  const suffix = future ? '' : ' ago';
  
  if (absDiff < minute) {
    return 'just now';
  } else if (absDiff < hour) {
    const minutes = Math.floor(absDiff / minute);
    return `${prefix}${minutes} minute${minutes > 1 ? 's' : ''}${suffix}`;
  } else if (absDiff < day) {
    const hours = Math.floor(absDiff / hour);
    return `${prefix}${hours} hour${hours > 1 ? 's' : ''}${suffix}`;
  } else if (absDiff < week) {
    const days = Math.floor(absDiff / day);
    return `${prefix}${days} day${days > 1 ? 's' : ''}${suffix}`;
  } else if (absDiff < month) {
    const weeks = Math.floor(absDiff / week);
    return `${prefix}${weeks} week${weeks > 1 ? 's' : ''}${suffix}`;
  } else if (absDiff < year) {
    const months = Math.floor(absDiff / month);
    return `${prefix}${months} month${months > 1 ? 's' : ''}${suffix}`;
  } else {
    const years = Math.floor(absDiff / year);
    return `${prefix}${years} year${years > 1 ? 's' : ''}${suffix}`;
  }
}; 