'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-100/90 backdrop-blur-md border-b border-cream-200/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a
            href="#home"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            {!logoError ? (
              <Image
                src="/logo.png"
                alt="EVY GROWTH"
                width={140}
                height={40}
                className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="flex items-baseline gap-1 text-xl md:text-2xl font-bold tracking-tight">
                <span className="text-charcoal-800">EVY</span>
                <span className="text-primary-600">GROWTH</span>
              </span>
            )}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors"
            >
              Serviços
            </a>
            <a
              href="#depoimentos"
              className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-charcoal-600 hover:text-primary-600 font-medium transition-colors"
            >
              Contato
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5521983976690"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-charcoal-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-cream-200">
                <a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-3 text-charcoal-600 hover:text-primary-600 font-medium">
                  Início
                </a>
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block py-3 text-charcoal-600 hover:text-primary-600 font-medium">
                  Sobre
                </a>
                <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="block py-3 text-charcoal-600 hover:text-primary-600 font-medium">
                  Serviços
                </a>
                <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="block py-3 text-charcoal-600 hover:text-primary-600 font-medium">
                  Depoimentos
                </a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block py-3 text-charcoal-600 hover:text-primary-600 font-medium">
                  Contato
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5521983976690" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="block py-3 text-primary-600 font-medium">
                  WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
