import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false,
  onClick,
  ...props 
}) => {
  const cardClass = `card card-${variant} ${hover ? 'card-hover' : ''} ${onClick ? 'card-clickable' : ''} ${className}`.trim();

  return (
    <div
      className={cardClass}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 