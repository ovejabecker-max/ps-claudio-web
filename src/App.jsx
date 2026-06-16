import React, { useState, useEffect } from 'react';
import ElevenLabsWidget from './components/ElevenLabsWidget';
import BookingModal from './components/BookingModal';
import AbstractBackground from './components/AbstractBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Specialties from './components/sections/Specialties';
import Conditions from './components/sections/Conditions';
import Services from './components/sections/Services';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Manejo del Navbar on scroll y Scrollytelling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer para Scrollytelling
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

  return (
    <div className={`min-h-screen font-sans transition-colors duration-1000 md:cursor-none ${theme === 'dark' ? 'text-slate-100 selection:bg-teal-500 selection:text-white' : 'text-slate-800 selection:bg-teal-200 selection:text-teal-900'}`}>
      <CustomCursor />
      <AbstractBackground theme={theme} />

      <Navbar 
        isScrolled={isScrolled} 
        theme={theme} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        setIsBookingModalOpen={setIsBookingModalOpen} 
      />

      <main>
        <Hero theme={theme} setIsBookingModalOpen={setIsBookingModalOpen} />
        <About theme={theme} />
        <Specialties />
        <Conditions />
        <Services setIsBookingModalOpen={setIsBookingModalOpen} />
        <Education />
        <Contact setIsBookingModalOpen={setIsBookingModalOpen} />
      </main>

      <Footer />

      {/* Agent ID se lee desde Vite env (VITE_ELEVENLABS_AGENT_ID) para no hardcodear en el código fuente */}
      <ElevenLabsWidget />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
