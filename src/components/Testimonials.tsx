'use client';

import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      text: "A EVY GROWTH transformou completamente minha estratégia digital. Em 3 meses aumentei minhas vendas em 200%!",
      author: "Maria Silva"
    },
    {
      text: "As estratégias da EVY GROWTH são únicas e realmente funcionam. Minha marca nunca foi tão forte!",
      author: "João Santos"
    },
    {
      text: "Profissionais excepcionais! A EVY GROWTH entende de verdade o que é marketing digital.",
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
    <section className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-charcoal-600 text-center mb-16"
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
              className="bg-gradient-to-br from-primary-50 to-cream-100 p-8 rounded-xl border-l-4 border-primary-600 border border-cream-200"
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {/* Estrelas */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 + i * 0.05 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              <motion.p 
                className="text-charcoal-500 italic mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </motion.p>
              <motion.div 
                className="font-semibold text-charcoal-600"
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
