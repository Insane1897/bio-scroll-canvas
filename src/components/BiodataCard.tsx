import React from 'react';

interface BiodataItem {
  label: string;
  value: string;
}

interface BiodataCardProps {
  title: string;
  items: BiodataItem[];
  className?: string;
}

export const BiodataCard: React.FC<BiodataCardProps> = ({ title, items, className = "" }) => {
  return (
    <div className={`bio-card card-hover ${className}`}>
      <div className="relative">
        <h3 className="text-2xl font-bold gradient-text mb-6 relative">
          {title}
          <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </h3>
      </div>
      <div className="grid gap-6">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="group flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-border/30 pb-4 hover:border-primary/30 transition-colors duration-300"
          >
            <span className="font-medium text-muted-foreground mb-1 sm:mb-0 group-hover:text-primary transition-colors duration-300">
              {item.label}:
            </span>
            <span className="text-foreground font-semibold bg-gradient-to-r from-primary/5 to-accent/5 px-3 py-1 rounded-lg">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};