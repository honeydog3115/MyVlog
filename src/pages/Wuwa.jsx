import React from 'react';
import './Wuwa.css';

export default function Wuwa() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>🎮 명조: 워더링 웨이브 (Wuthering Waves)</h1>
        <p>오픈월드 액션 RPG 명조의 세계관과 심층 빌드 분석 공간입니다.</p>
      </div>

      <div className="content-box">
        <h3>🌟 주요 탐구 및 관심 분야</h3>
        <ul className="wuwa-list">
          <li><strong>공명 효율 최적화:</strong> 캐릭터별 원활한 사이클을 위한 에너지 재생 요구치 분석</li>
          <li><strong>에코 및 소나타 효과:</strong> 유효 옵션(크리티컬, 속성 피해 등) 세팅 데이터 연구</li>
          <li><strong>데이터 프로젝트 연계:</strong> 관련 에코 랭크 웹 앱 개발 및 데이터베이스 구축</li>
        </ul>
      </div>

      <div className="content-box" style={{ marginTop: '20px' }}>
        <h3>💡 게임플레이 스타일</h3>
        <p>화려한 액션과 패링 시스템, 그리고 철저한 스탯 계산을 바탕으로 캐릭터의 성능을 극한까지 끌어올리는 재미를 즐깁니다.</p>
      </div>
    </div>
  );
}