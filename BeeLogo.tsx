
import React from 'react';

const BeeLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`relative ${className} flex flex-col items-center select-none`}>
      <svg viewBox="0 0 500 500" className="w-full h-full">
        <defs>
          <linearGradient id="honeyGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F9E79F', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Hexágono contenedor - Grosor oficial invariable */}
        <path 
          d="M250,30 L440,140 L440,360 L250,470 L60,360 L60,140 Z" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="8" 
          strokeLinejoin="round"
        />

        {/* Abeja Realista-Estilizada */}
        <g transform="translate(250, 250) scale(0.9)">
          {/* Alas Superiores */}
          <path d="M-15,-10 C-150,-90 -200,-10 -200,60 C-200,90 -130,90 -15,30 Z" fill="#D4AF37" opacity="0.9" />
          <path d="M15,-10 C150,-90 200,-10 200,60 C200,90 130,90 15,30 Z" fill="#D4AF37" opacity="0.9" />
          
          {/* Alas Inferiores */}
          <path d="M-10,40 C-120,60 -150,130 -100,160 C-60,180 -10,80 -10,40 Z" fill="#D4AF37" opacity="0.8" />
          <path d="M10,40 C120,60 150,130 100,160 C60,180 10,80 10,40 Z" fill="#D4AF37" opacity="0.8" />

          {/* Cabeza */}
          <path d="M-25,-85 C-25,-120 25,-120 25,-85 C25,-65 -25,-65 -25,-85 Z" fill="#D4AF37" />
          {/* Antenas */}
          <path d="M-10,-100 C-20,-140 -60,-130 -60,-130" fill="none" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />
          <path d="M10,-100 C20,-140 60,-130 60,-130" fill="none" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" />

          {/* Cuerpo Central (Escudo Hexagonal) */}
          <path d="M0,-55 L45,-28 L45,28 L0,55 L-45,28 L-45,-28 Z" fill="#D4AF37" />
          {/* Detalle interno del escudo */}
          <path d="M0,-35 L30,-18 L30,18 L0,35 L-30,18 L-30,-18 Z" fill="#1A1A1A" opacity="0.3" />

          {/* Abdomen Segmentado */}
          <g transform="translate(0, 65)">
            <path d="M-40,0 C-40,0 0,80 40,0 L40,8 C40,8 0,88 -40,8 Z" fill="#D4AF37" />
            <path d="M-35,22 C-35,22 0,95 35,22 L35,30 C35,30 0,103 -35,30 Z" fill="#D4AF37" />
            <path d="M-28,45 C-28,45 0,115 28,45 L28,53 C28,53 0,123 -28,53 Z" fill="#D4AF37" />
            {/* Aguijón */}
            <path d="M-10,105 L10,105 L0,140 Z" fill="#D4AF37" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default BeeLogo;
