'use client';

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Consultoria Individual",
      description: "Para quem precisa de um acompanhamento próximo e dedicado ao seu negócio digital.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "02", 
      title: "Estratégias de Conteúdo",
      description: "Alcance milhares de pessoas usando estratégias 100% criadas para o seu nicho.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Gestão de Redes Sociais", 
      description: "O JEITO INTELIGENTE de você ter o seu negócio vendendo pelas redes sociais todo santo dia.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Campanhas de Lançamento",
      description: "O único método que Zera seu estoque, atrai novos clientes e infla o seu fluxo de caixa em 7 dias ou menos.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Branding Digital",
      description: "A Faculdade que tem tudo o que você precisa para Viver do seu negócio digital.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      number: "06",
      title: "Grupo de Elite",
      description: "Um grupo seleto e exclusivo de empresários que já vivem do seu negócio digital.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-cream-100 to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-charcoal-600 mb-4">
            Sua Jornada no Marketing Digital
          </h2>
          <p className="text-xl text-charcoal-500 max-w-3xl mx-auto">
            Mais importante que saber onde estamos é para onde queremos ir.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-cream-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-cream-200"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div 
                  className="text-3xl font-bold text-primary-600"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.number}
                </motion.div>
                <motion.div
                  className="text-primary-600 p-2 bg-primary-50 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.icon}
                </motion.div>
              </div>
              
              <h3 className="text-xl font-semibold text-charcoal-600 mb-4">
                {service.title}
              </h3>
              
              <p className="text-charcoal-500 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <motion.a 
                href="#contato" 
                className="inline-block bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-700 hover:to-primary-600 transition-all shadow-md hover:shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(130, 110, 87, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}