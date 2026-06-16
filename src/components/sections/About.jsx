import React from 'react';
import { Quote, Users, Activity } from 'lucide-react';
import FadeIn from '../FadeIn';

const About = ({ theme }) => {
  return (
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
  );
};

export default About;
