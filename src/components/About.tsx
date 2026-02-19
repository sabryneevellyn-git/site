'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="sobre" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl font-bold text-charcoal-600 mb-6"
            >
              Quem é a EVY GROWTH?
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-4 text-lg text-charcoal-500 leading-relaxed"
            >
              <p>
                Especialistas em <strong className="text-charcoal-600">Marketing Digital Estratégico</strong> com mais de 3 anos de experiência, 
                a EVY GROWTH dedica-se a transformar ideias em estratégias criativas que realmente funcionam.
              </p>
              
              <p>
                Nossa missão é ajudar empresários e empresárias a construir marcas fortes e 
                negócios lucrativos através de estratégias digitais inovadoras e processos 
                exclusivos desenvolvidos ao longo da nossa trajetória.
              </p>
              
              <p>
                <strong className="text-charcoal-600">Criadores de métodos únicos</strong> de engajamento e conversão, 
                estamos prontos para te ajudar a destravar todo o potencial do seu negócio digital.
              </p>
            </motion.div>
            
            <motion.a 
              href="#contato" 
              className="inline-block bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-700 hover:to-primary-600 transition-all shadow-lg hover:shadow-xl mt-6"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(130, 110, 87, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Quero Conhecer!
            </motion.a>
          </motion.div>
          
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div 
              className="relative w-96 h-96 mx-auto rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/foto1.jpg" 
                alt="EVY GROWTH - Assessoria em Marketing Digital Estratégico"
                width={384}
                height={384}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 to-transparent"></div>
            </motion.div>
            
            <motion.div 
              className="relative w-96 h-96 mx-auto rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/foto2.jpg" 
                alt="EVY GROWTH - Profissional de Marketing Digital"
                width={384}
                height={384}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/30 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
