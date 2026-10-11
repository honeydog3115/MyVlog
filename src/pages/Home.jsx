import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>안녕하세요! 저를 소개하는 공간입니다.</h1>
        <p>개발, 음악, 게임, 그리고 맛있는 음식에 대한 기록들입니다.</p>
      </header>
      <nav className="menu-grid">
        <Link to="/yorushika" className="menu-card">🎵 요루시카 음악</Link>
        <Link to="/wuwa" className="menu-card">🎮 명조 (Wuthering Waves)</Link>
        <Link to="/food" className="menu-card">🍜 음식 탐구 (쇼유라멘)</Link>
        <Link to="/github" className="menu-card">💻 깃허브 레포지토리</Link>
      </nav>
    </div>
  );
}