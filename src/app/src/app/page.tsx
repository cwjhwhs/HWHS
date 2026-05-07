'use client';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0066ff' }}>StudyX AI 準備就緒</h1>
      <p>只要看到這個畫面，就代表我們成功連線了！</p>
      <button 
        onClick={() => alert('連線測試成功！')}
        style={{ padding: '15px 30px', fontSize: '18px', borderRadius: '15px', backgroundColor: '#0066ff', color: 'white', border: 'none' }}
      >
        測試點擊
      </button>
    </div>
  );
}

