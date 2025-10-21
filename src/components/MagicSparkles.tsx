'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MagicSparkles() {
  const [sparkles, setSparkles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const createSparkle = () => {
      const newSparkle = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 2
      };
      
      setSparkles(prev => [...prev, newSparkle]);
      
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 3000);
    };

    const interval = setInterval(createSparkle, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {sparkles.map(sparkle => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: sparkle.x,
            top: sparkle.y
          }}
          initial={{ 
            opacity: 0,
            scale: 0,
            rotate: 0
          }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 1.5,
            delay: sparkle.delay,
            ease: "linear"
          }}
        >
          <div className="w-4 h-4 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full shadow-lg">
            <div className="w-full h-full bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
