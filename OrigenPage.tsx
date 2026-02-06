
import React, { useEffect } from 'react';
import Wordmark from '../components/Wordmark';
import BeeLogo from '../components/BeeLogo';
import { Quote, ArrowLeft, Sparkles, Book, Eye, Compass, Sun } from 'lucide-react';

interface OrigenPageProps {
  onBack: () => void;
}

const OrigenPage: React.FC<OrigenPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Hero Origen */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#4A5C44]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2560&auto=format&fit=crop" 
            alt="Bosque Profundo" 
            className="w-full h-full object-cover opacity-30 mix-blend-multiply scale-110 animate-[ken-burns_30s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A5C44]/80 via-transparent to-[#F5F5F5]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <button 
            onClick={onBack}
            className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al presente
          </button>
          <span className="block text-[#D4AF37] text-xs uppercase tracking-[1em] mb-6 font-bold animate-fade-in">El Inicio de Todo</span>
          <h1 className="text-6xl md:text-9xl font-bold brand-font text-white drop-shadow-2xl mb-8 leading-none">ORIGEN</h1>
          <div className="w-24 h-px bg-[#D4AF37] mx-auto opacity-50"></div>
        </div>
      </section>

      {/* La Etimología de Da'at */}
      <section className="py-32 md:py-48 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-32">
              <span className="text-[#4A5C44] text-[10px] uppercase tracking-[0.6em] mb-6 block font-bold">Semántica Sagrada</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-12 brand-font leading-tight italic">El Nombre que nos Habita</h2>
              <div className="space-y-12">
                <div className="p-10 bg-white border-l-4 border-[#D4AF37] shadow-xl">
                   <h3 className="text-4xl font-bold mb-4 brand-font">Da’at (דעת)</h3>
                   <p className="text-stone-600 text-lg leading-relaxed serif italic">
                     "No es solo acumular datos. Es la unión mística donde la sabiduría se vuelve experiencia. Es el punto invisible donde el cielo toca la tierra en tu interior."
                   </p>
                </div>
                <div className="p-10 bg-[#1A1A1A] border-l-4 border-[#D4AF37] shadow-2xl text-white">
                   <h3 className="text-4xl font-bold mb-4 brand-font gold-text">Ani (אני)</h3>
                   <p className="text-stone-300 text-lg leading-relaxed serif italic">
                     "El 'Yo' consciente. El portador. El envase sagrado que decide encarnar esa sabiduría y llevarla puesta como una armadura de luz."
                   </p>
                </div>
              </div>
            </div>
            <div className="pt-20 lg:pt-0 space-y-16">
               <div className="prose prose-stone prose-lg">
                  <p className="text-2xl font-light leading-relaxed serif text-stone-700">
                    DAHNI no nació en un escritorio de marketing. Nació en el silencio de un bosque, donde la geometría de las celdas de una colmena reveló un orden que la modernidad había olvidado.
                  </p>
                  <p className="text-xl font-light leading-relaxed text-stone-600">
                    Descubrimos que la ropa no es solo tela; es un lenguaje. Un rito. Cuando dices "DAHNI", estás afirmando: <span className="text-[#4A5C44] font-bold">"Yo soy el conocimiento sagrado"</span>. Es un compromiso con el despertar radical de tu propia esencia.
                  </p>
                  <div className="my-16 flex justify-center">
                    <BeeLogo className="w-48 h-48 opacity-20" />
                  </div>
                  <p className="text-xl font-light leading-relaxed text-stone-600">
                    Buscamos lo invisible porque es lo único que permanece. Lo visible es solo el vehículo. Por eso, cada costura, cada fibra y cada símbolo en nuestras piezas están cargados de una intención que precede a la materia.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* La Visión del Hexágono */}
      <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden leather-texture">
         <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
            <BeeLogo className="w-full h-full scale-150 rotate-12" />
         </div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
               <Quote className="w-16 h-16 text-[#D4AF37]/30 mx-auto mb-12" />
               <h2 className="text-4xl md:text-6xl font-bold mb-12 brand-font leading-tight">
                 "Vimos la perfección en la abeja y entendimos que la comunidad es la única forma de guardar la miel del espíritu."
               </h2>
               <div className="grid md:grid-cols-3 gap-12 mt-24">
                  {[
                    { icon: <Compass />, title: "Propósito", desc: "Guiar al portador hacia su centro." },
                    { icon: <Eye />, title: "Claridad", desc: "Ver lo que otros ignoran." },
                    { icon: <Sun />, title: "Vitalidad", desc: "Energía pura en cada fibra." }
                  ].map((item, idx) => (
                    <div key={idx} className="p-8 border border-white/5 hover:border-[#D4AF37]/40 transition-colors bg-black/40">
                       <div className="text-[#D4AF37] mb-6 flex justify-center">{item.icon}</div>
                       <h4 className="text-xl font-bold mb-4 uppercase tracking-widest">{item.title}</h4>
                       <p className="text-stone-400 text-sm font-light">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* El Manuscrito Final */}
      <section className="py-32 md:py-64 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Book className="w-12 h-12 text-[#4A5C44] mx-auto mb-10 opacity-30" />
            <p className="text-3xl md:text-5xl font-light serif italic text-stone-800 leading-relaxed mb-16">
              "Esta es la historia de una marca que no quiere clientes, sino portadores. No vende productos, ofrece llaves."
            </p>
            <button 
              onClick={onBack}
              className="px-12 py-6 bg-[#1A1A1A] text-white font-bold uppercase tracking-[0.4em] hover:bg-[#D4AF37] transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              Habitar el Presente
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrigenPage;
