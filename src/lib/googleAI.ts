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

  async generateSuggestions(): Promise<string[]> {
    if (!this.model) {
      return [
        "Create an Instagram post about productivity tips",
        "Write a Twitter thread about social media trends", 
        "Generate Facebook content for a fitness brand",
        "Create LinkedIn post about professional growth"
      ];
    }

    try {
      const suggestionsPrompt = `You are ContentCrafter AI. Generate exactly 4 diverse, creative, and actionable social media content prompts that users might want help with. 

Requirements:
- Each prompt should be different and cover various social media platforms
- Make them specific and actionable
- Focus on different industries/topics (business, lifestyle, education, entertainment, etc.)
- Keep each prompt under 60 characters
- Return only the prompts, one per line, no numbering or bullets

Example format:
Create Instagram story ideas for a restaurant
Write LinkedIn tips for remote workers
Generate TikTok content for a beauty brand  
Draft Twitter posts about sustainable living`;

      const result = await this.model.generateContent(suggestionsPrompt);
      const response = await result.response;
      const suggestions = response.text().split('\n').filter(line => line.trim().length > 0).slice(0, 4);
      
      // Fallback to default suggestions if AI doesn't return 4 suggestions
      if (suggestions.length < 4) {
        return [
          "Create an Instagram post about productivity tips",
          "Write a Twitter thread about social media trends",
          "Generate Facebook content for a fitness brand", 
          "Create LinkedIn post about professional growth"
        ];
      }
      
      return suggestions;
    } catch (error) {
      console.error('Error generating suggestions:', error);
      // Return fallback suggestions
      return [
        "Create an Instagram post about productivity tips",
        "Write a Twitter thread about social media trends",
        "Generate Facebook content for a fitness brand",
        "Create LinkedIn post about professional growth"
      ];
    }
  }

  isAvailable(): boolean {
    return this.genAI !== null && this.model !== null;
  }
}

// Export singleton instance
export const googleAIService = new GoogleAIService();
