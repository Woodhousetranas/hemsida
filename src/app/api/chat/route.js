import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { message } = await req.json();

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant on a premium table tennis brand website. Always respond in English.",
      },
      { role: "user", content: message },
    ],
  });

  const reply = chatCompletion.choices[0]?.message?.content;
  return NextResponse.json({ reply });
}
