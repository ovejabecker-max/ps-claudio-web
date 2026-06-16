import React, { useState, useRef, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: "Marcó",
    date: "5 de nov. 2022",
    text: "Las instalaciones adecuadas, destacó la puntualidad y la comunicación fluida. El terapeuta resolvió el motivo de mi consulta satisfactoriamente.",
    rating: 5
  },
  {
    name: "Denis Palma",
    date: "16 de ago. 2022",
    text: "Es una muy buena terapia. Claudio es un profesional muy competente, lo que me generó mucha confianza para continuar con el tratamiento.",
    rating: 5
  },
  {
    name: "Edson Vidal",
    date: "12 de ago. 2022",
    text: "Destaca su profesionalismo y la excelente disposición para atender. Se nota la amplia experiencia de años del terapeuta.",
    rating: 5
  },
  {
    name: "M.S.",
    date: "7 de ago. 2022",
    text: "Excelente orientador que brinda mucha confianza. La terapia de bioneuroemoción me entregó herramientas concretas para superar el estrés en una sola sesión.",
    rating: 5
  },
  {
    name: "Sergio Molina",
    date: "3 de ago. 2022",
    text: "Excelente experiencia. Claudio identifica el problema real y entrega soluciones efectivas. Lo recomiendo al 100%.",
    rating: 5
  },
  {
    name: "J.A.A.A.",
    date: "3 de ago. 2022",
    text: "Siento mayor tranquilidad y descanso emocional. Mi proceso ha sido como un caminar más firme y una vida más intensa con alegría.",
    rating: 5
  }
];

const InteractiveReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const nextReview = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
      className="relative w-full h-[450px] flex items-start justify-center pt-12 perspective-1000 overflow-visible"
    >
      {/* Background Glows */}
      <div 
        className="absolute w-72 h-72 bg-teal-500/20 rounded-full blur-[100px] transition-transform duration-500"
        style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
      ></div>

      {/* Main Review Card */}
      <div 
        className="relative z-20 w-full max-w-[340px] transition-all duration-700 ease-out"
        style={{ 
          transform: `
            rotateY(${mousePos.x * 15}deg) 
            rotateX(${mousePos.y * -15}deg) 
            translateZ(50px)
          ` 
        }}
      >
        <div className="bg-white/80 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-teal-500 to-blue-500"></div>
          
          <Quote className="absolute top-6 right-6 w-12 h-12 text-teal-500/10" />
          
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-teal-500/20">
              {reviews[activeIndex].name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 leading-none">{reviews[activeIndex].name}</h4>
              <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">{reviews[activeIndex].date}</p>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <div className="flex gap-0.5">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <div className="flex items-center gap-1 mt-1">
                <CheckCircle2 className="w-3 h-3 text-teal-500" />
                <span className="text-[9px] font-bold text-teal-600 uppercase">Verificado</span>
              </div>
            </div>
          </div>

          <div className="relative h-24 overflow-hidden mb-6">
            <p className="text-slate-600 text-sm leading-relaxed italic">
              "{reviews[activeIndex].text}"
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button 
                onClick={(e) => { e.stopPropagation(); prevReview(); }}
                className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextReview(); }}
                className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="text-[10px] font-bold text-slate-300">
              {activeIndex + 1} / {reviews.length}
            </div>
          </div>
        </div>

        {/* Doctoralia Link Button */}
        <a 
          href="https://www.doctoralia.cl/claudio-ballesteros-pulgares/terapeuta-complementario/rancagua#profile-reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900 rounded-full shadow-xl flex items-center gap-2 border border-slate-800 transition-all hover:scale-105 hover:bg-slate-800 group/btn"
        >
          <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
          <span className="text-white text-[10px] font-bold tracking-tight">Ir a Doctoralia</span>
        </a>
      </div>
    </div>
  );
};

export default InteractiveReviews;
