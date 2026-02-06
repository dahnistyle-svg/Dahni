
import React, { useEffect } from 'react';
import BeeLogo from '../components/BeeLogo';
import Wordmark from '../components/Wordmark';
import { PILLARS_DATA } from '../constants';
import { ArrowLeft, Library, Sparkles, Zap, Heart, Flame, ShieldCheck, Eye, Anchor, PenTool, Quote } from 'lucide-react';

interface SubPageProps {
  onBack: () => void;
}

export const EtimologiaPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] selection:bg-[#D4AF37]/30">
      <section className="h-[60vh] bg-[#4A5C44] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="relative z-10 text-center px-6">
          <button onClick={onBack} className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all"><ArrowLeft className="w-4 h-4" /> Volver</button>
          <h1 className="text-5xl md:text-8xl font-bold brand-font text-white mb-4">Etimología</h1>
          <p className="text-[#D4AF37] tracking-[0.5em] uppercase text-xs">El origen del nombre</p>
        </div>
      </section>
      <section className="py-32 container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-20">
          <Library className="w-12 h-12 text-[#D4AF37] mx-auto mb-10" />
          <h2 className="text-4xl md:text-6xl font-bold brand-font mb-12">Da'at + Ani</h2>
          <p className="text-xl md:text-2xl text-stone-600 serif italic leading-relaxed">
            "DAHNI no es una palabra al azar. Es la colisión de dos fuerzas ancestrales: El Conocimiento (Da'at) y el Yo (Ani)."
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="p-10 border border-stone-200 bg-white shadow-xl">
            <span className="text-[#4A5C44] font-bold text-xs uppercase tracking-widest mb-4 block">La Raíz</span>
            <h3 className="text-3xl font-bold mb-6 brand-font uppercase">Da'at</h3>
            <p className="text-stone-500 leading-relaxed">En la Kabbalah, Da'at es el estado místico donde todas las sefirot se unen. Es la síntesis de la sabiduría y el entendimiento aplicado.</p>
          </div>
          <div className="p-10 border border-stone-200 bg-white shadow-xl">
            <span className="text-[#4A5C44] font-bold text-xs uppercase tracking-widest mb-4 block">El Sujeto</span>
            <h3 className="text-3xl font-bold mb-6 brand-font uppercase">Ani</h3>
            <p className="text-stone-500 leading-relaxed">Representa el Ser individual que encarna esa sabiduría. El portador que decide ser el vehículo del conocimiento.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export const PilaresPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37]/50">
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
          <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#D4AF37] transition-all"><ArrowLeft className="w-4 h-4" /> Inicio</button>
          <h1 className="text-5xl md:text-8xl font-bold brand-font gold-text mb-6 uppercase">Los 3 Pilares</h1>
          <p className="text-stone-500 tracking-[0.3em] uppercase text-xs">Cimientos Innegociables</p>
        </div>
      </section>
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-1 px-4 md:px-0">
          {PILLARS_DATA.map((pilar, idx) => (
            <div key={idx} className="p-16 border border-white/10 group hover:bg-[#1A1A1A] transition-all duration-700">
               <div className="text-[#D4AF37] mb-10 group-hover:scale-110 transition-transform duration-700">{pilar.icon}</div>
               <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">{pilar.title}</h3>
               <p className="text-[#D4AF37]/60 text-xs uppercase tracking-widest mb-8">{pilar.subtitle}</p>
               <p className="text-stone-400 font-light leading-relaxed">{pilar.meaning}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const RitoVitalPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2560&auto=format&fit=crop" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/90"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
           <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all"><ArrowLeft className="w-4 h-4" /> Retorno</button>
           <Zap className="w-12 h-12 text-[#D4AF37] mx-auto mb-10" />
           <h1 className="text-5xl md:text-8xl font-bold brand-font mb-8 italic">El Rito Vital</h1>
           <p className="text-2xl md:text-3xl font-light serif italic leading-relaxed text-stone-300">
             "Vestir no es un acto automático, es la primera decisión consciente de tu día. Es elegir qué armadura sutil protegerá tu espíritu hoy."
           </p>
        </div>
      </section>
    </div>
  );
};

export const EsenciaPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="py-24 text-center border-b border-stone-100">
         <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-stone-400 hover:text-black transition-all"><ArrowLeft className="w-4 h-4" /> Volver</button>
         <h1 className="text-6xl md:text-9xl font-bold brand-font mb-4">Esencia</h1>
         <div className="w-24 h-px bg-[#D4AF37] mx-auto"></div>
      </header>
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
           <BeeLogo className="w-48 h-48 mb-20 opacity-10" />
           <div className="prose prose-xl text-center space-y-12">
              <Quote className="w-16 h-16 text-[#D4AF37] opacity-20 mx-auto" />
              <p className="text-3xl font-light serif italic leading-relaxed text-stone-700">
                La esencia de DAHNI es la **Unión Radical**. La convicción de que no hay separación entre tu cuerpo, tu ropa y tu búsqueda espiritual.
              </p>
              <p className="text-xl text-stone-500 leading-relaxed">
                Nuestra visión unificada propone que cada objeto tangible sea un ancla para lo intangible. Somos la marca de quienes buscan coherencia absoluta entre lo que ven y lo que sienten.
              </p>
           </div>
        </div>
      </section>
    </div>
  );
};
