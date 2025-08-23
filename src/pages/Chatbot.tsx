import React, { useState } from 'react';
import { Send, Bot, User, AlertCircle } from 'lucide-react';
import { googleAIService } from '@/lib/googleAI';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: googleAIService.isAvailable() 
        ? "Hello! I'm ContentCrafter AI powered by Google's Gemini. I'll help you create amazing social media content. What kind of content would you like to create today?"
        : "Hello! I'm ContentCrafter AI. Please configure your Google AI Studio API key to enable AI-powered content generation. For now, I can provide basic responses.",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsLoading(true);

    try {
      let aiResponseText: string;

      if (googleAIService.isAvailable()) {
        // Use Google AI for response
        aiResponseText = await googleAIService.generateContent(currentInput);
      } else {
        // Fallback response when API key is not configured
        aiResponseText = "I'd love to help you with that! However, my AI capabilities require a Google AI Studio API key to be configured. Please add your API key to enable powerful content generation. For now, I can suggest checking out some general social media best practices: focus on engaging visuals, clear calls-to-action, and content that resonates with your target audience.";
      }

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble generating a response right now. Please check your API key configuration or try again later.",
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-surface-gradient">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              AI Content Creator
            </h1>
            <p className="text-xl text-muted-foreground">
              Chat with our AI to create engaging social media content
            </p>
            
            {/* API Status Indicator */}
            {!googleAIService.isAvailable() && (
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-lg flex items-center justify-center space-x-2 text-yellow-800">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">
                  Google AI Studio API key not configured. Add your API key to enable full AI capabilities.
                </span>
              </div>
            )}
          </div>

          {/* Chat Container */}
          <div className="bg-card border border-border rounded-2xl shadow-custom-lg overflow-hidden">
            {/* Messages Area */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 animate-slide-up ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-5 w-5" />
                    ) : (
                      <Bot className="h-5 w-5" />
                    )}
                  </div>
                  <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'chat-bubble-user'
                      : 'chat-bubble-ai'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex items-start space-x-3 animate-slide-up">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-secondary text-secondary-foreground">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="max-w-xs lg:max-w-md px-4 py-3 rounded-2xl chat-bubble-ai">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-6">
              <div className="flex space-x-4">
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here... (Press Enter to send)"
                  className="form-textarea flex-1 min-h-[50px] max-h-32"
                  rows={2}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isLoading}
                  className="btn-hero px-6 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Example Prompts */}
          <div className="mt-8 animate-fade-in">
            <h3 className="text-lg font-semibold text-foreground mb-4">Try these example prompts:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Create an Instagram post about productivity tips",
                "Write a Twitter thread about social media trends",
                "Generate Facebook content for a fitness brand",
                "Create LinkedIn post about professional growth"
              ].map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(prompt)}
                  className="card-feature text-left p-4 hover:bg-primary-lighter/10 transition-colors duration-300"
                >
                  <p className="text-sm text-muted-foreground">{prompt}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;