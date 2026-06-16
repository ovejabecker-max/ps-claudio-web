import React from 'react';
import { ShieldCheck } from 'lucide-react';
import FadeIn from '../FadeIn';
import { CONDITIONS } from '../../constants/data';

const Conditions = () => {
  return (
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
            {CONDITIONS.map((condition) => (
              <div key={condition.id} className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm text-sm font-medium">
                {condition.name}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Conditions;
