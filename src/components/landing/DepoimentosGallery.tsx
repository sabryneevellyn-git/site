import { getDepoimentosImages } from '@/lib/depoimentos';
import DepoimentosView from './DepoimentosView';

export default function DepoimentosGallery() {
  const images = getDepoimentosImages();

  if (images.length === 0) {
    return (
      <section id="depoimentos" className="py-20 sm:py-28 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4">Depoimentos</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
              O que dizem
            </h2>
            <p className="text-charcoal-500 mb-12">
              Salve os prints em <code className="bg-cream-200 px-2 py-1 rounded text-sm">public/depoimentos</code>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-cream-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-4">Depoimentos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
            O que dizem
          </h2>
          <p className="text-charcoal-500">
            Quem já transformou o negócio com a EVY GROWTH.
          </p>
        </div>

        <DepoimentosView images={images} />
      </div>
    </section>
  );
}
