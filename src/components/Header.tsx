'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg fixed top-0 w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Sabryne Evellyn
            {/* Efeito de brilho */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{
                opacity: [0, 0.6, 0],
                x: [-50, 50]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Sobre Mim
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Serviços
            </a>
            <a href="#produtos" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Produtos
            </a>
            <a href="#contato" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                Home
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                Sobre Mim
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                Serviços
              </a>
              <a href="#produtos" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                Produtos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-primary-600 font-medium py-2">
                Contato
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
