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
    <div className={`bio-card ${className}`}>
      <h3 className="text-2xl font-bold gradient-text mb-6">{title}</h3>
      <div className="grid gap-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-border/30 pb-3"
          >
            <span className="font-medium text-muted-foreground mb-1 sm:mb-0">
              {item.label}:
            </span>
            <span className="text-foreground font-semibold">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};