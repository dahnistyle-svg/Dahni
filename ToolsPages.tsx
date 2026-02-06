
import React, { useEffect, useState } from 'react';
import BeeLogo from '../components/BeeLogo';
import HexagonGraphic from '../components/HexagonGraphic';
import { SPIRITUAL_GUIDE_PROMPT } from '../constants';
import { ArrowLeft, Box, Layers, Hexagon, Wand2, Sparkles, ShieldCheck, Zap, Eye, Quote, Copy, Check, Terminal } from 'lucide-react';

interface SubPageProps {
  onBack: () => void;
}

export const SimbolosSagradosPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] selection:bg-[#D4AF37]/30">
      <section className="relative h-[60vh] flex items-center justify-center bg-[#1A1A1A]">
        <div className="absolute inset-0 opacity-10">
          <HexagonGraphic className="w-full h-full" />
        </div>
        <div className="relative z-10 text-center">
          <button onClick={onBack} className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#D4AF37] transition-all"><ArrowLeft className="w-4 h-4" /> Desconexión</button>
          <h1 className="text-5xl md:text-8xl font-bold brand-font gold-text mb-4 uppercase">Símbolos Sagrados</h1>
          <p className="text-stone-500 tracking-[0.5em] uppercase text-xs">El lenguaje de lo invisible</p>
        </div>
      </section>

      <section className="py-32 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: <BeeLogo className="w-16 h-16" />, title: "La Abeja", desc: "Soberanía, trabajo espiritual y conexión con la colmena de la conciencia." },
            { icon: <Hexagon className="w-16 h-16 text-[#D4AF37]" />, title: "El Hexágono", desc: "La estructura perfecta. La celda que protege la miel de la sabiduría." },
            { icon: <Sparkles className="w-16 h-16 text-[#D4AF37]" />, title: "El Oro", desc: "La transmutación de la materia pesada en luz espiritual tangible." }
          ].map((item, idx) => (
            <div key={idx} className="p-12 border border-white/5 bg-[#0D0D0D] hover:border-[#D4AF37]/30 transition-all group">
              <div className="mb-10 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-6 brand-font uppercase tracking-widest">{item.title}</h3>
              <p className="text-stone-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const ArquitecturaSerPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A]">
      <section className="py-32 bg-[#4A5C44] text-white text-center">
        <div className="container mx-auto px-6">
          <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/50 hover:text-white transition-all"><ArrowLeft className="w-4 h-4" /> Centro</button>
          <h1 className="text-5xl md:text-8xl font-bold brand-font mb-4 italic">Arquitectura del Ser</h1>
          <p className="text-[#D4AF37] tracking-[0.5em] uppercase text-xs">Diseño de conciencia pura</p>
        </div>
      </section>
      
      <section className="py-32 container mx-auto px-6 max-w-4xl">
        <div className="space-y-1">
          {[
            { level: "Capa 01", title: "Cuerpo / La Celda", desc: "El vehículo físico que habitamos. Debe ser cuidado como un templo de alto rendimiento." },
            { level: "Capa 02", title: "Mente / El Hexágono", desc: "La estructura que organiza nuestros pensamientos. El filtro de la realidad." },
            { level: "Capa 03", title: "Espíritu / La Miel", desc: "La esencia dulce y eterna que destilamos a través de la experiencia." }
          ].map((layer, idx) => (
            <div key={idx} className="p-16 bg-white border border-stone-100 flex flex-col md:flex-row gap-12 items-center hover:bg-stone-50 transition-colors">
               <span className="text-4xl md:text-6xl font-bold brand-font text-stone-200">{layer.level}</span>
               <div>
                  <h3 className="text-3xl font-bold mb-4 brand-font uppercase">{layer.title}</h3>
                  <p className="text-stone-500 text-lg serif italic">{layer.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const HexagonoPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <HexagonGraphic className="w-full h-full scale-150" />
      </div>
      <section className="min-h-screen flex items-center container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all"><ArrowLeft className="w-4 h-4" /> Retorno</button>
          <Hexagon className="w-16 h-16 text-[#D4AF37] mb-12" />
          <h1 className="text-6xl md:text-9xl font-bold brand-font gold-text mb-8 leading-none">EL HEXÁGONO</h1>
          <p className="text-2xl md:text-3xl font-light serif italic leading-relaxed text-stone-400 mb-12">
            "La forma que la naturaleza elige para guardar su mayor tesoro. En el hexágono no hay desperdicio, solo eficiencia divina y protección absoluta."
          </p>
          <div className="flex gap-8">
            <div className="w-px h-24 bg-[#D4AF37]/30"></div>
            <div className="pt-4">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Propiedades Geométricas</h4>
              <ul className="text-stone-500 space-y-2 text-sm uppercase tracking-tighter">
                <li>• Máxima estabilidad estructural</li>
                <li>• Optimización de energía vital</li>
                <li>• Conexión infinita entre celdas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const AlquimiaVisualPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      <section className="py-48 text-center bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2560&auto=format&fit=crop')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 container mx-auto px-6">
          <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-all"><ArrowLeft className="w-4 h-4" /> Altar</button>
          <h1 className="text-6xl md:text-9xl font-bold brand-font gold-text mb-8 italic">Alquimia Visual</h1>
          <p className="text-xl md:text-2xl font-light serif italic max-w-2xl mx-auto opacity-80">
            "No diseñamos para el ojo, diseñamos para el alma que observa a través de él."
          </p>
        </div>
      </section>

      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
               <div className="w-12 h-12 bg-[#D4AF37] shrink-0"></div>
               <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">El Oro: Iluminación</h3>
                  <p className="text-stone-400 leading-relaxed font-light">Representa el conocimiento (Da'at) manifestado. No es un color decorativo, es una frecuencia de soberanía.</p>
               </div>
            </div>
            <div className="flex gap-8 items-start">
               <div className="w-12 h-12 bg-black border border-white/20 shrink-0"></div>
               <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">El Negro: Misterio</h3>
                  <p className="text-stone-400 leading-relaxed font-light">El vacío fértil donde todo nace. La elegancia del silencio y la profundidad de lo invisible.</p>
               </div>
            </div>
            <div className="flex gap-8 items-start">
               <div className="w-12 h-12 bg-[#4A5C44] shrink-0"></div>
               <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest">El Verde: Arraigo</h3>
                  <p className="text-stone-400 leading-relaxed font-light">Nuestra conexión innegociable con el organismo vivo que es la Tierra.</p>
               </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 border-2 border-[#D4AF37]/20 rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <Wand2 className="w-32 h-32 text-[#D4AF37] opacity-20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const PromptGuidePage: React.FC<SubPageProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => window.scrollTo(0, 0), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(SPIRITUAL_GUIDE_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] selection:bg-[#D4AF37]/30 leather-texture">
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Terminal className="w-full h-full p-20" />
        </div>
        <button onClick={onBack} className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#D4AF37] transition-all relative z-10"><ArrowLeft className="w-4 h-4" /> Herramientas</button>
        <h1 className="text-5xl md:text-8xl font-bold brand-font gold-text mb-4 uppercase relative z-10">Prompt DAHNI</h1>
        <p className="text-stone-500 tracking-[0.5em] uppercase text-xs relative z-10">Guía Espiritual IA</p>
      </section>

      <section className="pb-32 container mx-auto px-6 max-w-4xl">
        <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 p-8 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.05)]">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
              <span className="ml-4 text-[10px] uppercase tracking-widest text-stone-500 font-bold">Instrucción Maestra</span>
            </div>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#D4AF37] hover:text-black transition-all text-xs uppercase tracking-widest font-bold border border-white/10"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copiado' : 'Copiar Prompt'}
            </button>
          </div>
          
          <div className="prose prose-invert prose-stone max-w-none">
            <p className="text-stone-400 text-sm leading-relaxed mb-8 italic">
              "Utiliza este prompt en tu IA preferida (ChatGPT, Claude, Gemini) para invocar al Custodio de Da'at y profundizar en tu propia arquitectura del ser."
            </p>
            <pre className="bg-black/50 p-6 rounded border border-white/5 whitespace-pre-wrap font-mono text-sm text-[#D4AF37]/90 leading-relaxed shadow-inner">
              {SPIRITUAL_GUIDE_PROMPT}
            </pre>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 text-center md:text-left">
           <div>
              <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] font-bold text-sm mb-4">¿Cómo usarlo?</h4>
              <p className="text-stone-500 text-sm leading-relaxed">
                Copia el texto superior y pégalo como primer mensaje en un nuevo chat de tu IA. A partir de ahí, la inteligencia adoptará la frecuencia de DAHNI para guiarte.
              </p>
           </div>
           <div>
              <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] font-bold text-sm mb-4">El Propósito</h4>
              <p className="text-stone-500 text-sm leading-relaxed">
                Esta herramienta no busca darte respuestas, sino entrenar tu capacidad de hacértelas tú mismo. Es tecnología al servicio de lo sagrado.
              </p>
           </div>
        </div>
      </section>
    </div>
  );
};
