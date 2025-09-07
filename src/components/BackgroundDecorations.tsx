import React from 'react';

export const BackgroundDecorations: React.FC = () => {
  return (
    <>
      {/* Floating geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large gradient orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-20 w-96 h-96 bg-gradient-to-bl from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-30" />
        
        {/* Animated lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>
      
      {/* Section-specific decorative elements */}
      <div className="fixed top-20 right-10 w-4 h-4 bg-primary rounded-full animate-pulse opacity-60 pointer-events-none" />
      <div className="fixed top-40 right-20 w-2 h-2 bg-accent rounded-full animate-pulse delay-500 opacity-60 pointer-events-none" />
      <div className="fixed bottom-40 left-10 w-3 h-3 bg-primary rounded-full animate-pulse delay-1000 opacity-60 pointer-events-none" />
      <div className="fixed bottom-60 left-20 w-2 h-2 bg-accent rounded-full animate-pulse delay-1500 opacity-60 pointer-events-none" />
    </>
  );
};