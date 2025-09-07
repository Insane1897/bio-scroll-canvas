import React from 'react';
import profilePhoto from '../assets/profile-photo.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-gradient" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Enhanced profile photo */}
          <div className="relative inline-block mb-8 group">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden shadow-2xl hover-lift border-4 border-white group-hover:border-primary/50 transition-all duration-500">
              <img 
                src={profilePhoto} 
                alt="Profile Photo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Enhanced decorative rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-20 animate-pulse" />
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary to-accent opacity-10 animate-spin" style={{ animationDuration: '20s' }} />
          </div>

          {/* Enhanced name and title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="gradient-text animate-gradient bg-gradient-to-r from-primary via-accent to-primary">Priya Sharma</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light">
            Software Engineer • Delhi, India
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
              Available for Marriage
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-medium">
              Non-Manglik
            </span>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-12">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};