
import React from 'react';

const HexagonGraphic: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 absolute top-0 left-0">
        <polygon 
          points="50,1 93,25 93,75 50,99 7,75 7,25" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="0.5"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 h-1/2 hexagon-mask bg-gradient-to-br from-[#D4AF37] to-[#B8860B] opacity-10 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HexagonGraphic;
