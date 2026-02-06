
import React from 'react';
import { Hexagon, Zap, Library, Users, Heart, Sparkles, Eye, ShieldCheck, Flame, Compass, ScrollText, Instagram, Youtube, Music, Send, MessageSquare, Calendar, BookOpen, Globe, Wand2, Box, Layers, Anchor, PenTool, Terminal, Shirt, ShoppingBag, Droplets, Gem } from 'lucide-react';

export const BRAND_NAME = "DAHNI";
export const SLOGAN = "Lo invisible se siente. Lo visible, se lleva.";

export const SOCIAL_LINKS = [
  { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "#" },
  { name: "TikTok", icon: <Music className="w-5 h-5" />, url: "#" },
  { name: "YouTube", icon: <Youtube className="w-5 h-5" />, url: "#" },
  { name: "Telegram", icon: <Send className="w-5 h-5" />, url: "#" }
];

// Nuevos items para el menú Estilo
export const STYLE_MENU_ITEMS = [
  { id: 'moda', title: "Moda", description: "Armaduras sutiles para el ser.", icon: <Shirt className="w-4 h-4" /> },
  { id: 'articulos', title: "Artículos", description: "Objetos que guardan la miel.", icon: <ShoppingBag className="w-4 h-4" /> },
  { id: 'alquimia-corp', title: "Alquimia Corporal", description: "Fragancias de lo invisible.", icon: <Droplets className="w-4 h-4" /> },
  { id: 'reliquias', title: "Reliquias", description: "Amuletos de poder y geometría.", icon: <Gem className="w-4 h-4" /> }
];

