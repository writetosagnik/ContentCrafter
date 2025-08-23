import { GoogleGenerativeAI } from '@google/generative-ai';

class GoogleAIService {
  private genAI: GoogleGenerativeAI | null = null;
  private model: any = null;

  constructor() {
    this.initializeAI();
  }

  private initializeAI() {
    const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
    
    if (!apiKey) {
      console.error('Google AI API key is not configured. Please add VITE_GOOGLE_AI_API_KEY to your .env.local file.');
      return;
    }

    try {
      this.genAI = new GoogleGenerativeAI(apiKey);
      this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    } catch (error) {
      console.error('Failed to initialize Google AI:', error);
    }
  }

  async generateContent(prompt: string): Promise<string> {
    if (!this.model) {
      throw new Error('Google AI is not properly initialized. Please check your API key.');
    }

    try {
      // Enhanced prompt for content creation context
      const enhancedPrompt = `You are ContentCrafter AI, a specialized assistant for social media content creation. 
      
User request: ${prompt}

Please provide helpful, creative, and engaging suggestions for social media content. 
Keep responses concise but valuable, and always focus on actionable content creation advice.
If the user asks for specific platform content, tailor your response accordingly (Instagram, Twitter, Facebook, LinkedIn, etc.).`;

      const result = await this.model.generateContent(enhancedPrompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating content:', error);
      throw new Error('Failed to generate content. Please try again later.');
    }
  }

  isAvailable(): boolean {
    return this.genAI !== null && this.model !== null;
  }
}

// Export singleton instance
export const googleAIService = new GoogleAIService();
