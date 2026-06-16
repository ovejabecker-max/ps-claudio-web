import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';
import { SERVICES } from '../../constants/data';

const Services = ({ setIsBookingModalOpen }) => {
  return (
    <section id="services" data-theme="light" className="py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Servicios y Aranceles</h2>
            <p className="text-slate-600">Transparencia en los valores para que inicies tu proceso sin dudas.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {SERVICES.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 50}>
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
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors"
            >
              Consultar disponibilidad de horarios <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
