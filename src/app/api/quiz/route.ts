import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) return new Response(JSON.stringify({ error: "API Key Missing" }), { status: 500 });

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "請出一道國中數學選擇題，包含題目、四個選項、正確答案。請嚴格以 JSON 格式回傳：{ \"question\": \"...\", \"options\": [\"...\"], \"answer\": \"...\" }";

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json|```/g, "").trim();
    return new Response(text, { headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: "AI Error" }), { status: 500 });
  }
}

