import React from 'react';
import { Link } from 'react-router-dom';

export default function Food() {
  return (
    <div className="page-container">
      <div className="nav-bar">
        <Link to="/" className="home-btn">🏠 홈으로</Link>
      </div>
      <h1>🍜 나의 음식 취향 : 진한 정성이 담긴 일식 라멘 (쇼유라멘)</h1>
      <p>참고 영상: 육식맨 홈메이드 쇼유라멘 분석</p>

      <div className="content-box">
        <h3>💡 내가 좋아하는 요리의 특징</h3>
        <p>저는 단순하고 빠른 조미료 맛보다는, 시간과 공을 들여 재료 본연의 깊은 맛을 이끌어내는 요리를 좋아합니다.</p>
        <ul>
          <li><strong>다시마, 가쓰오부시, 멸치 등 천연 재료를 듬뿍 활용한 맥시멀리즘 감칠맛</strong>을 선호합니다.</li>
          <li>육수 우리기, 타레(간장 소스) 숙성, 향미유 추출, 차슈 조리 등 복합적인 공정이 어우러져 완성되는 <strong>완벽한 밸런스의 요리</strong>에 매력을 느낍니다.</li>
        </ul>
      </div>
    </div>
  );
}