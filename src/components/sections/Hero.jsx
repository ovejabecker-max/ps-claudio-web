import React from 'react';
import { CalendarDays, Video, MapPin, Star } from 'lucide-react';
import FadeIn from '../FadeIn';
import InteractiveReviews from '../InteractiveReviews';
import SplitText from '../SplitText';

const Hero = ({ theme, setIsBookingModalOpen }) => {
  return (
    <section id="home" data-theme="light" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <div className="flex-1 text-center lg:text-left lg:-mt-[100px]">
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
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-linear-to-r from-teal-600 to-blue-600 text-white font-bold shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <CalendarDays className="w-5 h-5" />
              Reserva tu sesión
            </button>
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
              <span>Presencial en Astorga 219, Rancagua</span>
            </div>
          </div>
        </FadeIn>
      </div>
      
      <div className="flex-1 w-full max-w-lg lg:max-w-full relative mt-0 lg:-mt-[380px] perspective-1000">
        <FadeIn delay={50}>
          <div className="flex justify-center mb-[-30px] mt-[200px] relative z-30">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100/50 border border-teal-200/50 text-teal-700 text-sm font-semibold">
              <Star className="w-4 h-4 fill-teal-600" />
              <span>Especialista altamente valorado en Doctoralia</span>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={200} direction="left">
          <InteractiveReviews />
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
