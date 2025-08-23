import React from 'react';
import { Github, Linkedin, Mail, Code, Coffee, Zap } from 'lucide-react';

const Developer = () => {
  const skills = [
    'React & TypeScript',
    'Node.js & Express',
    'Python & AI/ML',
    'Database Design',
    'API Development',
    'Cloud Architecture',
    'UI/UX Design',
    'DevOps & CI/CD'
  ];

  const projects = [
    {
      name: 'ContentCrafter AI',
      description: 'AI-powered social media content generation platform with advanced NLP capabilities.',
      tech: ['React', 'Python', 'OpenAI API', 'PostgreSQL']
    },
    {
      name: 'Social Analytics Dashboard',
      description: 'Real-time analytics dashboard for social media performance tracking.',
      tech: ['TypeScript', 'D3.js', 'Node.js', 'MongoDB']
    },
    {
      name: 'Marketing Automation Suite',
      description: 'Complete automation solution for email marketing and lead generation.',
      tech: ['Vue.js', 'Python', 'Redis', 'AWS']
    }
  ];

  return (
    <div className="min-h-screen bg-surface-gradient">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Meet the Developer
            </h1>
            <p className="text-xl text-muted-foreground">
              Passionate about creating innovative AI solutions for businesses
            </p>
          </div>

          {/* Profile Section */}
          <div className="card-profile mb-8 animate-slide-up">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 bg-primary-gradient rounded-full flex items-center justify-center animate-float">
                <Code className="h-16 w-16 text-primary-foreground" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-foreground mb-2">Alex Thompson</h2>
                <p className="text-lg text-primary font-semibold mb-4">Full-Stack Developer & AI Enthusiast</p>
                <p className="text-muted-foreground mb-6">
                  With over 5 years of experience in web development and AI integration, 
                  I specialize in creating intelligent solutions that help businesses 
                  scale their digital presence. I'm passionate about combining cutting-edge 
                  technology with intuitive user experiences.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="theme-toggle hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="theme-toggle hover:bg-primary hover:text-primary-foreground">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="theme-toggle hover:bg-primary hover:text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="card-profile mb-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-muted-blue rounded-lg px-4 py-3 text-center hover:bg-primary-lighter hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
            <div className="card-feature text-center">
              <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-2">500+</h4>
              <p className="text-muted-foreground">Cups of Coffee</p>
            </div>
            <div className="card-feature text-center">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-2">50+</h4>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="card-feature text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-foreground mb-2">5+</h4>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </div>

          {/* Projects Section */}
          <div className="card-profile animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Featured Projects</h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 py-4">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{project.name}</h4>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-secondary-blue text-secondary-blue-foreground px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating or have a project in mind?
            </p>
            <a href="/contact" className="btn-hero inline-flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;