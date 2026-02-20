// lib/ai.ts
export async function generateBusinessImage(prompt: string): Promise<string | null> {
  try {
    const res = await fetch("/api/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      console.error("Image API failed:", res.status, await res.text());
      return null;
    }

    const data: { imageUrl?: string } = await res.json();
    return data.imageUrl ?? null;
  } catch (e) {
    console.error("Image API error:", e);
    return null;
  }
}