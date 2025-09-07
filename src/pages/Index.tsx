import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { BiodataCard } from '../components/BiodataCard';
import { PhotoGallery } from '../components/PhotoGallery';
import { NavigationDots } from '../components/NavigationDots';
import { Chatbot } from '../components/Chatbot';
import { BackgroundDecorations } from '../components/BackgroundDecorations';

const Index = () => {
  const sections = ['hero', 'personal', 'family', 'contact', 'photos'];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.bio-section, .bio-card');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const personalDetails = [
    { label: "Full Name", value: "Priya Sharma" },
    { label: "Date of Birth", value: "15th March 1995" },
    { label: "Time of Birth", value: "10:30 AM" },
    { label: "Place of Birth", value: "Delhi, India" },
    { label: "Height", value: "5'4\" (162 cm)" },
    { label: "Weight", value: "55 kg" },
    { label: "Complexion", value: "Fair" },
    { label: "Body Type", value: "Slim" },
    { label: "Manglik Status", value: "Non-Manglik" },
    { label: "Education", value: "B.Tech Computer Science" },
    { label: "Occupation", value: "Software Engineer" },
    { label: "Diet", value: "Vegetarian" },
    { label: "Caste", value: "Brahmin" },
    { label: "Gotra", value: "Bharadwaj" }
  ];

  const familyDetails = [
    { label: "Father's Name", value: "Mr. Rajesh Sharma" },
    { label: "Father's Occupation", value: "Government Officer" },
    { label: "Mother's Name", value: "Mrs. Sunita Sharma" },
    { label: "Mother's Occupation", value: "Teacher" },
    { label: "Brothers", value: "1 Elder Brother (Married)" },
    { label: "Sisters", value: "None" },
    { label: "Family Type", value: "Nuclear Family" },
    { label: "Family Values", value: "Traditional with Modern Outlook" }
  ];

  const contactDetails = [
    { label: "Address", value: "Sector 15, Dwarka, New Delhi - 110075" },
    { label: "Phone Number", value: "+91 98765 43210" },
    { label: "Email", value: "priya.sharma@email.com" },
    { label: "Preferred Contact Time", value: "6:00 PM - 9:00 PM" }
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundDecorations />
      <NavigationDots sections={sections} />
      <Chatbot />
      
      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Personal Details Section */}
      <section id="personal" className="bio-section relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4 animate-gradient bg-gradient-to-r from-primary via-accent to-primary">
              Personal Details
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-pulse" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Get to know more about my background, education, and personal preferences
            </p>
          </div>
          <BiodataCard 
            title="About Me" 
            items={personalDetails}
            className="animate-slide-up"
          />
        </div>
      </section>

      {/* Family Details Section */}
      <section id="family" className="bio-section bg-secondary/20 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4 animate-gradient bg-gradient-to-r from-primary via-accent to-primary">
              Family Background
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-pulse" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Learn about my family values, traditions, and the wonderful people who shaped me
            </p>
          </div>
          <BiodataCard 
            title="Family Information" 
            items={familyDetails}
            className="animate-slide-up"
          />
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="photos" className="bio-section relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4 animate-gradient bg-gradient-to-r from-primary via-accent to-primary">
              Photo Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-pulse" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A glimpse into my life through these cherished moments
            </p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* Contact Details Section */}
      <section id="contact" className="bio-section bg-secondary/20 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4 animate-gradient bg-gradient-to-r from-primary via-accent to-primary">
              Contact Information
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-pulse" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to take the next step? Let's connect and explore our compatibility
            </p>
          </div>
          <BiodataCard 
            title="Get In Touch" 
            items={contactDetails}
            className="animate-slide-up"
          />
          
          {/* Enhanced Call to Action */}
          <div className="text-center mt-12">
            <div className="bio-card card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-50" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  Looking for a Life Partner
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                  Seeking a caring and understanding partner who values family traditions 
                  while embracing modern values. Education and mutual respect are important to me.
                  Let's build a beautiful future together! 💕
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 glow-effect">
                    Connect With Me
                  </button>
                  <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                    Download Bio Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-primary via-accent to-primary text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h4 className="text-2xl font-bold mb-4">Thank You for Your Interest</h4>
          <p className="text-white/90 mb-6">
            I believe that the right person will appreciate authenticity and genuine connection.
          </p>
          <p className="text-sm text-white/80">
            Created with ❤️ for finding the perfect life partner • © 2024 Priya Sharma
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
