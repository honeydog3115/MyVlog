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
        <Link to="/yorushika" className="menu-card">
          <span className="card-icon">🎵</span>
          <h3>요루시카 음악</h3>
          <p>좋아하는 곡과 플레이리스트</p>
        </Link>
        <Link to="/wuwa" className="menu-card">
          <span className="card-icon">🎮</span>
          <h3>명조 (Wuthering Waves)</h3>
          <p>게임 소개 및 에코 시스템</p>
        </Link>
        <Link to="/food" className="menu-card">
          <span className="card-icon">🍜</span>
          <h3>음식 탐구</h3>
          <p>쇼유라멘과 요리 취향 분석</p>
        </Link>
        <Link to="/github" className="menu-card">
          <span className="card-icon">💻</span>
          <h3>깃허브 레포지토리</h3>
          <p>주요 개발 프로젝트 모음</p>
        </Link>
      </nav>
    </div>
  );
}