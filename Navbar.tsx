
import React, { useState, useEffect } from 'react';
import DahniSymbol from './DahniSymbol';
import { ChevronDown } from 'lucide-react';
import { COMMUNITY_MENU_ITEMS, TOOLS_MENU_ITEMS, MANIFIESTO_MENU_ITEMS, STYLE_MENU_ITEMS } from '../constants';

interface NavbarProps {
  onNavigateHome?: () => void;
  onNavigateOrigen?: () => void;
  onNavigateTo?: (target: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onNavigateOrigen, onNavigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'comunidad' | 'herramientas' | 'manifiesto' | 'estilo' | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, type: 'home' | 'origen' | 'subpage', target?: string) => {
    e.preventDefault();
    if (type === 'home' && onNavigateHome) {
      onNavigateHome();
    } else if (type === 'origen' && onNavigateOrigen) {
      onNavigateOrigen();
    } else if (type === 'subpage' && onNavigateTo && target) {
      onNavigateTo(target);
      setActiveDropdown(null);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-black/90 backdrop-blur-lg py-4 border-b border-[#D4AF37]/10' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <button 
          onClick={(e) => handleLinkClick(e, 'home')} 
          className="transition-transform hover:scale-110 flex items-center group"
          aria-label="Volver al inicio"
        >
          <DahniSymbol className="w-10 h-10 md:w-12 md:h-12" glow={false} />
        </button>
        
        <div className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.4em] font-medium text-stone-400">
          
          {/* Estilo - Nueva Pestaña */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('estilo')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`flex items-center gap-2 transition-colors group py-2 ${activeDropdown === 'estilo' ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>
              <span>Estilo</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeDropdown === 'estilo' ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/20 p-6 transition-all duration-500 origin-top ${activeDropdown === 'estilo' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
              <div className="space-y-6">
                {STYLE_MENU_ITEMS.map((item, idx) => (
                  <button key={idx} onClick={(e) => handleLinkClick(e, 'subpage', item.id)} className="group/item block w-full text-left">
                    <div className="flex items-center gap-3 mb-1 font-bold text-white group-hover/item:text-[#D4AF37] uppercase tracking-widest">{item.icon} {item.title}</div>
                    <p className="text-[9px] text-stone-500 pl-7 leading-tight">{item.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Manifiesto */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('manifiesto')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`flex items-center gap-2 transition-colors group py-2 ${activeDropdown === 'manifiesto' ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>
              <span>Manifiesto</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeDropdown === 'manifiesto' ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/20 p-6 transition-all duration-500 origin-top ${activeDropdown === 'manifiesto' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
              <div className="space-y-6">
                {MANIFIESTO_MENU_ITEMS.map((item, idx) => (
                  <button key={idx} onClick={(e) => handleLinkClick(e, 'subpage', item.id)} className="group/item block w-full text-left">
                    <div className="flex items-center gap-3 mb-1 font-bold text-white group-hover/item:text-[#D4AF37] uppercase tracking-widest">{item.icon} {item.title}</div>
                    <p className="text-[9px] text-stone-500 pl-7 leading-tight">{item.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Herramientas */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('herramientas')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`flex items-center gap-2 transition-colors group py-2 ${activeDropdown === 'herramientas' ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>
              <span>Herramientas</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeDropdown === 'herramientas' ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/20 p-6 transition-all duration-500 origin-top ${activeDropdown === 'herramientas' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
              <div className="space-y-6">
                {TOOLS_MENU_ITEMS.map((item, idx) => (
                  <button key={idx} onClick={(e) => handleLinkClick(e, 'subpage', item.id)} className="group/item block w-full text-left">
                    <div className="flex items-center gap-3 mb-1 font-bold text-white group-hover/item:text-[#D4AF37] uppercase tracking-widest">{item.icon} {item.title}</div>
                    <p className="text-[9px] text-stone-500 pl-7 leading-tight">{item.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Comunidad */}
          <div className="relative" onMouseEnter={() => setActiveDropdown('comunidad')} onMouseLeave={() => setActiveDropdown(null)}>
            <button className={`flex items-center gap-2 transition-colors group py-2 ${activeDropdown === 'comunidad' ? 'text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>
              <span>Comunidad</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${activeDropdown === 'comunidad' ? 'rotate-180 text-[#D4AF37]' : ''}`} />
            </button>
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-[#D4AF37]/20 p-6 transition-all duration-500 origin-top ${activeDropdown === 'comunidad' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
              <div className="space-y-6">
                {COMMUNITY_MENU_ITEMS.map((item, idx) => (
                  <button key={idx} onClick={(e) => handleLinkClick(e, 'subpage', item.id)} className="group/item block w-full text-left">
                    <div className="flex items-center gap-3 mb-1 font-bold text-white group-hover/item:text-[#D4AF37] uppercase tracking-widest">{item.icon} {item.title}</div>
                    <p className="text-[9px] text-stone-500 pl-7 leading-tight">{item.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={(e) => handleLinkClick(e, 'origen')} className="hover:text-[#D4AF37] transition-colors uppercase">Origen</button>
          <a href="#contacto" className="px-6 py-2 border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-black transition-all text-[#D4AF37]">Unirse</a>
        </div>
        
        <button className="md:hidden text-[#D4AF37]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 8h16M4 16h16"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
