import OpenAI from "openai";
import { AIRecommendationService as IAIRecommendationService } from "../types";
import dotenv from "dotenv";
import path from "path";

// Load environment variables from root directory
const envPath = path.resolve(__dirname, "../../../.env");

dotenv.config({ path: envPath });

export class AIRecommendationService implements IAIRecommendationService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env["OPENAI_API_KEY"],
    });
  }

  async testOpenAI(): Promise<string> {
    try {
      // Call OpenAI API
      const response = await this.openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant that can answer questions and help with tasks.`,
          },
          {
            role: "user",
            content:
              "Did this call work? Please respond with a single word answer.",
          },
        ],
      });

      return response.choices[0]?.message?.content || "No response";
    } catch (error) {
      console.error("Error testing OpenAI:", error);
      throw new Error("Failed to test OpenAI");
    }
  }
}
