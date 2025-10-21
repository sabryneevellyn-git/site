'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingElements() {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    type: 'heart' | 'star' | 'sparkle';
    size: number;
  }>>([]);

  useEffect(() => {
    const createElement = () => {
      const types: ('heart' | 'star' | 'sparkle')[] = ['heart', 'star', 'sparkle'];
      const newElement = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        type: types[Math.floor(Math.random() * types.length)],
        size: Math.random() * 20 + 10
      };
      
      setElements(prev => [...prev, newElement]);
      
      // Remover elemento após animação
      setTimeout(() => {
        setElements(prev => prev.filter(e => e.id !== newElement.id));
      }, 8000);
    };

    const interval = setInterval(createElement, 2000);

    return () => clearInterval(interval);
  }, []);

  const getElementContent = (type: string) => {
    switch (type) {
      case 'heart':
        return '💖';
      case 'star':
        return '✨';
      case 'sparkle':
        return '💫';
      default:
        return '✨';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {elements.map(element => (
        <motion.div
          key={element.id}
          className="absolute text-2xl"
          style={{
            left: element.x,
            top: element.y,
            fontSize: element.size
          }}
          initial={{ 
            opacity: 0,
            y: 0,
            rotate: 0
          }}
          animate={{ 
            opacity: [0, 1, 0],
            y: -window.innerHeight - 100,
            rotate: 360,
            x: [0, Math.random() * 100 - 50, 0]
          }}
          transition={{
            duration: 8,
            ease: "linear"
          }}
        >
          {getElementContent(element.type)}
        </motion.div>
      ))}
    </div>
  );
}
