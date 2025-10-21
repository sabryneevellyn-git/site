'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Entre na Nossa Lista VIP Gratuitamente!
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Cadastre-se e receba <strong className="text-slate-800">dicas, estratégias e conteúdos exclusivos</strong> sobre{' '}
              <strong className="text-slate-800">Marketing Digital</strong> direto no seu e-mail.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-600 focus:outline-none bg-white"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-primary-600 focus:outline-none bg-white"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-600 focus:outline-none bg-white resize-vertical"
                placeholder="Conte-me sobre seu projeto..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
