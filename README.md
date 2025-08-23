# ContentCrafter - AI-Powered Social Media Content Creation

## Project Overview

ContentCrafter is a modern web application that helps users create engaging social media content using AI technology. Built with React, TypeScript, and powered by Google's Gemini AI, it provides intelligent content suggestions and creation tools.

## Features

- 🤖 **AI-Powered Content Generation**: Integrated with Google AI Studio (Gemini) for intelligent content creation
- 📱 **Multi-Platform Support**: Create content for Instagram, Twitter, LinkedIn, Facebook, and more
- 🎨 **Modern UI**: Built with shadcn-ui components and Tailwind CSS for a beautiful user experience
- 💬 **Interactive Chatbot**: Chat with AI to get personalized content suggestions
- 🎯 **Content Focused**: Specialized prompts and responses tailored for social media marketing

## How to Setup and Run

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Google AI Studio API key - [Get it here](https://aistudio.google.com/)

### Installation Steps

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd ContentCrafter

# Step 3: Install dependencies
pnpm install
# or
npm install

# Step 4: Setup environment variables
# Create .env.local file and add your Google AI API key
echo "VITE_GOOGLE_AI_API_KEY=your_api_key_here" > .env.local

# Step 5: Start the development server
pnpm dev
# or
npm run dev
```

### Environment Configuration

Create a `.env.local` file in the project root:
```bash
VITE_GOOGLE_AI_API_KEY=your_google_ai_studio_api_key_here
```

## Technologies Used

This project is built with modern web technologies:

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn-ui components
- **AI Integration**: Google Generative AI (Gemini)
- **Routing**: React Router for navigation
- **State Management**: React hooks and context

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Main application pages
├── lib/           # Utility functions and services
├── hooks/         # Custom React hooks
├── contexts/      # React context providers
└── assets/        # Static assets
```

## Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

### Adding New Features

1. Create components in the `src/components` directory
2. Add new pages in `src/pages`
3. Extend the AI service in `src/lib/googleAI.ts`
4. Update routing in the main App component
S

## Environment Variables

- `VITE_GOOGLE_AI_API_KEY` - Your Google AI Studio API key (required for AI features)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
