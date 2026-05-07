import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET() {
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `請出一道有趣的國中數學選擇題，包含題目、四個選項、正確答案。
  請以 JSON 格式回傳，不要有其餘文字：
  {
    "question": "題目內容",
    "options": ["A內容", "B內容", "C內容", "D內容"],
    "answer": "正確答案內容"
  }`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().replace(/```json|```/g, "").trim();
    return new Response(text, { headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: "AI 忙碌中" }), { status: 500 });
  }
}

