'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Products() {
  const products = [
    {
      title: "Sah te contou - Ebook",
      subtitle: "Truques de Intencionalidade no Marketing",
      description: "Descubra o Segredo do Marketing que Realmente Conecta e Vende. Um guia prático que mergulha nos truques de marketing intencional, usando a trajetória de Bianca Andrade (Boca Rosa) como estudo de caso.",
      features: [
        "Poder da Autenticidade",
        "Humanização da Marca", 
        "Engajamento Intencional",
        "Importância da Consistência",
        "Transformando o Erro em Oportunidade",
        "Impacto das Parcerias Estratégicas",
        "Criatividade no Marketing de Conteúdo",
        "Arte de Criar um Legado"
      ],
      image: "/foto1.jpg",
      link: "https://hotmart.com/pt-br/marketplace/produtos/sah-te-contou-ebook/O100495966E",
      price: "Disponível na Hotmart"
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
    <section id="produtos" className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Meus Produtos Digitais
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Conhecimento estratégico para transformar seu negócio digital
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {products.map((product, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Imagem do produto */}
                <motion.div 
                  className="relative h-80 md:h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={product.image} 
                    alt={product.title}
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    EBOOK
                  </div>
                </motion.div>

                {/* Conteúdo do produto */}
                <div className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold text-slate-800 mb-2"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {product.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-primary-600 font-semibold mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {product.subtitle}
                  </motion.p>
                  
                  <motion.p 
                    className="text-slate-600 mb-6 leading-relaxed"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {product.description}
                  </motion.p>

                  <motion.div 
                    className="mb-6"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-semibold text-slate-800 mb-3">O que você vai aprender:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex}
                          className="flex items-center text-slate-600"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + featureIndex * 0.1 }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-primary-600 rounded-full mr-3"
                            whileHover={{ scale: 1.5 }}
                          />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Comprar na Hotmart
                    </motion.a>
                    
                    <motion.div 
                      className="text-center sm:text-right text-slate-500 text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {product.price}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
