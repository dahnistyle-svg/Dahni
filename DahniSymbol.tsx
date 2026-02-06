
import React from 'react';

interface DahniSymbolProps {
  className?: string;
  glow?: boolean;
}

const DahniSymbol: React.FC<DahniSymbolProps> = ({ className, glow = true }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {glow && (
        <div className="absolute inset-0 bg-[#D4AF37] opacity-20 blur-xl rounded-full animate-pulse"></div>
      )}
      <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F9E79F', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="innerGlow">
            <feFlood floodColor="#F9E79F" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="SourceGraphic" operator="in" result="innerGlow" />
          </filter>
        </defs>
        
        {/* Hexágono Principal */}
        <path 
          d="M50,5 L91.3,28.8 L91.3,71.2 L50,95 L8.7,71.2 L8.7,28.8 Z" 
          fill="none" 
          stroke="url(#goldGradient)" 
          strokeWidth="2.5" 
          strokeLinejoin="round"
          className="animate-[dash_3s_ease-in-out_infinite]"
        />
        
        {/* Hexágono Interior (Celda de Energía) */}
        <path 
          d="M50,20 L76,35 L76,65 L50,80 L24,65 L24,35 Z" 
          fill="url(#goldGradient)" 
          fillOpacity="0.15"
          stroke="url(#goldGradient)" 
          strokeWidth="0.8"
        />
        
        {/* Punto Central (El Da'at) */}
        <circle cx="50" cy="50" r="2" fill="url(#goldGradient)" />
      </svg>
      
      <style>{`
        @keyframes dash {
          0% { stroke-dasharray: 0 400; stroke-dashoffset: 0; opacity: 0.5; }
          50% { stroke-dasharray: 400 0; stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dasharray: 0 400; stroke-dashoffset: -400; opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default DahniSymbol;
