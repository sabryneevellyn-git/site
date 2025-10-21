'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ParticleEffects() {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    duration: number;
  }>>([]);

  useEffect(() => {
    const createParticle = () => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        color: ['#ec4899', '#f472b6', '#fb7185', '#a855f7', '#c084fc'][Math.floor(Math.random() * 5)],
        duration: Math.random() * 3 + 2
      };
      
      setParticles(prev => [...prev, newParticle]);
      
      // Remover partícula após a duração
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, newParticle.duration * 1000);
    };

    // Criar partículas periodicamente
    const interval = setInterval(createParticle, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            y: 0
          }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [-20, -50, -80]
          }}
          transition={{
            duration: particle.duration,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
