import React from 'react';
import { Link } from 'react-router-dom';

const repos = [
  {
    name: "WuwaProject1",
    description: "명조(Wuthering Waves) 관련 데이터를 다루는 백엔드/데이터 처리 레포지토리입니다.",
    url: "https://github.com/honeydog3115/WuwaProject1"
  },
  {
    name: "WuwaProject1-Web",
    description: "명조 에코 랭크 및 데이터 웹 인터페이스(UI)를 제공하는 프론트엔드 레포지토리입니다.",
    url: "https://github.com/honeydog3115/WuwaProject1-Web"
  },
  {
    name: "esp8266FlashToolForJava",
    description: "Java를 활용하여 esp8266 플래시 툴 기능을 다루는 유틸리티 레포지토리입니다.",
    url: "https://github.com/honeydog3115/esp8266FlashToolForJava"
  }
];

export default function Github() {
  return (
    <div className="page-container">
      <div className="nav-bar">
        <Link to="/" className="home-btn">🏠 홈으로</Link>
      </div>
      <h1>💻 깃허브 레포지토리 소개</h1>
      <p>제가 직접 진행하고 있는 주요 개발 프로젝트들입니다.</p>

      <div className="repo-grid">
        {repos.map((repo, idx) => (
          <div key={idx} className="repo-card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.url} target="_blank" rel="noreferrer" className="repo-link">
              레포지토리 방문하기 ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}