'use client';

import { motion } from 'framer-motion';

export default function BackgroundWaves() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Ondas de fundo */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-100 to-transparent opacity-30"
        animate={{
          scaleX: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary-100 to-transparent opacity-20"
        animate={{
          scaleX: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Brilhos flutuantes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-primary-200 to-transparent rounded-full opacity-20"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-radial from-secondary-200 to-transparent rounded-full opacity-15"
        animate={{
          scale: [1.5, 1, 1.5],
          rotate: [360, 180, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Linhas de energia */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0, 1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-300 to-transparent"
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0, 1, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </div>
  );
}
