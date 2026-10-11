import React, { useState } from 'react';
import './Yorushika.css';

const yorushikaTracks = [
  { title: "구두의 불꽃 (靴の花火)", isFavorite: true, videoId: "G1Y8Z9Dk4e0" },
  { title: "말해줘.", isFavorite: false, videoId: "4pDC9jsuavU" },
  { title: "낮밤 스고모리", isFavorite: false, videoId: "HNXg0hh6gxc" },
  { title: "사상범", isFavorite: false, videoId: "EK_LN3XEcnw" }
];

export default function Yorushika() {
  const [currentVideo, setCurrentVideo] = useState("G1Y8Z9Dk4e0");

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>🎵 요루시카 음악 플레이리스트</h1>
        <p>제가 사랑하는 요루시카의 곡들을 모아둔 공간입니다. 구두의 불꽃은 가장 아끼는 곡입니다!</p>
      </div>
      
      <div className="player-section content-box">
        <div className="video-wrapper">
          <iframe 
            width="100%" 
            height="360" 
            src={`https://www.youtube.com/embed/${currentVideo}`} 
            title="Yorushika Player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      <div className="content-box">
        <h3>곡 목록 (선택하여 재생)</h3>
        <ul className="track-list-items">
          {yorushikaTracks.map((track, index) => (
            <li 
              key={index} 
              onClick={() => setCurrentVideo(track.videoId)} 
              className={`track-item ${track.isFavorite ? 'favorite-track' : ''}`}
            >
              <div className="track-info">
                <span className="play-icon">▶</span>
                <span className="track-title">{track.title}</span>
              </div>
              {track.isFavorite && <span className="badge">🔥 가장 좋아하는 음악</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="external-link-box">
        <a href="https://music.youtube.com/playlist?list=PLZxgtlFGgVTF2Y_A0cr2XPif1FJJWtc69&si=iMhqrHiy8Rm7Zhoe" target="_blank" rel="noreferrer" className="ext-btn">
          🔗 유튜브 뮤직 원본 플레이리스트 바로가기
        </a>
      </div>
    </div>
  );
}