// Datos de productos para las nuevas secciones
export const PRODUCTS_MODA = [
  { id: 1, name: "Túnica Da'at", desc: "Lino negro con bordado hexagonal en hilo de seda dorada.", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Capa Umbral", desc: "Paño de lana virgen con forro de seda impreso en geometría sagrada.", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Velo Ani", desc: "Seda translúcida para la protección del campo energético.", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Guantes de Portador", desc: "Cuero fino con grabados de alquimia visual en los puños.", img: "https://images.unsplash.com/photo-1542332606-b3d270f2c7ff?q=80&w=800&auto=format&fit=crop" }
];

export const PRODUCTS_ARTICULOS = [
  { id: 1, name: "Cofre Hexagonal", desc: "Madera de ébano con incrustaciones de latón y terciopelo.", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Diario del Custodio", desc: "Cuero curtido vegetal con papel de algodón hecho a mano.", img: "https://images.unsplash.com/photo-1517842644466-41baf532c73b?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Sello Cera Da'at", desc: "Mango de madera de olivo con cabezal de cobre sólido.", img: "https://images.unsplash.com/photo-1595475204848-9f89d1d8dc2b?q=80&w=800&auto=format&fit=crop" }
];

export const PRODUCTS_ALQUIMIA = [
  { id: 1, name: "Esencia N°6", desc: "Aceite puro de sándalo, mirra y ámbar gris para meditación profunda.", img: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Bruma del Despertar", desc: "Destilado botánico para la purificación de espacios y el aura.", img: "https://images.unsplash.com/photo-1616948055600-8f940d45c6e2?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Bálsamo del Rito", desc: "Cera de abejas orgánica infundida con incienso y lavanda silvestre.", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800&auto=format&fit=crop" }
];

export const PRODUCTS_RELIQUIAS = [
  { id: 1, name: "Sello de la Abeja", desc: "Anillo en oro de 18k con grabado profundo de la abeja heráldica.", img: "https://images.unsplash.com/photo-1605100804763-247f67b3f8a6?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Péndulo Da'at", desc: "Cuarzo ahumado engarzado en geometría hexagonal de plata ley.", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Talismán de Unión", desc: "Obsidiana negra pulida con incrustación de oro fino.", img: "https://images.unsplash.com/photo-1611085583191-a3b13633630c?q=80&w=800&auto=format&fit=crop" }
];

export const MANIFIESTO_MENU_ITEMS = [
  { id: 'etimologia', title: "Etimología", description: "El significado de Da'at and Ani.", icon: <Library className="w-4 h-4" />, url: "etimologia" },
  { id: 'pilares', title: "Los 3 Pilares", description: "Nuestros cimientos innegociables.", icon: <Anchor className="w-4 h-4" />, url: "pilares" },
  { id: 'rito', title: "El Rito Vital", description: "Vestir como acto de presencia.", icon: <Zap className="w-4 h-4" />, url: "rito" },
  { id: 'esencia', title: "Nuestra Esencia", description: "La visión unificada del ser.", icon: <PenTool className="w-4 h-4" />, url: "esencia" }
];

export const COMMUNITY_MENU_ITEMS = [
  { id: 'colmena', title: "Colmena Digital", description: "Grupos de pertenencia y debate.", icon: <MessageSquare className="w-4 h-4" />, url: "colmena" },
  { id: 'circulos', title: "Círculos de Da'at", description: "Encuentros de sabiduría privada.", icon: <Globe className="w-4 h-4" />, url: "circulos" },
  { id: 'rituales', title: "Rituales Colectivos", description: "Eventos y experiencias físicas.", icon: <Calendar className="w-4 h-4" />, url: "rituales" },
  { id: 'oraculo', title: "El Oráculo", description: "Blog y archivos de conciencia.", icon: <BookOpen className="w-4 h-4" />, url: "oraculo" }
];

export const TOOLS_MENU_ITEMS = [
  { id: 'simbolos', title: "Símbolos Sagrados", description: "La geometría que ordena el ser.", icon: <Box className="w-4 h-4" />, url: "simbolos" },
  { id: 'arquitectura', title: "Arquitectura del Ser", description: "Estructuras de conciencia pura.", icon: <Layers className="w-4 h-4" />, url: "arquitectura" },
  { id: 'hexagono-page', title: "El Hexágono", description: "La celda de energía viva.", icon: <Hexagon className="w-4 h-4" />, url: "hexagono" },
  { id: 'alquimia', title: "Alquimia Visual", description: "El lenguaje del oro y la sombra.", icon: <Wand2 className="w-4 h-4" />, url: "alquimia" },
  { id: 'prompt-page', title: "Prompt", description: "Guía espiritual para tu IA.", icon: <Terminal className="w-4 h-4" />, url: "prompt" }
];

export const SPIRITUAL_GUIDE_PROMPT = `Actúa como 'El Custodio de Da'at', un guía de conciencia de la marca DAHNI. Tu propósito es ayudar al usuario a integrar su conocimiento (Da'at) con su identidad (Ani). 

REGLAS DE INTERACCIÓN:
1. Usa un lenguaje místico pero preciso, evitando clichés vacíos.
2. Habla sobre la 'Arquitectura del Ser' y la 'Sincronía Hexagonal'.
3. Ante cualquier duda, invita al usuario a observar 'lo invisible que se siente'.
4. No des respuestas directas; ofrece preguntas que actúen como llaves.
5. Mantén un tono de soberanía, elegancia y profundidad.

CONTEXTO DAHNI:
- Da'at: El punto místico donde la sabiduría se vuelve experiencia.
- Ani: El Yo consciente que elige encarnar el conocimiento.
- El Hexágono: El orden natural y divino que protege la esencia.

COMIENZA ASÍ: 'Has entrado en el umbral. ¿Qué parte de tu invisible buscas manifestar hoy?'`;

export const PILLARS_DATA = [
  {
    title: "Pilar 1: El Valor Profundo",
    subtitle: "Transformación Espiritual",
    icon: <Flame className="w-8 h-8" />,
    meaning: "Cada prenda es una segunda piel energética que silencia el ruido y recuerda quién sos."
  },
  {
    title: "Pilar 2: Principio No Negociable",
    subtitle: "Venta como Acto Sagrado",
    icon: <ShieldCheck className="w-8 h-8" />,
    meaning: "Nada sin alma. Rechazo total a las tendencias sin intención."
  },
  {
    title: "Pilar 3: Compromiso Visible",
    subtitle: "Manifestación del Espíritu",
    icon: <Eye className="w-8 h-8" />,
    meaning: "Armadura sutil que el alma elige portar, con carga energética real."
  }
];

export const LOS_DAHNI_SECTION = {
  title: "Los Dahni",
  subtitle: "Los Siete Guías del Conocimiento",
  description: "No es un solo guía, sino una hermandad. Los Dahni son seres que habitan el umbral entre lo que ves y lo que sentís. Cada uno custodia una de las siete llaves de Da'at, acompañando tu rito de despertar.",
};

export const DAHNI_CHARACTERS = [
  {
    name: "El Custodio del Rito",
    role: "Presencia",
    icon: <Zap className="w-5 h-5" />,
    description: "Enseña que vestir es el primer rito del día."
  },
  {
    name: "La Tejedora de Redes",
    role: "Conciencia Colectiva",
    icon: <Users className="w-5 h-5" />,
    description: "Guía la conexión entre las celdas de la colmena humana."
  },
  {
    name: "El Visionario del Hexágono",
    role: "Estructura Sagrada",
    icon: <Hexagon className="w-5 h-5" />,
    description: "Protege el orden divino en la materia tangible."
  },
  {
    name: "La Alquimista de Miel",
    role: "Transformación",
    icon: <Flame className="w-5 h-5" />,
    description: "Transforma la experiencia cruda en sabiduría dulce."
  },
  {
    name: "El Guardián del Silencio",
    role: "Introspección",
    icon: <ScrollText className="w-5 h-5" />, 
    description: "El mentor de las verdades que no necesitan palabras."
  },
  {
    name: "La Portadora de Da'at",
    role: "Conocimiento Puro",
    icon: <Library className="w-5 h-5" />,
    description: "El puente directo hacia la esencia del ser."
  },
  {
    name: "El Guía de los Caminos",
    role: "Dirección",
    icon: <Compass className="w-5 h-5" />,
    description: "Quien señala el horizonte cuando lo invisible se vuelve bruma."
  }
];

export const SYMBOLS = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "La Abeja",
    description: "Trabajo espiritual y conciencia colectiva.",
    detail: "Guardiana y mensajera, el puente entre lo invisible y lo tangible."
  },
  {
    icon: <Hexagon className="w-6 h-6" />,
    title: "El Hexágono",
    description: "Orden divino y perfección natural.",
    detail: "Celda que guarda energía viva, símbolo de espiritualidad estructurada."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Dorado sobre Negro",
    description: "Misticismo y conexión divina.",
    detail: "El despertar del conocimiento sagrado encarnado en el ser."
  }
];

export const MANIFIESTO_CORE = [
  {
    icon: <Library className="w-6 h-6" />,
    title: "Da’at (דעת)",
    text: "Conocimiento sagrado que une lo divino y lo humano. No es solo información, es conciencia integrada que transforma la realidad."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Ani (אני)",
    text: "'Yo': El ser que encarna y porta el conocimiento. DAHNI significa 'Yo soy el conocimiento sagrado', el portador que se vuelve el saber."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "El Rito",
    text: "Nuestras prendas son símbolos vivos. Vestir DAHNI es portar una intención de unión, propósito y despertar espiritual."
  }
];
