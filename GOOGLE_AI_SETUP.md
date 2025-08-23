# Google AI Studio API Integration Guide

## Step 1: Get Your Google AI Studio API Key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click on "Get API key" in the left sidebar
4. Create a new API key or use an existing one
5. Copy the API key

## Step 2: Create a .env.local file in your project root

1. Go to your project root
2. Create a `.env.local` file

## Step 2: Configure the API Key

1. Open the `.env.local` file in your project root
2. Replace `your_google_ai_studio_api_key_here` with your actual API key:
   ```
   VITE_GOOGLE_AI_API_KEY=YOUR_ACTUAL_API_KEY_HERE
   ```
3. Save the file

## Step 3: Restart the Development Server

After adding your API key, restart your development server:
```bash
pnpm dev
```

## Features

- **Real-time AI responses**: The chatbot now uses Google's Gemini model for intelligent content generation
- **Graceful fallbacks**: If the API key is not configured, the chatbot provides helpful fallback messages
- **Loading states**: Users see loading indicators while AI generates responses
- **Error handling**: Robust error handling for API failures
- **Content-focused prompts**: All prompts are optimized for social media content creation

## Security Notes

- The `.env.local` file is already included in `.gitignore` to prevent accidental commits
- Never commit your API key to version control
- Use environment variables for production deployments

## Usage

Once configured, users can:
- Ask for content ideas for different social media platforms
- Request specific types of posts (promotional, educational, entertaining)
- Get help with captions, hashtags, and content strategies
- Receive personalized suggestions based on their industry or niche

## Troubleshooting

- If you see "API key not configured" message, check your `.env.local` file
- Ensure the API key is valid and has proper permissions
- Check the browser console for any error messages
- Make sure you've restarted the development server after adding the API key
