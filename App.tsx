
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BeeLogo from './components/BeeLogo';
import Wordmark from './components/Wordmark';
import DahniSymbol from './components/DahniSymbol';
import OrigenPage from './pages/OrigenPage';
import { ColmenaDigitalPage, CirculosDaatPage, RitualesPage, OraculoPage } from './pages/CommunityPages';
import { EtimologiaPage, PilaresPage, RitoVitalPage, EsenciaPage } from './pages/ManifiestoPages';
import { SimbolosSagradosPage, ArquitecturaSerPage, HexagonoPage, AlquimiaVisualPage, PromptGuidePage } from './pages/ToolsPages';
import { ModaPage, ArticulosPage, AlquimiaCorpPage, ReliquiasPage } from './pages/StylePages';
import { SYMBOLS, MANIFIESTO_CORE, SLOGAN, LOS_DAHNI_SECTION, DAHNI_CHARACTERS, SOCIAL_LINKS } from './constants';
import { ChevronDown, Mail, Phone, MessageSquare, Instagram, Send, Youtube, Music, ArrowRight } from 'lucide-react';

type ViewState = 
  | 'home' | 'origen' 
  | 'colmena' | 'circulos' | 'rituales' | 'oraculo' 
  | 'etimologia' | 'pilares' | 'rito' | 'esencia'
  | 'simbolos' | 'arquitectura' | 'hexagono-page' | 'alquimia' | 'prompt-page'
  | 'moda' | 'articulos' | 'alquimia-corp' | 'reliquias';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'origen': return <OrigenPage onBack={() => setView('home')} />;
      case 'colmena': return <ColmenaDigitalPage onBack={() => setView('home')} />;
      case 'circulos': return <CirculosDaatPage onBack={() => setView('home')} />;
      case 'rituales': return <RitualesPage onBack={() => setView('home')} />;
      case 'oraculo': return <OraculoPage onBack={() => setView('home')} />;
      case 'etimologia': return <EtimologiaPage onBack={() => setView('home')} />;
      case 'pilares': return <PilaresPage onBack={() => setView('home')} />;
      case 'rito': return <RitoVitalPage onBack={() => setView('home')} />;
      case 'esencia': return <EsenciaPage onBack={() => setView('home')} />;
      case 'simbolos': return <SimbolosSagradosPage onBack={() => setView('home')} />;
      case 'arquitectura': return <ArquitecturaSerPage onBack={() => setView('home')} />;
      case 'hexagono-page': return <HexagonoPage onBack={() => setView('home')} />;
      case 'alquimia': return <AlquimiaVisualPage onBack={() => setView('home')} />;
      case 'prompt-page': return <PromptGuidePage onBack={() => setView('home')} />;
      case 'moda': return <ModaPage onBack={() => setView('home')} />;
      case 'articulos': return <ArticulosPage onBack={() => setView('home')} />;
      case 'alquimia-corp': return <AlquimiaCorpPage onBack={() => setView('home')} />;
      case 'reliquias': return <ReliquiasPage onBack={() => setView('home')} />;
      default:
        return (
          <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511497584788-8767fe771d21?q=80&w=2560&auto=format&fit=crop" 
                  alt="Bosque Sagrado" 
                  className="w-full h-full object-cover opacity-50 scale-105 animate-[ken-burns_20s_ease-in-out_infinite_alternate]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.1)_0%,_rgba(0,0,0,0.8)_70%)]"></div>
              </div>
              
              <div className="relative z-10 flex flex-col items-center px-6 text-center">
                <div className="mb-8 animate-fade-in">
                  <DahniSymbol className="w-48 h-48 md:w-64 md:h-64" />
                </div>
                
                <div className="mt-4 animate-fade-in transition-all duration-1000">
                  <Wordmark className="w-[320px] md:w-[640px] mx-auto drop-shadow-2xl" color="#D4AF37" />
                </div>
                
                <p className="mt-10 text-sm md:text-base font-light tracking-[0.5em] uppercase text-[#D4AF37] opacity-90 drop-shadow-md">
                  {SLOGAN}
                </p>
                
                <div className="mt-20 flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
                  <a href="#manifiesto" className="group">
                     <span className="text-[10px] uppercase tracking-[0.3em] mb-2 block font-medium">Entrar al rito</span>
                     <ChevronDown className="w-5 h-5 mx-auto text-[#D4AF37] animate-bounce" />
                  </a>
                </div>
              </div>
            </section>

            {/* Manifiesto Preview */}
            <section id="manifiesto" className="py-32 md:py-64 bg-white text-black relative">
              <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto mb-32">
                  <span className="text-[#4A5C44] text-xs uppercase tracking-[0.8em] mb-8 block font-semibold">Etimología Sagrada</span>
                  <div className="mb-12 flex justify-center">
                    <Wordmark className="w-64 md:w-96" color="#000" />
                  </div>
                  <p className="text-2xl md:text-4xl font-light leading-relaxed serif italic text-[#4A5C44]">
                    "El ser que encarna el conocimiento unificado."
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
                  {MANIFIESTO_CORE.map((item, idx) => (
                    <div key={idx} className="group text-center">
                      <div className="mb-10 text-[#D4AF37] flex justify-center">
                        <div className="p-5 rounded-full border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-700">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-xl mb-6 font-bold tracking-widest uppercase">{item.title}</h3>
                      <p className="text-stone-600 leading-relaxed font-light text-lg">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sección Los Dahni */}
            <section id="los-dahni" className="py-32 md:py-64 bg-black relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop" 
                  className="w-full h-full object-cover mix-blend-overlay" 
                  alt="" 
                />
              </div>

              <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                   <span className="text-[#D4AF37] text-xs uppercase tracking-[0.8em] mb-8 block font-semibold opacity-80">La Hermandad de Mentores</span>
                   <h2 className="text-5xl md:text-8xl mb-8 gold-text font-bold brand-font leading-none">{LOS_DAHNI_SECTION.title}</h2>
                   <p className="text-stone-400 text-xl font-light serif italic leading-relaxed">
                     "{LOS_DAHNI_SECTION.description}"
                   </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-8">
                  {DAHNI_CHARACTERS.map((char, idx) => (
                    <div key={idx} className="group relative">
                      <div className="aspect-[3/4] bg-black border border-white/5 group-hover:border-[#D4AF37]/40 transition-all duration-700 overflow-hidden relative shadow-2xl">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-25 transition-opacity duration-700">
                          <BeeLogo className="w-3/4 grayscale brightness-50" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                        <div className="absolute inset-0 p-4 flex flex-col justify-end items-center text-center">
                          <div className="mb-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-6 group-hover:translate-y-0">
                            {char.icon}
                          </div>
                          <h3 className="text-[10px] md:text-xs font-bold tracking-widest uppercase gold-text mb-1 drop-shadow-sm">{char.name}</h3>
                          <p className="text-[9px] text-stone-500 uppercase tracking-widest font-medium">{char.role}</p>
                          <div className="h-0 group-hover:h-16 overflow-hidden transition-all duration-700 mt-0 group-hover:mt-4 opacity-0 group-hover:opacity-100">
                            <p className="text-[10px] text-stone-300 font-light italic leading-tight">
                              {char.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="h-0.5 w-0 bg-[#D4AF37] mx-auto mt-4 group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Nueva Sección: Conexión Radical (Contacto y Redes) */}
            <section id="contacto" className="py-32 md:py-56 bg-black relative border-t border-white/5 leather-texture">
              <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                  {/* Bloque de Contacto */}
                  <div>
                    <span className="text-[#D4AF37] text-xs uppercase tracking-[0.8em] mb-6 block font-bold">Unión Sagrada</span>
                    <h2 className="text-4xl md:text-7xl font-bold brand-font mb-10 text-white leading-tight">Contacto &<br/><span className="gold-text italic serif font-light">Conciencia</span></h2>
                    
                    <div className="space-y-12">
                      <a href="mailto:conciencia@dahni.com" className="flex items-center gap-8 group">
                        <div className="w-16 h-16 flex items-center justify-center border border-[#D4AF37]/20 bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 rounded-sm">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[9px] text-stone-500 uppercase tracking-widest mb-1 font-bold">Inicia el Diálogo</p>
                          <p className="text-base tracking-[0.2em] font-medium group-hover:text-[#D4AF37] transition-colors">conciencia@dahni.com</p>
                        </div>
                      </a>
                      
                      <div className="flex items-center gap-8 group cursor-pointer">
                        <div className="w-16 h-16 flex items-center justify-center border border-[#D4AF37]/20 bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 rounded-sm">
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[9px] text-stone-500 uppercase tracking-widest mb-1 font-bold">Comunidad Umbral</p>
                          <p className="text-base tracking-[0.2em] font-medium group-hover:text-[#D4AF37] transition-colors">Telegram Oficial DAHNI</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-8 group cursor-pointer">
                        <div className="w-16 h-16 flex items-center justify-center border border-[#D4AF37]/20 bg-white/5 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 rounded-sm">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[9px] text-stone-500 uppercase tracking-widest mb-1 font-bold">Soporte al Portador</p>
                          <p className="text-base tracking-[0.2em] font-medium group-hover:text-[#D4AF37] transition-colors">+54 (911) DAHNI-SER</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bloque de Redes Sociales */}
                  <div className="bg-[#050505] border border-[#D4AF37]/10 p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                      <BeeLogo className="w-48 h-48" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-16 uppercase tracking-[0.4em] gold-text">Presencia Digital</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                      <a href="#" className="flex items-center gap-5 group/social">
                        <Instagram className="text-stone-600 group-hover/social:text-[#D4AF37] transition-colors w-6 h-6" />
                        <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-400 group-hover/social:text-white transition-colors">Instagram</span>
                      </a>
                      <a href="#" className="flex items-center gap-5 group/social">
                        <Music className="text-stone-600 group-hover/social:text-[#D4AF37] transition-colors w-6 h-6" />
                        <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-400 group-hover/social:text-white transition-colors">TikTok</span>
                      </a>
                      <a href="#" className="flex items-center gap-5 group/social">
                        <Youtube className="text-stone-600 group-hover/social:text-[#D4AF37] transition-colors w-6 h-6" />
                        <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-400 group-hover/social:text-white transition-colors">YouTube</span>
                      </a>
                      <a href="#" className="flex items-center gap-5 group/social">
                        <Send className="text-stone-600 group-hover/social:text-[#D4AF37] transition-colors w-6 h-6" />
                        <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-stone-400 group-hover/social:text-white transition-colors">Telegram</span>
                      </a>
                    </div>

                    <div className="mt-24 pt-12 border-t border-white/5">
                      <p className="text-stone-600 text-[10px] uppercase tracking-widest mb-10 leading-relaxed font-medium">
                        Suscríbete para recibir los ciclos de conocimiento directamente en tu conciencia.
                      </p>
                      <button className="w-full py-5 border border-[#D4AF37]/40 text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.5em] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 flex items-center justify-center gap-4 group">
                        Recibir el Oráculo <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer Final */}
            <footer className="py-20 bg-black border-t border-white/5 relative z-10">
              <div className="container mx-auto px-6 text-center">
                <div className="flex flex-col items-center gap-8 mb-10">
                  <DahniSymbol className="w-16 h-16" glow={false} />
                  <Wordmark className="w-60" color="#D4AF37" />
                </div>
                <div className="text-stone-800 text-[8px] md:text-[9px] tracking-[1.2em] uppercase font-bold">
                  &copy; {new Date().getFullYear()} DAHNI BRANDING HOUSE • EL INVISIBLE SE SIENTE • TODOS LOS DERECHOS RESERVADOS
                </div>
              </div>
            </footer>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#D4AF37]/30 text-white leather-texture bg-black">
      <Navbar 
        onNavigateHome={() => setView('home')} 
        onNavigateOrigen={() => setView('origen')} 
        onNavigateTo={(target: any) => setView(target)} 
      />
      {renderContent()}
    </div>
  );
};

export default App;
