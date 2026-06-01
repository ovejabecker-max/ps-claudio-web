import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, MapPin, Video, BrainCircuit,
  HeartHandshake, Sparkles, ArrowRight, Star,
  GraduationCap, Phone, Mail, Quote,
  Users, Dna, Zap, CalendarDays, Activity,
  ChevronRight, ShieldCheck, Clock
} from 'lucide-react';
import ElevenLabsWidget from './components/ElevenLabsWidget';

// --- Componente de Animación al Scroll ---
const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1 }
    );
    
    const current = domRef.current;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-y-0 translate-x-0';
    switch (direction) {
      case 'up': return 'translate-y-10';
      case 'down': return '-translate-y-10';
      case 'left': return 'translate-x-10';
      case 'right': return '-translate-x-10';
      default: return 'translate-y-10';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Componente Tarjeta Magnética 3D (Propuesta 4) ---
const TiltCard = ({ children, className = '' }) => {
  const [transform, setTransform] = useState('');
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15; // Rotación máxima
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transform }}
    >
      {children}
    </div>
  );
};

// --- Fondo Abstracto Fluido ---
const AbstractBackground = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none -z-10 transition-colors duration-1500 ${isDark ? 'bg-teal-950' : 'bg-slate-50'}`}>
      <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-[pulse_8s_ease-in-out_infinite] transition-colors duration-1000 ${isDark ? 'bg-teal-700' : 'bg-teal-200'}`} />
      <div className={`absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[150px] opacity-60 animate-[pulse_10s_ease-in-out_infinite_reverse] transition-colors duration-1000 ${isDark ? 'bg-cyan-900' : 'bg-blue-200'}`} />
      <div className={`absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-[pulse_12s_ease-in-out_infinite] transition-colors duration-1000 ${isDark ? 'bg-emerald-900' : 'bg-indigo-200'}`} />
    </div>
  );
};

// --- Componente Cursor Personalizado ---
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const updateHover = (e) => {
      // Detectar si el mouse está sobre un elemento clickeable
      const isInteractive = e.target.closest('a, button, input, [role="button"]');
      setIsHovering(!!isInteractive);
    };
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHover);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHover);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-100 hidden md:block transition-transform duration-100 ease-out mix-blend-difference"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div className={`bg-white rounded-full transition-all duration-300 ease-out flex items-center justify-center ${
        isHovering ? 'w-16 h-16 -ml-8 -mt-8 opacity-40 scale-125' : 'w-4 h-4 -ml-2 -mt-2 opacity-100'
      }`} />
    </div>
  );
};

// --- Componente Animación Tipográfica Cinematográfica ---
const SplitText = ({ words, delayOffset = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.1 }
    );
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div ref={domRef} className={`inline-block ${className}`}>
      {words.map((item, i) => (
        <span key={i} className="inline-block overflow-hidden pb-3 mr-[0.25em] align-bottom">
          <span
            className={`inline-block transition-transform duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0' : 'translate-y-[120%]'} ${item.highlight ? `text-transparent bg-clip-text bg-linear-to-r ${item.highlight}` : ''}`}
            style={{ transitionDelay: `${delayOffset + i * 150}ms` }}
          >
            {item.text}
          </span>
        </span>
      ))}
    </div>
  );
};




