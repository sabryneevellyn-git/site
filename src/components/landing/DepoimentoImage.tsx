'use client';

import Image from 'next/image';

interface DepoimentoImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
}

export default function DepoimentoImage({
  src,
  alt,
  fill = true,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
}: DepoimentoImageProps) {
  const isExternal = src.startsWith('http');

  if (isExternal) {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className="object-cover object-top"
        sizes={sizes}
        priority={priority}
        unoptimized
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className="object-cover object-top"
      sizes={sizes}
      priority={priority}
    />
  );
}
