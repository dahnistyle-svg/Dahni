
import React, { useEffect } from 'react';
import BeeLogo from '../components/BeeLogo';
import { ArrowLeft, MessageSquare, Send, Instagram, Music, Youtube, Globe, MapPin, Calendar, BookOpen, Search, ArrowRight, Quote } from 'lucide-react';

interface SubPageProps {
  onBack: () => void;
}

export const ColmenaDigitalPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-black text-[#F5F5F5] selection:bg-[#D4AF37]/40">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1A1A1A_0%,_#000_100%)]"></div>
        <div className="relative z-10 text-center px-6">
          <button onClick={onBack} className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-[#D4AF37] transition-all"><ArrowLeft className="w-4 h-4" /> El Portal</button>
          <h1 className="text-5xl md:text-8xl font-bold brand-font gold-text mb-4">Colmena Digital</h1>
          <p className="text-stone-400 tracking-[0.3em] uppercase text-xs">Sincronía en la red</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Telegram", icon: <Send />, count: "2.4k Miembros", color: "hover:border-[#0088cc]" },
            { name: "Instagram", icon: <Instagram />, count: "15k Seguidores", color: "hover:border-[#e1306c]" },
            { name: "TikTok", icon: <Music />, count: "Ritmos de conciencia", color: "hover:border-[#ff0050]" },
            { name: "Discord", icon: <MessageSquare />, count: "Debate Sagrado", color: "hover:border-[#5865f2]" }
          ].map((app, idx) => (
            <div key={idx} className={`p-12 bg-[#1A1A1A] border border-white/5 transition-all duration-700 ${app.color} group cursor-pointer`}>
              <div className="mb-8 text-[#D4AF37] group-hover:scale-110 transition-transform">{app.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{app.name}</h3>
              <p className="text-stone-500 text-sm mb-8">{app.count}</p>
              <div className="h-px w-0 group-hover:w-full bg-[#D4AF37] transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const CirculosDaatPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-[#4A5C44] text-white">
      <section className="h-screen flex items-center justify-center relative px-6 text-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl">
          <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all"><ArrowLeft className="w-4 h-4" /> Retorno</button>
          <span className="block text-[#D4AF37] text-xs uppercase tracking-[0.8em] mb-6">Sabiduría de Cerca</span>
          <h1 className="text-6xl md:text-9xl font-bold brand-font mb-8">Círculos de Da'at</h1>
          <p className="text-xl md:text-2xl font-light serif italic leading-relaxed opacity-80">"Donde lo invisible se vuelve palabra compartida."</p>
        </div>
      </section>
      
      <section className="py-32 bg-[#F5F5F5] text-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-24">
            <div className="text-center">
               <h2 className="text-4xl font-bold brand-font mb-8">Encuentros en el Umbral</h2>
               <p className="text-stone-600 leading-relaxed text-lg">No son conferencias. Son rituales de escucha profunda. Los Círculos de Da'at ocurren en locaciones secretas, bajo la luz de la intención pura.</p>
            </div>
            <div className="border-t border-stone-200 pt-24 grid gap-16">
               <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="w-32 h-32 bg-[#4A5C44] flex items-center justify-center rounded-full text-[#D4AF37] shrink-0 shadow-2xl">
                    <Globe className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Próximo Círculo: El Silencio</h3>
                    <p className="text-stone-500 mb-6 font-light uppercase tracking-widest text-xs">Barcelona / Invierno 2024</p>
                    <button className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">Solicitar Acceso</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const RitualesPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-[70vh] flex items-center px-6 md:px-24">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2560&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        <div className="relative z-10">
          <button onClick={onBack} className="mb-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-all"><ArrowLeft className="w-4 h-4" /> Inicio</button>
          <h1 className="text-5xl md:text-8xl font-bold brand-font mb-4">Rituales Colectivos</h1>
          <p className="text-[#D4AF37] tracking-[0.5em] uppercase text-xs">Experiencias en movimiento</p>
        </div>
      </section>

      <section className="py-32 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "El Despertar de la Abeja", loc: "Madrid", img: "https://images.unsplash.com/photo-1514525253344-f25262c3c76b?q=80&w=1000&auto=format&fit=crop" },
            { title: "Sincronía Hexagonal", loc: "Mexico DF", img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1000&auto=format&fit=crop" },
            { title: "La Noche de Da'at", loc: "Buenos Aires", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop" }
          ].map((rit, idx) => (
            <div key={idx} className="relative aspect-[16/9] overflow-hidden group cursor-pointer">
              <img src={rit.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-center items-center text-center p-12">
                <span className="text-[#D4AF37] text-xs tracking-widest uppercase mb-4">{rit.loc}</span>
                <h3 className="text-3xl font-bold mb-6">{rit.title}</h3>
                <div className="px-8 py-3 border border-white/20 text-xs uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all">Ver Memoria</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const OraculoPage: React.FC<SubPageProps> = ({ onBack }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1A1A1A] selection:bg-[#4A5C44]/20">
      <header className="py-24 border-b border-stone-200">
        <div className="container mx-auto px-6 flex flex-col items-center">
           <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-stone-400 hover:text-black transition-all"><ArrowLeft className="w-4 h-4" /> Desconexión</button>
           <h1 className="text-6xl md:text-9xl font-bold brand-font mb-4">El Oráculo</h1>
           <div className="w-24 h-px bg-[#D4AF37] mb-8"></div>
           <p className="text-stone-500 tracking-[0.3em] uppercase text-xs">Archivos de Conciencia Unificada</p>
        </div>
      </header>

      <section className="py-32 container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-32">
            {[1, 2, 3].map((post) => (
              <article key={post} className="group cursor-pointer">
                <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] mb-6 block font-bold">Capítulo 0{post}</span>
                <h2 className="text-4xl md:text-5xl font-bold brand-font mb-8 group-hover:text-[#4A5C44] transition-colors leading-tight">La geometría del silencio: Cómo escuchar lo que no se dice.</h2>
                <p className="text-stone-500 text-lg leading-relaxed serif italic mb-10">"En la quietud del hexágono encontramos la respuesta que el ruido del mundo nos oculta..."</p>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400">Lectura de 8 min</span>
                  <div className="h-px flex-1 bg-stone-100"></div>
                  <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-4 transition-transform" />
                </div>
              </article>
            ))}
          </div>
          <aside className="lg:col-span-4 space-y-16">
            <div className="p-10 bg-white border border-stone-100 shadow-xl">
               <h4 className="text-xs uppercase tracking-[0.4em] font-bold mb-8 border-b border-stone-100 pb-4">Búsqueda</h4>
               <div className="flex items-center gap-4 bg-stone-50 p-4 border border-stone-200">
                  <Search className="w-4 h-4 text-stone-400" />
                  <input type="text" placeholder="CONCIENCIA..." className="bg-transparent text-xs tracking-widest focus:outline-none w-full" />
               </div>
            </div>
            <div className="p-10 bg-[#4A5C44] text-white">
               <Quote className="w-12 h-12 text-[#D4AF37] opacity-40 mb-8" />
               <p className="text-xl serif italic font-light leading-relaxed mb-8">"El conocimiento no es poder, es responsabilidad. Lo que sabes te obliga a ser."</p>
               <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">El Custodio</span>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
