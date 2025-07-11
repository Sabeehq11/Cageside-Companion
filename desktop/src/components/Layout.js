import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';
import { FaHome, FaCalendarAlt, FaUserAlt, FaChartLine, FaTrophy, FaBars } from 'react-icons/fa';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(prev => !prev);

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome, path: '/' },
    { id: 'events', label: 'Events', icon: FaCalendarAlt, path: '/events' },
    { id: 'fighters', label: 'Fighters', icon: FaUserAlt, path: '/fighters' },
    { id: 'predictions', label: 'Predictions', icon: FaChartLine, path: '/predictions' },
    { id: 'leaderboard', label: 'Leaderboard', icon: FaTrophy, path: '/leaderboard' }
  ];

  return (
    <div className="layout">
      <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <button className="collapse-btn" onClick={toggleSidebar}>
            <FaBars size={20} />
          </button>
          {!collapsed && <h1 className="app-title">CageSide Companion</h1>}
        </div>
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon"><item.icon size={20} /></span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className={`main-content ${collapsed ? 'collapsed' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout; 