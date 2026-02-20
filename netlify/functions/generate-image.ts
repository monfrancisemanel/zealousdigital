import { GoogleGenAI } from "@google/genai";

export const handler = async (event: any) => {
  try {
    const { prompt } = JSON.parse(event.body || "{}");
    if (!prompt) return { statusCode: 400, body: "Missing prompt" };

    const apiKey = process.env.API_KEY;
    if (!apiKey) return { statusCode: 500, body: "Missing API_KEY env var" };

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: {
        parts: [
          {
            text: `High-end professional commercial photography: ${prompt}. Cinematic lighting, minimalist corporate setting, 8k resolution, extremely detailed, clean composition, professional aesthetics. No text, no logos, no 3D renders.`,
          },
        ],
      },
      config: { imageConfig: { aspectRatio: "16:9" } },
    });

    const parts = response.candidates?.[0]?.content?.parts ?? [];
    for (const part of parts) {
      if (part.inlineData) {
        const imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        return {
          statusCode: 200,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageUrl }),
        };
      }
    }

    return { statusCode: 200, body: JSON.stringify({ imageUrl: null }) };
  } catch (e: any) {
    console.error(e);
    return { statusCode: 500, body: e?.message || "Server error" };
  }
};