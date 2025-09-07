import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { BiodataCard } from '../components/BiodataCard';
import { PhotoGallery } from '../components/PhotoGallery';
import { NavigationDots } from '../components/NavigationDots';

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
    { label: "Full Name", value: "Indra Kishore Barman" },
    { label: "Date of Birth", value: "18th July 1997" },
    { label: "Time of Birth", value: "08:30 PM" },
    { label: "Place of Birth", value: "Jabalpur, India" },
    { label: "Height", value: "5'10\" (177 cm)" },
    { label: "Weight", value: "72 kg" },
    { label: "Complexion", value: "Fair" },
    { label: "Body Type", value: "Normal" },
    { label: "Manglik Status", value: "Non-Manglik" },
    { label: "Education", value: "B.Tech and M.Tech Computer Science " },
    { label: "Occupation", value: "Software Engineer at ORACLE" },
    { label: "Diet", value: "Vegetarian" },
    { label: "Caste", value: "Dheemar" },
    { label: "Gotra", value: "Kashyap" }
  ];

  const familyDetails = [
    { label: "Father's Name", value: "Mr. Kaushal Kishore Barman" },
    { label: "Father's Occupation", value: "Government Teacher" },
    { label: "Mother's Name", value: "Mrs. Shashi Barman" },
    { label: "Mother's Occupation", value: "Government Teacher" },
    { label: "Brothers", value: "1 Elder Brother (Married) Works at Indian Railways" },
    { label: "Sisters", value: "1 Elder Sister (Married)" },
    { label: "Family Type", value: "Nuclear Family" },
    { label: "Family Values", value: "Traditional with Modern Outlook" }
  ];

  const contactDetails = [
    { label: "Address", value: "Paliwal Colony, Station Road, Sihora, Jabalpur MP - 483225" },
    { label: "Phone Number", value: "+91 91796 46443" },
    { label: "Email", value: "indrakishore234@email.com" },
    { label: "Preferred Contact Time", value: "6:00 PM - 9:00 PM" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationDots sections={sections} />
      
      {/* Hero Section */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* Personal Details Section */}
      <section id="personal" className="bio-section bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Personal Details
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          <BiodataCard 
            title="About Me" 
            items={personalDetails}
            className="animate-slide-up"
          />
        </div>
      </section>

      {/* Family Details Section */}
      <section id="family" className="bio-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Family Background
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          <BiodataCard 
            title="Family Information" 
            items={familyDetails}
            className="animate-slide-up"
          />
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="photos" className="bio-section bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Photo Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* Contact Details Section */}
      <section id="contact" className="bio-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              Contact Information
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>
          <BiodataCard 
            title="Get In Touch" 
            items={contactDetails}
            className="animate-slide-up"
          />
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Looking for a Life Partner
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Seeking a caring and understanding partner who values family traditions 
                while embracing modern values. Education and mutual respect are important to me.
              </p>
              <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
//                 Connect With Me
                    <a
                      href="https://wa.me/919179646443?text=Hello,%20I%20saw%20your%20biodata."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-block"
                    >
                      Connect With Me
                    </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-sm opacity-80">
            Created with ❤️ for finding the perfect life partner
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
