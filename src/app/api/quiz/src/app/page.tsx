'use client';
import { useState } from 'react';

export default function Home() {
  const [quiz, setQuiz] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/quiz');
      const data = await res.json();
      setQuiz(data);
    } catch (e) {
      alert("出錯了，請確認 Netlify 環境變數已設定");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0066ff' }}>StudyX AI 刷題</h1>
      
      {!quiz ? (
        <button onClick={startQuiz} style={{ padding: '15px 30px', fontSize: '18px', borderRadius: '15px', backgroundColor: '#0066ff', color: 'white', border: 'none', cursor: 'pointer' }}>
          {loading ? 'AI 正在想題目...' : '🎯 開始刷題'}
        </button>
      ) : (
        <div style={{ textAlign: 'left', border: '2px solid #0066ff', padding: '20px', borderRadius: '20px', backgroundColor: '#f0f7ff' }}>
          <h2 style={{ fontSize: '20px' }}>{quiz.question}</h2>
          {quiz.options.map((opt: string) => (
            <button key={opt} onClick={() => alert(opt === quiz.answer ? '答對了！' : '再試一次')} style={{ display: 'block', width: '100%', margin: '10px 0', padding: '12px', textAlign: 'left', borderRadius: '10px', border: '1px solid #ccc', backgroundColor: 'white', cursor: 'pointer' }}>
              {opt}
            </button>
          ))}
          <button onClick={() => setQuiz(null)} style={{ marginTop: '20px', background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>← 返回重新出題</button>
        </div>
      )}
    </div>
  );
}

