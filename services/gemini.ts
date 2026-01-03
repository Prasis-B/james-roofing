
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getChatResponse(message: string, _history: any[] = []) {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are a helpful assistant for 'James Roofing', a professional roofing company. 
        Answer questions about residential roofing, commercial roofing, repairs, and inspections. 
        Be professional, trustworthy, and encourage the user to request a free quote if they have specific project needs. 
        Keep responses concise. If you don't know something specific about the company's pricing, ask them to fill out the contact form.`
      }
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having a bit of trouble connecting right now. Please call us at (555) ROOF-NOW for immediate assistance.";
  }
}
