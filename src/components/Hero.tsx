'use client';

import { motion } from 'framer-motion';
import DynamicTitle from './DynamicTitle';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const statsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="mb-6"
          >
            <DynamicTitle />
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto"
          >
            Transformo <strong>ideias em estratégias criativas</strong> que{' '}
            <strong>conectam, engajam e inspiram</strong> seu público.
          </motion.p>
          
          <motion.a 
            href="#contato" 
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Quero Conhecer!
          </motion.a>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projetos Realizados", color: "text-primary-600" },
              { number: "3+", label: "Anos de Experiência", color: "text-secondary-600" },
              { number: "100%", label: "Foco em Resultados", color: "text-accent-600" },
              { number: "24/7", label: "Suporte Dedicado", color: "text-primary-600" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={statsVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={`text-3xl font-bold ${stat.color} mb-2`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    textShadow: "0 0 15px currentColor"
                  }}
                  transition={{ 
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-slate-600 font-medium"
                  whileHover={{ 
                    color: "#7c3aed",
                    scale: 1.05
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
