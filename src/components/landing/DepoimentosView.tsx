'use client';

import { useState } from 'react';
import DepoimentosCarousel from './DepoimentosCarousel';
import type { DepoimentoItem } from '@/lib/depoimentos';
import DepoimentoImage from './DepoimentoImage';

interface DepoimentosViewProps {
  images: DepoimentoItem[];
}

export default function DepoimentosView({ images }: DepoimentosViewProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');

  return (
    <>
      {/* Toggle - apenas desktop */}
      <div className="hidden md:flex justify-center gap-2 mb-10">
        <button
          onClick={() => setViewMode('grid')}
          className={`px-5 py-2.5 rounded-full font-medium transition-all ${
            viewMode === 'grid'
              ? 'bg-primary-600 text-white'
              : 'bg-cream-200 text-charcoal-500 hover:bg-cream-300'
          }`}
        >
          Grid
        </button>
        <button
          onClick={() => setViewMode('carousel')}
          className={`px-5 py-2.5 rounded-full font-medium transition-all ${
            viewMode === 'carousel'
              ? 'bg-primary-600 text-white'
              : 'bg-cream-200 text-charcoal-500 hover:bg-cream-300'
          }`}
        >
          Carrossel
        </button>
      </div>

      {/* Grid - Desktop quando viewMode é grid */}
      <div
        className={`${
          viewMode === 'grid' ? 'hidden md:grid' : 'hidden'
        } grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8`}
      >
        {images.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <DepoimentoImage src={item.url} alt={`Depoimento - ${item.id}`} />
          </div>
        ))}
      </div>

      {/* Carousel - Mobile sempre, Desktop quando viewMode é carousel */}
      <div className={viewMode === 'carousel' ? 'block' : 'md:hidden'}>
        <DepoimentosCarousel images={images} />
      </div>
    </>
  );
}
