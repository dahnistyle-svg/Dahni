
import React, { useEffect } from 'react';
import BeeLogo from '../components/BeeLogo';
import { ArrowLeft, ArrowRight, ShoppingBag, ShieldCheck, Zap } from 'lucide-react';
import { PRODUCTS_MODA, PRODUCTS_ARTICULOS, PRODUCTS_ALQUIMIA, PRODUCTS_RELIQUIAS } from '../constants';

interface SubPageProps {
  onBack: () => void;
}

const ProductSection = ({ title, subtitle, products }: { title: string, subtitle: string, products: any[] }) => (
  <div className="py-24 border-b border-white/5 last:border-b-0">
    <div className="mb-16">
      <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.5em] mb-4 font-bold">{subtitle}</h3>
      <h2 className="text-4xl md:text-6xl font-bold brand-font mb-4">{title}</h2>
      <div className="w-20 h-px bg-[#D4AF37]/50"></div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-[4/5] overflow-hidden bg-[#111] border border-white/5 group-hover:border-[#D4AF37]/30 transition-all duration-700 relative">
            <img 
              src={product.img} 
              alt={product.name} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">{product.name}</h4>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-6 font-medium leading-relaxed">{product.desc}</p>
              <button className="flex items-center gap-3 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                Solicitar Pieza <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StyleBasePage = ({ onBack, title, slogan, children }: { onBack: () => void, title: string, slogan: string, children: React.ReactNode }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] selection:bg-[#D4AF37]/30 leather-texture pt-32 md:pt-48">
      <section className="container mx-auto px-6 mb-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <BeeLogo className="w-96 h-96 grayscale" />
        </div>
        <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#D4AF37] transition-all relative z-10">
          <ArrowLeft className="w-4 h-4" /> Volver al Inicio
        </button>
        <h1 className="text-6xl md:text-9xl font-bold brand-font gold-text mb-6 uppercase tracking-tighter relative z-10">{title}</h1>
        <p className="text-stone-500 tracking-[0.8em] uppercase text-xs font-black relative z-10">{slogan}</p>
      </section>
      
      <section className="container mx-auto px-6 pb-32">
        {children}
      </section>

      <section className="py-32 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <ShieldCheck className="w-8 h-8 text-[#D4AF37] mx-auto mb-6 opacity-40" />
              <h4 className="text-xs uppercase tracking-[0.4em] font-bold mb-4">Origen Protegido</h4>
              <p className="text-[10px] text-stone-600 uppercase tracking-widest font-medium leading-relaxed">Cada elemento es seleccionado bajo criterios de vibración y ética radical.</p>
            </div>
            <div>
              <Zap className="w-8 h-8 text-[#D4AF37] mx-auto mb-6 opacity-40" />
              <h4 className="text-xs uppercase tracking-[0.4em] font-bold mb-4">Carga Intencional</h4>
              <p className="text-[10px] text-stone-600 uppercase tracking-widest font-medium leading-relaxed">No solo objetos, sino anclas para lo intangible consagradas en el umbral.</p>
            </div>
            <div>
              <ShoppingBag className="w-8 h-8 text-[#D4AF37] mx-auto mb-6 opacity-40" />
              <h4 className="text-xs uppercase tracking-[0.4em] font-bold mb-4">Exclusividad Da'at</h4>
              <p className="text-[10px] text-stone-600 uppercase tracking-widest font-medium leading-relaxed">Producción limitada por ciclos de conciencia. Piezas únicas para portadores.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const ModaPage: React.FC<SubPageProps> = ({ onBack }) => (
  <StyleBasePage onBack={onBack} title="Moda" slogan="The Skin / Armaduras Sutiles">
    <ProductSection title="Colección Umbral" subtitle="Prendas de Poder" products={PRODUCTS_MODA} />
    <div className="py-24 text-center">
      <p className="text-2xl md:text-3xl font-light serif italic text-stone-500 max-w-4xl mx-auto">
        "Nuestras prendas son símbolos vivos. Vestir DAHNI es portar una intención de unión, propósito y despertar espiritual."
      </p>
    </div>
  </StyleBasePage>
);

export const ArticulosPage: React.FC<SubPageProps> = ({ onBack }) => (
  <StyleBasePage onBack={onBack} title="Artículos" slogan="The Space / Objetos del Entorno">
    <ProductSection title="Archivos Físicos" subtitle="Elementos de Conciencia" products={PRODUCTS_ARTICULOS} />
  </StyleBasePage>
);

export const AlquimiaCorpPage: React.FC<SubPageProps> = ({ onBack }) => (
  <StyleBasePage onBack={onBack} title="Alquimia" slogan="The Scent / Fragancias de lo Invisible">
    <ProductSection title="Destilados Sagrados" subtitle="Esencias Corporales" products={PRODUCTS_ALQUIMIA} />
  </StyleBasePage>
);

export const ReliquiasPage: React.FC<SubPageProps> = ({ onBack }) => (
  <StyleBasePage onBack={onBack} title="Reliquias" slogan="The Soul / Amuletos de Poder">
    <ProductSection title="Joyas Sagradas" subtitle="Geometría del Alma" products={PRODUCTS_RELIQUIAS} />
  </StyleBasePage>
);
