'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SobreSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="sobre" className="py-20 sm:py-28 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4">
              Sobre mim
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
              Sabryne Evellyn
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-4">
              +3 anos transformando negócios no digital. Especialista em estratégias que 
              <strong className="text-charcoal-800"> conectam, engajam e vendem</strong>.
            </p>
            <p className="text-charcoal-500 leading-relaxed mb-6">
              Crio métodos próprios de conteúdo e conversão. Minha missão: ajudar você a 
              construir uma marca forte e um negócio que vende todo dia.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300"
            >
              Vamos conversar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            {!imgError ? (
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-charcoal-900/5">
                <Image
                  src="/sobre.jpg"
                  alt="Sabryne Evellyn - EVY GROWTH"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 288px, 320px"
                  onError={() => setImgError(true)}
                />
              </div>
            ) : (
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <span className="text-7xl font-bold text-primary-400">E</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
