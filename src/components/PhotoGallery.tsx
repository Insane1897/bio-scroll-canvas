import React from 'react';
import profilePhoto from '../assets/profile-photo.jpg';
import familyPhoto from '../assets/family-photo.jpg';
import casualPhoto from '../assets/casual-photo.jpg';

export const PhotoGallery: React.FC = () => {
  const photos = [
    { src: profilePhoto, alt: "Profile Photo", caption: "Formal Portrait" },
    { src: familyPhoto, alt: "Family Photo", caption: "With Family" },
    { src: casualPhoto, alt: "Casual Photo", caption: "Casual Look" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <div 
          key={index} 
          className="bio-card overflow-hidden group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-semibold">{photo.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};