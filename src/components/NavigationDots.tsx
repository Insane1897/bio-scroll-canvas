import React, { useEffect, useState } from 'react';

interface NavigationDotsProps {
  sections: string[];
}

export const NavigationDots: React.FC<NavigationDotsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {sections.map((sectionId, index) => (
          <button
            key={sectionId}
            onClick={() => scrollToSection(sectionId)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'bg-primary scale-125 shadow-lg'
                : 'bg-muted-foreground/40 hover:bg-primary/60'
            }`}
            aria-label={`Go to ${sectionId} section`}
          />
        ))}
      </div>
    </nav>
  );
};