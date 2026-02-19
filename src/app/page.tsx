import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import SobreSection from '@/components/landing/SobreSection';
import ServicosSection from '@/components/landing/ServicosSection';
import DepoimentosGallery from '@/components/landing/DepoimentosGallery';
import ContatoSection from '@/components/landing/ContatoSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-100">
      <Header />
      <HeroSection />
      <SobreSection />
      <ServicosSection />
      <DepoimentosGallery />
      <ContatoSection />
      <Footer />
    </main>
  );
}
