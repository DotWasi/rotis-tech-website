import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  // This check is important. If the key is missing, we stop immediately.
  console.error("VITE_GEMINI_API_KEY is not set. Please check your .env.local file.");
  // We'll return a user-friendly error from the functions if the key is missing.
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function generateAiInsight(prompt: string): Promise<string> {
  if (!apiKey) {
    return "API Key is not configured. Please check the setup.";
  }
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const fullPrompt = `As an expert in technology and the hospitality industry, provide a concise, professional insight on the following topic: "${prompt}". Focus on business impact and future trends.`;
    
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating AI insight:", error);
    return "An error occurred while communicating with the AI service.";
  }
}

// THIS IS THE MISSING FUNCTION
export async function generateAiImage(prompt: string): Promise<string> {
  if (!apiKey) {
      return "API Key is not configured. Image generation is disabled.";
  }
  try {
    // NOTE: The client-side Gemini SDK does NOT support image generation.
    // This function simulates a call and returns a dynamic placeholder image.
    // In a real production app, this would call a backend that uses a server-side SDK.
    console.log(`Simulating image generation for: ${prompt}`);
    const formattedPrompt = encodeURIComponent(prompt.replace(/\s+/g, ','));
    return `https://source.unsplash.com/1024x768/?${formattedPrompt}`;
  } catch (error) {
    console.error("Error generating AI image:", error);
    return "An error occurred during image generation.";
  }
}