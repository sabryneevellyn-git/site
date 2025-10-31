'use client';

import { motion } from 'framer-motion';

export default function Guarantee() {
  const guarantees = [
    {
      icon: "🛡️",
      title: "Garantia de Satisfação",
      description: "Através da Hotmart, você tem garantia de satisfação. Se não ficar satisfeito, pode solicitar reembolso."
    },
    {
      icon: "📱",
      title: "Suporte via WhatsApp",
      description: "Dúvidas sobre o conteúdo? Estamos disponíveis via WhatsApp para te ajudar."
    },
    {
      icon: "📚",
      title: "Conteúdo Atualizado",
      description: "O ebook contém estratégias atuais e práticas que funcionam no mercado digital de hoje."
    },
    {
      icon: "🎯",
      title: "Aplicação Imediata",
      description: "Conceitos práticos que você pode aplicar no seu negócio desde o primeiro capítulo."
    }
  ];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-accent-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Sua Tranquilidade é Nossa Prioridade
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprometimento total com sua satisfação e sucesso
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {guarantees.map((guarantee, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              whileHover={{ 
                y: -5,
                scale: 1.02
              }}
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {guarantee.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {guarantee.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats de confiança */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-slate-600">Garantia de Satisfação</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
            >
              <div className="text-3xl font-bold text-secondary-600 mb-2">24h</div>
              <div className="text-slate-600">Suporte Disponível</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
            >
              <div className="text-3xl font-bold text-accent-600 mb-2">1000+</div>
              <div className="text-slate-600">Leitores Satisfeitos</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
