'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LogoProps {
  variant?: 'header' | 'footer' | 'hero';
  className?: string;
}

export default function Logo({ variant = 'header', className = '' }: LogoProps) {
  const [error, setError] = useState(false);

  const sizeClasses = {
    header: 'text-2xl md:text-3xl',
    footer: 'text-2xl md:text-3xl',
    hero: 'text-4xl md:text-5xl lg:text-6xl',
  };

  if (error) {
    return (
      <span className={`flex items-baseline gap-1 font-bold tracking-tight ${sizeClasses[variant]} ${className}`}>
        <span className={variant === 'footer' ? 'text-cream-100' : 'text-charcoal-800'}>EVY</span>
        <span className={variant === 'footer' ? 'text-primary-400' : 'text-primary-600'}>GROWTH</span>
      </span>
    );
  }

  const imgSizes = {
    header: { w: 200, h: 56, cls: 'h-12 md:h-16 w-auto' },
    footer: { w: 180, h: 50, cls: 'brightness-0 invert opacity-90 h-12 md:h-14 w-auto' },
    hero: { w: 280, h: 80, cls: 'h-20 md:h-24 lg:h-28 w-auto' },
  };
  const { w, h, cls } = imgSizes[variant];

  return (
    <Image
      src="/logo.jpg"
      alt="EVY GROWTH"
      width={w}
      height={h}
      className={`object-contain ${cls} ${className}`}
      onError={() => setError(true)}
    />
  );
}
