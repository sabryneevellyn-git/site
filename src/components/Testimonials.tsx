'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      text: "A Sabryne transformou completamente minha estratégia digital. Em 3 meses aumentei minhas vendas em 200%!",
      author: "Maria Silva"
    },
    {
      text: "As estratégias da Sabryne são únicas e realmente funcionam. Minha marca nunca foi tão forte!",
      author: "João Santos"
    },
    {
      text: "Profissional excepcional! A Sabryne entende de verdade o que é marketing digital.",
      author: "Ana Costa"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-slate-800 text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          O que nossos clientes dizem
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border-l-4 border-primary-600"
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.p 
                className="text-slate-600 italic mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </motion.p>
              <motion.div 
                className="font-semibold text-slate-800"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                {testimonial.author}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
