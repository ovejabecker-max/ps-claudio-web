import React from 'react';
import { MapPin, Phone, ChevronRight } from 'lucide-react';

const Contact = ({ setIsBookingModalOpen }) => {
  return (
    <section id="contact" data-theme="light" className="min-h-screen flex items-center py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row lg:max-h-[90vh]">
          {/* Info Side */}
          <div className="p-8 md:p-12 lg:w-5/12 bg-linear-to-br from-slate-900 to-teal-950 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Inicia tu sanación hoy.</h2>
              <p className="text-teal-100/80 text-sm mb-8">Agenda tu hora presencial u online.</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">Consulta Presencial</p>
                    <p className="text-teal-100/70 text-xs mt-0.5">Astorga 219, Of. 6<br/>Rancagua</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/10 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">Teléfono</p>
                    <p className="text-teal-100/70 text-xs mt-0.5">+56 9 8535 2846</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-500 text-slate-900 font-bold hover:bg-teal-400 transition-colors shadow-lg text-sm"
              >
                Agendar Sesión <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-7/12 h-[350px] lg:h-auto bg-slate-100 relative">
             <iframe 
               title="Ubicación Ps. Claudio Ballesteros"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.245846614488!2d-70.7425!3d-34.1685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663433e3870349b%3A0x6734c56730a08f5d!2sAstorga%20219%2C%20Rancagua%2C%20O'Higgins!5e0!3m2!1ses-419!2scl!4v1717270000000!5m2!1ses-419!2scl"
               className="absolute inset-0 w-full h-full border-0"
               allowFullScreen="" 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
