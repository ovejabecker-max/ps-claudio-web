import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/data';

const Navbar = ({ isScrolled, theme, isMobileMenuOpen, setIsMobileMenuOpen, setIsBookingModalOpen }) => {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? (theme === 'dark' ? 'bg-teal-950/80 backdrop-blur-md shadow-sm border-b border-white/10 py-3' : 'bg-white/70 backdrop-blur-md shadow-sm py-3')
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-4 group">
          <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
            <img src="/logo_claudio.png" alt="Logo Ps. Claudio Ballesteros" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-none tracking-tight transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Ps. Claudio Ballesteros</span>
            <span className={`text-xs font-medium tracking-wider uppercase transition-colors duration-500 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>Terapeuta Complementario</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-slate-300 hover:text-teal-400' : 'text-slate-600 hover:text-teal-600'}`}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-lg hover:shadow-teal-500/30 ${theme === 'dark' ? 'bg-teal-500 text-slate-900 hover:bg-teal-400' : 'bg-slate-900 text-white hover:bg-teal-600'}`}
          >
            Agendar Hora
          </button>
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
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-teal-600 py-2 border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsBookingModalOpen(true);
            }}
            className="mt-2 text-center px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold shadow-md"
          >
            Agendar Hora
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
