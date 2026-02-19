'use client';

import { motion } from 'framer-motion';

const servicos = [
  {
    titulo: 'Consultoria Individual',
    descricao: 'Acompanhamento próximo e dedicado ao seu negócio digital.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    titulo: 'Estratégias de Conteúdo',
    descricao: 'Alcance milhares de pessoas com estratégias criadas para o seu nicho.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    titulo: 'Gestão de Redes Sociais',
    descricao: 'Seu negócio vendendo pelas redes sociais todo santo dia.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    titulo: 'Campanhas de Lançamento',
    descricao: 'Método que zera estoque, atrai clientes e infla o fluxo de caixa.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    titulo: 'Branding Digital',
    descricao: 'Tudo o que você precisa para viver do seu negócio digital.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

export default function ServicosSection() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-cream-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Serviços
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
            O que eu faço por você
          </h2>
          <p className="text-lg text-charcoal-500 max-w-2xl mx-auto">
            Estratégias sob medida para o seu negócio crescer no digital.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {servicos.map((servico, index) => (
            <motion.div
              key={servico.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-cream-50 p-4 rounded-xl border-l-4 border-primary-500 hover:border-primary-600 border border-cream-200 hover:shadow-md hover:bg-primary-50/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary-100 text-primary-600">{servico.icon}</div>
                <h3 className="text-base font-semibold text-charcoal-800">{servico.titulo}</h3>
              </div>
              <p className="text-sm text-charcoal-500 leading-relaxed">{servico.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
