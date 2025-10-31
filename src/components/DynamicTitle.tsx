'use client';

import { motion } from 'framer-motion';

export default function DynamicTitle() {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center flex-wrap">
        <span className="text-5xl md:text-6xl font-bold text-slate-800">Estratégias </span>
        <div className="relative inline-block">
          {/* Efeito especial para "Criativas" */}
          <motion.span
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Criativas
            {/* Partículas criativas */}
            <motion.div
              className="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full"
              animate={{
                y: [0, 8, 0],
                rotate: [0, -180, -360],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{
                x: [0, -15, 0],
                rotate: [0, 90, 180],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.span>
        </div>
      </div>
      <div className="text-5xl md:text-6xl font-bold text-slate-800 mt-4">
        em Marketing Digital
      </div>
    </div>
  );
}