import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">✨ My Portfolio</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>홈</Link>
        <Link to="/yorushika" className={location.pathname === '/yorushika' ? 'active' : ''}>요루시카</Link>
        <Link to="/wuwa" className={location.pathname === '/wuwa' ? 'active' : ''}>명조</Link>
        <Link to="/food" className={location.pathname === '/food' ? 'active' : ''}>음식</Link>
        <Link to="/github" className={location.pathname === '/github' ? 'active' : ''}>깃허브</Link>
      </div>
    </nav>
  );
}