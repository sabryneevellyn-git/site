'use client';

import { motion } from 'framer-motion';

export default function FAQ() {
  const faqs = [
    {
      question: "Para quem é este ebook?",
      answer: "Este ebook é perfeito para influenciadores, empreendedores, profissionais liberais e corporações que querem aprender marketing intencional e autêntico. Se você quer destacar sua marca em um cenário digital 'barulhento', este guia é para você."
    },
    {
      question: "O que torna este ebook diferente?",
      answer: "Usamos a trajetória real de Bianca Andrade (Boca Rosa) como estudo de caso prático. De tutoriais caseiros a um império milionário - não é teoria, são estratégias comprovadas que funcionam."
    },
    {
      question: "Quanto tempo levo para ler?",
      answer: "O ebook foi pensado para ser consumido em algumas horas, mas os conceitos podem ser aplicados imediatamente. É um guia prático que você pode consultar sempre que precisar."
    },
    {
      question: "Preciso ter experiência em marketing?",
      answer: "Não! O ebook é escrito de forma didática e prática. Mesmo iniciantes conseguirão aplicar as estratégias de intencionalidade e autenticidade no seu negócio."
    },
    {
      question: "Há garantia de satisfação?",
      answer: "Sim! Através da Hotmart, você tem garantia de satisfação. Se não ficar satisfeito com o conteúdo, pode solicitar reembolso conforme as políticas da plataforma."
    },
    {
      question: "Posso aplicar em qualquer nicho?",
      answer: "Absolutamente! Os princípios de autenticidade, humanização e intencionalidade são universais. Seja qual for seu nicho, você conseguirá adaptar as estratégias."
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o ebook &ldquo;Sah te contou&rdquo;
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="mb-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                <motion.div 
                  className="w-2 h-2 bg-primary-600 rounded-full mr-3"
                  whileHover={{ scale: 1.5 }}
                />
                {faq.question}
              </h3>
              <p className="text-slate-600 leading-relaxed ml-5">
                {faq.answer}
              </p>
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
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=5521983976690&text=Olá! Tenho dúvidas sobre o ebook Sah te contou. Podem me ajudar?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(34, 197, 94, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
