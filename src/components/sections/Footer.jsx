import React from 'react';
import { Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200 text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24 flex items-center justify-center transition-transform hover:scale-110 group">
            {/* Resplandor circular con los colores del logo */}
            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-teal-400 via-blue-500 to-indigo-600 blur-xl opacity-85 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="/logo_claudio.png" alt="Logo Ps. Claudio Ballesteros" className="relative z-10 max-w-full max-h-full object-contain" />
          </div>
        </div>
        <h3 className="font-bold text-xl text-slate-900 mb-2">Ps. Claudio Ballesteros Pulgares</h3>
        <p className="text-slate-500 text-sm mb-8">Terapeuta Complementario • Rancagua, Chile</p>
        
        {/* Redes Sociales Innovadoras */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            { icon: Instagram, href: 'https://www.instagram.com/claudioballesterosterapeuta/', label: 'Instagram', color: 'hover:text-pink-500 hover:shadow-pink-500/20' },
            { icon: Facebook, href: 'https://www.facebook.com/ClaudioBallesterosterapeuta/', label: 'Facebook', color: 'hover:text-blue-600 hover:shadow-blue-600/20' },
            { icon: Youtube, href: 'https://youtube.com/@claudioballesterosterapeut6741?si=w9HAFh31PvwivEOZ', label: 'YouTube', color: 'hover:text-red-600 hover:shadow-red-600/20' },
            { icon: Linkedin, href: 'https://www.linkedin.com/pub/dir/Claudio/Ballesteros', label: 'LinkedIn', color: 'hover:text-blue-700 hover:shadow-blue-700/20' }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`group relative p-3 rounded-2xl bg-white border border-slate-200 text-slate-400 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${social.color} hover:border-transparent`}
            >
              {/* Background Glow en Hover */}
              <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500"></div>
              
              <social.icon className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:scale-110" />
              
              {/* Indicador de Punto Decorativo */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
            </a>
          ))}
        </div>
        
        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
          <a href="https://www.doctoralia.cl/claudio-ballesteros-pulgares/terapeuta-complementario/rancagua#profile-reviews" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">Doctoralia</a>
          <span>•</span>
          <a href="#home" className="hover:text-teal-600 transition-colors">Volver arriba</a>
        </div>
        
        <div className="mt-12 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Ps. Claudio Ballesteros. Todos los derechos reservados.<br/>
          Los precios y servicios están sujetos a confirmación en plataforma de agendamiento.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
