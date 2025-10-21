'use client';

import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Consultoria Individual",
      description: "Para quem precisa de um acompanhamento próximo e dedicado ao seu negócio digital."
    },
    {
      number: "02", 
      title: "Estratégias de Conteúdo",
      description: "Alcance milhares de pessoas usando estratégias 100% criadas para o seu nicho."
    },
    {
      number: "03",
      title: "Gestão de Redes Sociais", 
      description: "O JEITO INTELIGENTE de você ter o seu negócio vendendo pelas redes sociais todo santo dia."
    },
    {
      number: "04",
      title: "Campanhas de Lançamento",
      description: "O único método que Zera seu estoque, atrai novos clientes e infla o seu fluxo de caixa em 7 dias ou menos."
    },
    {
      number: "05",
      title: "Branding Digital",
      description: "A Faculdade que tem tudo o que você precisa para Viver do seu negócio digital."
    },
    {
      number: "06",
      title: "Grupo de Elite",
      description: "Um grupo seleto e exclusivo de empresários que já vivem do seu negócio digital."
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
    <section id="servicos" className="py-20 bg-gradient-to-br from-secondary-50 to-accent-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Sua Jornada no Marketing Digital
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
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
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="text-3xl font-bold text-primary-600 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {service.number}
              </motion.div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <motion.a 
                href="#contato" 
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(236, 72, 153, 0.3)"
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