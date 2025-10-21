import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import ContentPreview from '@/components/ContentPreview';
import FAQ from '@/components/FAQ';
import Guarantee from '@/components/Guarantee';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import CustomCursor from '@/components/CustomCursor';
import ParticleEffects from '@/components/ParticleEffects';
import FloatingElements from '@/components/FloatingElements';
import BackgroundWaves from '@/components/BackgroundWaves';
import MagicSparkles from '@/components/MagicSparkles';

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Efeitos de fundo */}
      <BackgroundWaves />
      <ParticleEffects />
      <FloatingElements />
      <MagicSparkles />
      
      {/* Conteúdo principal */}
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <ContentPreview />
      <FAQ />
      <Guarantee />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  );
}