import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, Users, MessageSquare } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Content',
      description: 'Generate engaging social media posts, captions, and hashtags using advanced AI technology.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Create weeks worth of content in minutes. Our AI works at the speed of thought.',
    },
    {
      icon: Target,
      title: 'Brand Consistency',
      description: 'Maintain your unique voice and style across all platforms with customizable AI training.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimized',
      description: 'Content optimized for engagement based on platform best practices and trending topics.',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Content Pieces Created' },
    { number: '500+', label: 'Happy Businesses' },
    { number: '95%', label: 'Engagement Increase' },
    { number: '24/7', label: 'AI Availability' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Create Stunning
                <span className="block bg-gradient-to-r from-primary-lightest to-primary-lighter bg-clip-text text-transparent">
                  Social Content
                </span>
                with AI
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transform your social media presence with AI-powered content creation. 
                Generate engaging posts, captions, and strategies that drive real results 
                for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/chatbot" className="btn-hero inline-flex items-center space-x-2">
                  <span>Start Creating Content</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/developer" className="btn-hero-outline inline-flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
            <div className="animate-float">
              <img
                src={heroImage}
                alt="AI Content Creation Platform"
                className="rounded-2xl shadow-hero w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose ContentCrafter?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with deep understanding 
              of social media trends to create content that truly resonates with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="card-feature animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-primary-gradient rounded-xl p-4 w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-gradient">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <MessageSquare className="h-16 w-16 text-primary-foreground mx-auto mb-6 animate-pulse-glow" />
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join thousands of businesses already using ContentCrafter to create 
              engaging content that drives results. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chatbot" className="bg-white text-primary hover:bg-white/90 font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span>Start Creating Now</span>
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Contact Sales</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
