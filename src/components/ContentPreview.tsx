'use client';

import { motion } from 'framer-motion';

export default function ContentPreview() {
  const previews = [
    {
      chapter: "Capítulo 1",
      title: "O Poder da Autenticidade",
      preview: "Descubra como Bianca Andrade transformou sua autenticidade em uma marca milionária. Aprenda a comunicar sua verdade fundamental sem medo.",
      highlight: "Autenticidade não é perfeição, é propósito."
    },
    {
      chapter: "Capítulo 3", 
      title: "Humanização da Marca",
      preview: "Transforme fãs em família através da empatia genuína. Veja como criar conexões reais que geram lealdade duradoura.",
      highlight: "Marcas humanas vendem melhor que marcas perfeitas."
    },
    {
      chapter: "Capítulo 5",
      title: "Engajamento Intencional", 
      preview: "Cada ação de marketing deve ter propósito claro e mensurável. Aprenda a estratégia por trás de cada post, cada campanha.",
      highlight: "Intenção gera resultados, improviso gera desperdício."
    },
    {
      chapter: "Capítulo 7",
      title: "Arte de Criar um Legado",
      preview: "Construa uma marca que perdura, pensando além do lucro imediato. Como Bianca criou um império que vai além dela mesma.",
      highlight: "Legados são construídos com estratégia, não sorte."
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Preview do Conteúdo
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uma prévia dos conceitos que você vai dominar no ebook
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {previews.map((preview, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ x: 10 }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                    {preview.chapter}
                  </div>
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {preview.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {preview.preview}
                  </p>
                  <motion.div 
                    className="bg-gradient-to-r from-primary-100 to-secondary-100 p-4 rounded-lg border-l-4 border-primary-600"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-primary-800 font-semibold italic">
                      &ldquo;{preview.highlight}&rdquo;
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-slate-600 mb-6">
            Quer descobrir todos os segredos? Adquira o ebook completo!
          </p>
          <motion.a
            href="https://hotmart.com/pt-br/marketplace/produtos/sah-te-contou-ebook/O100495966E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Comprar Agora na Hotmart
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
