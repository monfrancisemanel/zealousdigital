
import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI using process.env.API_KEY
export const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY as string });

/**
 * Generates a high-quality business image using gemini-2.5-flash-image.
 */
export async function generateBusinessImage(prompt: string, retries = 2, delay = 2000): Promise<string | null> {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `High-end professional commercial photography: ${prompt}. Cinematic lighting, minimalist corporate setting, 8k resolution, extremely detailed, clean composition, professional aesthetics. No text, no logos, no 3D renders.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    // The response can contain multiple parts, iterate to find the image part
    const candidate = response.candidates?.[0];
    if (candidate && candidate.content && candidate.content.parts) {
      for (const part of candidate.content.parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
  } catch (error: any) {
    const errorMessage = error?.message || "";
    if (errorMessage.includes("429") || errorMessage.includes("RESOURCE_EXHAUSTED")) {
      if (retries > 0) {
        await new Promise(resolve => setTimeout(resolve, delay));
        return generateBusinessImage(prompt, retries - 1, delay * 2);
      }
    }
    console.error("Image generation failed:", error);
  }
  return null;
}
