import React from 'react';
import './Food.css';

export default function Food() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>🍜 나의 음식 취향 : 진한 정성이 담긴 일식 라멘</h1>
        <p>참고 콘텐츠: 육식맨 홈메이드 쇼유라멘 분석</p>
      </div>

      <div className="content-box">
        <h3>🔥 쇼유라멘 과정으로 알아보는 요리 취향</h3>
        <p>저는 단순한 인스턴트나 빠른 조리보다는, 시간과 공을 들여 복합적인 맛을 쌓아 올리는 요리 과정 자체에 매력을 느낍니다.</p>
        
        <div className="food-steps">
          <div className="step-card">
            <h4>1단계: 육수 (Soup)</h4>
            <p>다시마, 가쓰오부시, 멸치, 고기 등 천연 재료를 듬뿍 넣어 깊은 감칠맛을 우려내는 맥시멀리즘 육수</p>
          </div>
          <div className="step-card">
            <h4>2단계: 타레 & 향미유 (Tare & Oil)</h4>
            <p>간장 소스의 깊은 숙성과 대파·닭껍질·라드로 뽑아내는 향미유로 풍미의 방점을 찍는 과정</p>
          </div>
        </div>
      </div>

      <div className="content-box" style={{ marginTop: '20px' }}>
        <h3>✨ 취향 요약</h3>
        <p>재료 하나하나의 정성이 모여 레스토랑급 퀄리티를 만들어내는 일식 라멘처럼, 깊이 있고 완성도 높은 요리를 탐구하고 즐깁니다.</p>
      </div>
    </div>
  );
}