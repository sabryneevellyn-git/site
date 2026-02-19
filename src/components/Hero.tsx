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
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-cream-100 via-cream-50 to-primary-50">
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
            className="text-xl md:text-2xl text-charcoal-500 mb-8 max-w-4xl mx-auto"
          >
            Transformamos <strong className="text-charcoal-600">ideias em estratégias criativas</strong> que{' '}
            <strong className="text-charcoal-600">conectam, engajam e inspiram</strong> seu público.
          </motion.p>
          
          <motion.a 
            href="#contato" 
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-700 hover:to-primary-600 transition-all shadow-lg hover:shadow-xl"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(130, 110, 87, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Quero Conhecer!
          </motion.a>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projetos Realizados", color: "text-primary-600" },
              { number: "3+", label: "Anos de Experiência", color: "text-primary-500" },
              { number: "100%", label: "Foco em Resultados", color: "text-primary-600" },
              { number: "24/7", label: "Suporte Dedicado", color: "text-primary-500" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={statsVariants}
                className="bg-cream-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-cream-200"
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
                  className="text-charcoal-500 font-medium"
                  whileHover={{ 
                    color: "#826E57",
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
