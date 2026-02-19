'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const [logoError, setLogoError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-cream-100/95 backdrop-blur-md shadow-lg' 
          : 'bg-cream-100 shadow-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.a 
            href="#home"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {!logoError ? (
              <img 
                src="/logo.png" 
                alt="EVY GROWTH" 
                className="h-8 w-auto md:h-10 object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="flex items-baseline gap-1 text-xl md:text-2xl font-bold">
                <span className="text-charcoal-600">EVY</span>
                <span className="text-primary-600">GROWTH</span>
              </span>
            )}
          </motion.a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#sobre" className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors relative group">
              Sobre Mim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#servicos" className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors relative group">
              Serviços
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#produtos" className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors relative group">
              Produtos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contato" className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors relative group">
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2">
              <a href="#home" onClick={closeMenu} className="text-charcoal-600 hover:text-primary-600 font-medium py-2 transition-colors">
                Home
              </a>
              <a href="#sobre" onClick={closeMenu} className="text-charcoal-600 hover:text-primary-600 font-medium py-2 transition-colors">
                Sobre Mim
              </a>
              <a href="#servicos" onClick={closeMenu} className="text-charcoal-600 hover:text-primary-600 font-medium py-2 transition-colors">
                Serviços
              </a>
              <a href="#produtos" onClick={closeMenu} className="text-charcoal-600 hover:text-primary-600 font-medium py-2 transition-colors">
                Produtos
              </a>
              <a href="#contato" onClick={closeMenu} className="text-charcoal-600 hover:text-primary-600 font-medium py-2 transition-colors">
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
