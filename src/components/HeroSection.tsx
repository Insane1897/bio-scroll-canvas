import React from 'react';
import profilePhoto from '../assets/profile-photo.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Profile photo */}
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden shadow-2xl hover-lift border-4 border-white">
              <img 
                src={profilePhoto} 
                alt="Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 animate-pulse" />
          </div>

          {/* Name and title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            <span className="gradient-text">Priya Sharma</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 font-light">
            Software Engineer • Delhi, India
          </p>

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