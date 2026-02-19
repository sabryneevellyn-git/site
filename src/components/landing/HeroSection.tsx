'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-cream-100"
    >
      {/* Textura sutil */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23826E57' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(130,110,87,0.06),transparent)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary-600 font-semibold tracking-widest uppercase text-xs mb-4">
              Marketing Digital
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-6 leading-[1.1] tracking-tight">
              Estratégias que{' '}
              <span className="text-primary-600">conectam</span>
              <br />
              e convertem
            </h1>
            <p className="text-lg text-charcoal-500 max-w-lg mb-8 leading-relaxed">
              Ajudamos você a construir uma marca forte e vender mais pelas redes. 
              Conteúdo, gestão e campanhas que geram resultado.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5521983976690"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Falar no WhatsApp
              </a>
              <a
                href="#depoimentos"
                className="inline-flex items-center px-6 py-3.5 border-2 border-charcoal-200 text-charcoal-700 font-semibold rounded-xl hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50/50 transition-all duration-300"
              >
                Ver depoimentos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {!imgError ? (
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-charcoal-900/10 ring-1 ring-charcoal-900/5">
                  <Image
                    src="/perfil.jpg"
                    alt="Sabryne Evellyn - EVY GROWTH"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                    priority
                    onError={() => setImgError(true)}
                  />
                </div>
              ) : (
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl font-bold text-primary-600/50">E</span>
                </div>
              )}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 bg-primary-500/90 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-2xl sm:text-3xl font-bold text-white">EVY</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-charcoal-400 hover:text-primary-600 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
