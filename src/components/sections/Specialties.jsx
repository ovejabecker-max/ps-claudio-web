import React from 'react';
import FadeIn from '../FadeIn';
import TiltCard from '../TiltCard';
import { SPECIALTIES } from '../../constants/data';

const Specialties = () => {
  return (
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
          {SPECIALTIES.map((spec, idx) => (
            <FadeIn key={spec.id} delay={idx * 100}>
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
  );
};

export default Specialties;
