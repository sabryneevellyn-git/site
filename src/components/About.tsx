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
    <section id="sobre" className="py-20 bg-white">
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
              className="text-4xl font-bold text-slate-800 mb-6"
            >
              Quem é Sabryne Evellyn?
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-4 text-lg text-slate-600 leading-relaxed"
            >
              <p>
                Especialista em <strong className="text-slate-800">Marketing Digital</strong> com mais de 3 anos de experiência, 
                Sabryne dedica-se a transformar ideias em estratégias criativas que realmente funcionam.
              </p>
              
              <p>
                Sua missão é ajudar empresários e empresárias a construir marcas fortes e 
                negócios lucrativos através de estratégias digitais inovadoras e processos 
                exclusivos desenvolvidos ao longo de sua carreira.
              </p>
              
              <p>
                <strong className="text-slate-800">Criadora de métodos únicos</strong> de engajamento e conversão, 
                Sabryne está pronta para te ajudar a destravar todo o potencial do seu negócio digital.
              </p>
            </motion.div>
            
            <motion.a 
              href="#contato" 
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors mt-6"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)"
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
                alt="Sabryne Evellyn - Especialista em Marketing Digital"
                width={384}
                height={384}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"></div>
            </motion.div>
            
            <motion.div 
              className="relative w-96 h-96 mx-auto rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/foto2.jpg" 
                alt="Sabryne Evellyn - Profissional de Marketing Digital"
                width={384}
                height={384}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-600/20 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
