'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DepoimentoItem } from '@/lib/depoimentos';
import DepoimentoImage from './DepoimentoImage';

interface DepoimentosCarouselProps {
  images: DepoimentoItem[];
}

export default function DepoimentosCarousel({ images }: DepoimentosCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const current = images[currentIndex];

  return (
    <div className="relative">
      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-cream-200 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <DepoimentoImage
              src={current.url}
              alt={`Depoimento ${currentIndex + 1}`}
              sizes="100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={goToPrev}
          className="p-3 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
          aria-label="Anterior"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-sm text-charcoal-500 font-medium">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={goToNext}
          className="p-3 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
          aria-label="Próximo"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={images[index].id}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary-600 w-6' : 'bg-primary-200'
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
