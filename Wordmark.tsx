
import React from 'react';

const LOGO_URL = "https://i.postimg.cc/WzbmgPGw/DAHNI-LISO-(2).png";

interface WordmarkProps {
  className?: string;
  color?: string; // Propiedad mantenida por compatibilidad con llamadas existentes
}

const Wordmark: React.FC<WordmarkProps> = ({ className }) => {
  return (
    <img 
      src={LOGO_URL} 
      alt="DAHNI Logo" 
      className={`inline-block object-contain transition-all duration-500 ${className}`}
      style={{ 
        filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.15))' 
      }}
      loading="eager"
    />
  );
};

export default Wordmark;
