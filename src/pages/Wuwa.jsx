import React from 'react';
import { Link } from 'react-router-dom';

export default function Wuwa() {
  return (
    <div className="page-container">
      <div className="nav-bar">
        <Link to="/" className="home-btn">🏠 홈으로</Link>
      </div>
      <h1>🎮 명조: 워더링 웨이브 (Wuthering Waves)</h1>
      <p>오픈월드 액션 RPG 명조의 세계관과 캐릭터 빌드, 에코 시스템을 탐구하는 공간입니다.</p>
      <div className="content-box">
        <h3>🌟 주요 관심사</h3>
        <ul>
          <li>캐릭터 에너지 재생(공명 효율) 요구치 최적화</li>
          <li>소나타 효과 및 에코 유효 옵션(크리티컬, 속성 피해 등) 세팅 분석</li>
          <li>관련 웹 데이터베이스 및 툴 개발 프로젝트 진행 중</li>
        </ul>
      </div>
    </div>
  );
}