// --- Componente Principal ---
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Manejo del Navbar on scroll y Scrollytelling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer para Scrollytelling (Propuesta 1)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTheme(entry.target.getAttribute('data-theme') || 'light');
          }
        });
      },
      { threshold: 0.4 } // Se activa cuando el 40% de la sección es visible
    );

    document.querySelectorAll('section[data-theme]').forEach(section => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Filosofía', href: '#about' },
    { name: 'Especialidades', href: '#specialties' },
    { name: 'Servicios', href: '#services' },
    { name: 'Formación', href: '#education' },
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-1000 md:cursor-none ${theme === 'dark' ? 'text-slate-100 selection:bg-teal-500 selection:text-white' : 'text-slate-800 selection:bg-teal-200 selection:text-teal-900'}`}>
      <CustomCursor />
      <AbstractBackground theme={theme} />

      {/* --- Navbar --- */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? (theme === 'dark' ? 'bg-teal-950/80 backdrop-blur-md shadow-sm border-b border-white/10 py-3' : 'bg-white/70 backdrop-blur-md shadow-sm py-3')
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-teal-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-teal-500/30 transition-shadow">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-none tracking-tight transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Ps. Claudio Ballesteros</span>
              <span className={`text-xs font-medium tracking-wider uppercase transition-colors duration-500 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>Terapeuta Complementario</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-slate-300 hover:text-teal-400' : 'text-slate-600 hover:text-teal-600'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg hover:shadow-teal-500/30 ${theme === 'dark' ? 'bg-teal-500 text-slate-900 hover:bg-teal-400' : 'bg-slate-900 text-white hover:bg-teal-600'}`}
            >
              Agendar Hora
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-100 py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-teal-600 py-2 border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold shadow-md"
            >
              Agendar Hora
            </a>
          </div>
        )}
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section id="home" data-theme="light" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100/50 border border-teal-200/50 text-teal-700 text-sm font-semibold mb-6">
                <Star className="w-4 h-4 fill-teal-600" />
                <span>Especialista altamente valorado en Doctoralia</span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] transition-colors duration-1000 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                <SplitText 
                  delayOffset={100}
                  words={[
                    { text: 'Sanación' },
                    { text: 'profunda', highlight: 'from-teal-500 to-blue-600' },
                    { text: 'y' },
                    { text: 'efectiva.', highlight: 'from-blue-600 to-indigo-600' }
                  ]}
                />
              </h1>
            </FadeIn>
            <FadeIn delay={600}>
              <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors duration-1000 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                Encuentra la raíz de tu conflicto emocional sin largos tratamientos y transfórmalo en tu mayor recurso de crecimiento personal.
              </p>
            </FadeIn>
            <FadeIn delay={700}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-teal-600 to-blue-600 text-white font-bold shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  <CalendarDays className="w-5 h-5" />
                  Reserva tu sesión
                </a>
                <a href="#about" className={`w-full sm:w-auto px-8 py-4 rounded-full font-semibold shadow-md transition-all flex items-center justify-center gap-2 border ${theme === 'dark' ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'}`}>
                  Conoce mi enfoque
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={800}>
              <div className={`mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium transition-colors duration-1000 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-teal-500" />
                  <span>Consulta Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-500" />
                  <span>Presencial en Rancagua</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="flex-1 w-full max-w-md lg:max-w-full relative mt-12 lg:mt-0">
            <FadeIn delay={200} direction="left">
              {/* Elementos Respirables y Formas Fluidas (Imagen en arco) */}
              <div className="relative aspect-4/5 rounded-t-[10rem] rounded-b-[3rem] overflow-hidden shadow-2xl shadow-teal-900/10 border-4 border-white/50 bg-white/20 backdrop-blur-sm p-3">
                <div className="w-full h-full rounded-t-[10rem] rounded-b-[2.5rem] overflow-hidden bg-slate-200 relative flex items-center justify-center text-slate-400">
                  <div className="absolute inset-0 bg-linear-to-tr from-teal-500/20 to-blue-500/20 mix-blend-overlay"></div>
                  <div className="text-center p-6">
                     <span className="text-sm border border-slate-300 rounded px-2 py-1"></span>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 -left-4 md:-left-8 bg-white p-4 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-4 animate-[bounce_5s_ease-in-out_infinite]">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">+38 Opiniones</div>
                    <div className="text-sm text-slate-500">Pacientes satisfechos</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- Philosophy / About Section --- */}
        <section id="about" data-theme="dark" className={`py-24 border-y transition-colors duration-1000 ${theme === 'dark' ? 'bg-teal-950/40 border-teal-800/50' : 'bg-white/50 border-white/60'}`}>
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Un Enfoque Diferente</h2>
                <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
              </div>
            </FadeIn>
            
            <div className={`relative p-8 md:p-12 rounded-[2.5rem] shadow-xl transition-all duration-1000 ${theme === 'dark' ? 'bg-teal-900/40 shadow-teal-900/50 border border-teal-700/50 backdrop-blur-md' : 'bg-white shadow-slate-200/50 border border-slate-100'}`}>
              <Quote className={`absolute top-8 left-8 w-16 h-16 z-0 transition-colors ${theme === 'dark' ? 'text-teal-800/50' : 'text-teal-100'}`} />
              <FadeIn delay={100}>
                <p className={`relative z-10 text-xl md:text-2xl leading-relaxed font-medium italic text-center transition-colors ${theme === 'dark' ? 'text-teal-50' : 'text-slate-700'}`}>
                  "Todo se utiliza con el fin de evitar largos tratamientos y que puedas llegar rápida y efectivamente a la raíz emocional con la cual estás percibiendo las situaciones relacionadas con tu conflicto, y desde ahí transformarlas en un recurso de crecimiento y desarrollo."
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                  <div className={`w-12 h-1 rounded-full ${theme === 'dark' ? 'bg-teal-700' : 'bg-slate-200'}`}></div>
                  <span className={`font-bold text-lg transition-colors ${theme === 'dark' ? 'text-teal-200' : 'text-slate-900'}`}>Ps. Claudio Ballesteros</span>
                  <div className={`w-12 h-1 rounded-full ${theme === 'dark' ? 'bg-teal-700' : 'bg-slate-200'}`}></div>
                </div>
              </FadeIn>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={200}>
                <div className={`flex gap-4 items-start p-6 rounded-4xl border transition-colors duration-1000 ${theme === 'dark' ? 'bg-teal-900/30 border-teal-700/50 backdrop-blur-sm' : 'bg-teal-50/50 border-teal-100'}`}>
                  <div className="p-3 rounded-xl bg-teal-500/20 text-teal-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-2 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Público Objetivo</h3>
                    <p className={`transition-colors ${theme === 'dark' ? 'text-teal-100/70' : 'text-slate-600'}`}>Atención especializada para adultos y niños a partir de los 8 años. Abordaje empático y adaptado a cada etapa vital.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <div className={`flex gap-4 items-start p-6 rounded-4xl border transition-colors duration-1000 ${theme === 'dark' ? 'bg-blue-900/30 border-blue-700/50 backdrop-blur-sm' : 'bg-blue-50/50 border-blue-100'}`}>
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold mb-2 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Modalidad Flexible</h3>
                    <p className={`transition-colors ${theme === 'dark' ? 'text-blue-100/70' : 'text-slate-600'}`}>Consultas presenciales en un ambiente seguro en Rancagua, o a través de telemedicina (online) desde cualquier lugar.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- Specialties Section --- */}
        <section id="specialties" data-theme="light" className="py-24">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-teal-600 font-bold tracking-wider uppercase text-sm mb-2 block">Áreas de Práctica</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Especialidades Clínicas</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">Técnicas terapéuticas avanzadas orientadas a resultados profundos y duraderos.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Terapias Mente-Cuerpo', icon: BrainCircuit, color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'hover:border-indigo-300', desc: 'Conexión profunda entre procesos psicológicos y el bienestar físico.' },
                { title: 'Constelaciones Familiares', icon: Users, color: 'text-teal-600', bg: 'bg-teal-100', border: 'hover:border-teal-300', desc: 'Resolución de dinámicas ocultas en el sistema familiar que afectan el presente.' },
                { title: 'Terapia Transgeneracional', icon: Dna, color: 'text-blue-600', bg: 'bg-blue-100', border: 'hover:border-blue-300', desc: 'Sanación de patrones heredados y lealtades familiares inconscientes.' },
                { title: 'Decodificación Biológica', icon: Zap, color: 'text-rose-600', bg: 'bg-rose-100', border: 'hover:border-rose-300', desc: 'Bioneuroemoción para entender el origen emocional de los síntomas físicos.' },
              ].map((spec, idx) => (
                <FadeIn key={idx} delay={idx * 100}>
                  {/* Tarjetas 3D Magnéticas */}
                  <TiltCard className="h-full">
                    <div className={`group h-full bg-white/80 backdrop-blur-sm p-8 rounded-4xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-white/60 ${spec.border}`}>
                      <div className={`w-14 h-14 rounded-2xl ${spec.bg} ${spec.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                        <spec.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-bold text-xl text-slate-900 mb-3 leading-tight group-hover:text-teal-700 transition-colors">{spec.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{spec.desc}</p>
                    </div>
                  </TiltCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Conditions Marquee / Pills --- */}
        <section className="py-16 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-teal-900/40 via-transparent to-transparent"></div>
          <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
            <FadeIn>
              <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <ShieldCheck className="text-teal-400" />
                  Principales motivos de consulta
                </h3>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {[
                  'Estrés', 'Problemas de autoestima', 'Fobias', 'Insomnio', 
                  'Cefalea', 'Trastornos por abusos sexuales', 'Trastorno por menopausia', 
                  'Crisis en la relación de pareja', 'Crisis en relación padres e hijos', 'Adicciones'
                ].map((condition, idx) => (
                  <div key={idx} className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm text-sm font-medium">
                    {condition}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- Services & Pricing --- */}
        <section id="services" data-theme="light" className="py-24">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Servicios y Aranceles</h2>
                <p className="text-slate-600">Transparencia en los valores para que inicies tu proceso sin dudas.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                { name: 'Consulta Terapeuta complementario', price: '$35.000', icon: HeartHandshake },
                { name: 'Bioneuroemoción', price: '$35.000 - $50.000', icon: Zap },
                { name: 'Constelaciones Familiares', price: '$35.000', icon: Users },
                { name: 'Consulta online', price: '$35.000', icon: Video },
                { name: 'Hipnosis', price: '$35.000', icon: BrainCircuit },
                { name: 'Coaching en adicciones', price: '$35.000', icon: Activity },
                { name: 'Terapia de parejas', price: 'Desde $35.000', icon: Users },
              ].map((service, idx) => (
                <FadeIn key={idx} delay={idx * 50}>
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-slate-50 text-teal-600 group-hover:bg-teal-50 transition-colors">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-slate-800">{service.name}</span>
                    </div>
                    <div className="font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full text-sm">
                      {service.price}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={400}>
              <div className="mt-12 text-center">
                <a href="#contact" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors">
                  Consultar disponibilidad de horarios <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- Education Section --- */}
        <section id="education" data-theme="light" className="py-24 bg-slate-50/50 border-t border-slate-200/60 backdrop-blur-sm">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-teal-600 rounded-xl text-white shadow-lg shadow-teal-600/20">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Formación Académica</h2>
              </div>
            </FadeIn>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {[
                { title: 'Bioneuroemoción', inst: 'ENRIC CORBERA INSTITUTE ESPAÑA', desc: 'Avalado por la Facultad de Medicina, Universidad Nacional del Nordeste de Argentina.' },
                { title: 'Terapia Holística', inst: 'COLEGIO DE TERAPEUTAS HOLISTICOS', desc: 'Sexta Región, Chile.' },
                { title: 'Capacitación Continua', inst: 'PRO CAPACITA', desc: 'Rancagua, Chile.' },
              ].map((edu, idx) => (
                <FadeIn key={idx} delay={idx * 150}>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-teal-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-lg">{edu.inst}</span>
                        <span className="text-teal-600 font-semibold text-sm mb-2">{edu.title}</span>
                        <p className="text-slate-600 text-sm">{edu.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact & Location --- */}
        <section id="contact" data-theme="light" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
              {/* Info Side */}
              <div className="p-10 md:p-16 lg:w-5/12 bg-linear-to-br from-slate-900 to-teal-950 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Inicia tu sanación hoy.</h2>
                  <p className="text-teal-100/80 mb-12">Agenda tu hora presencial u online y da el primer paso hacia tu bienestar emocional.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-xl shrink-0">
                        <MapPin className="w-6 h-6 text-teal-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Consulta Presencial</p>
                        <p className="text-teal-100/70 text-sm mt-1">Valparaíso 371<br/>Rancagua, Región de O'Higgins</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 rounded-xl shrink-0">
                        <Video className="w-6 h-6 text-teal-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Consulta Online</p>
                        <p className="text-teal-100/70 text-sm mt-1">Atención vía telemedicina para todo Chile y el extranjero.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 relative z-10">
                  <a 
                    href="https://www.doctoralia.cl/claudio-ballesteros-pulgares/terapeuta-complementario/rancagua" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-teal-500 text-slate-900 font-bold hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/30"
                  >
                    Agendar en Doctoralia <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Map/Image Side */}
              <div className="lg:w-7/12 min-h-100 bg-slate-100 relative flex items-center justify-center">
                 {/* Aquí idealmente iría un iframe de Google Maps, usamos un placeholder elegante por restricciones */}
                 <div className="absolute inset-0 bg-slate-200">
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 space-y-4 p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-80">
                      <MapPin className="w-16 h-16 text-slate-300" />
                      <div className="border border-slate-300 rounded-md px-4 py-2 bg-white/50 backdrop-blur-sm">
                         
                      </div>
                      <p className="text-sm font-medium">Ubicación céntrica en Rancagua, de fácil acceso.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
          <h3 className="font-bold text-xl text-slate-900 mb-2">Ps. Claudio Ballesteros Pulgares</h3>
          <p className="text-slate-500 text-sm mb-8">Terapeuta Complementario • Rancagua, Chile</p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-teal-600 transition-colors">Doctoralia</a>
            <span>•</span>
            <a href="#home" className="hover:text-teal-600 transition-colors">Volver arriba</a>
          </div>
          
          <div className="mt-12 text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Ps. Claudio Ballesteros. Todos los derechos reservados.<br/>
            Los precios y servicios están sujetos a confirmación en plataforma de agendamiento.
          </div>
        </div>
      </footer>

      {/* Agent ID se lee desde Vite env (VITE_ELEVENLABS_AGENT_ID) para no hardcodear en el código fuente */}
      <ElevenLabsWidget />
    </div>
  );
}