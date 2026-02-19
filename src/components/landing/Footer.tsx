export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-cream-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <a
            href="#home"
            className="flex items-baseline gap-1 text-xl font-bold tracking-tight"
          >
            <span className="text-cream-100">EVY</span>
            <span className="text-primary-400">GROWTH</span>
          </a>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-cream-200/90 hover:text-cream-100 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-cream-200/90 hover:text-cream-100 transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-cream-200/90 hover:text-cream-100 transition-colors">
              Serviços
            </a>
            <a href="#depoimentos" className="text-cream-200/90 hover:text-cream-100 transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-cream-200/90 hover:text-cream-100 transition-colors">
              Contato
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5521983976690"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-200/90 hover:text-cream-100 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/evygrowth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-200/90 hover:text-cream-100 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cream-100/10 text-center text-cream-200/70 text-sm">
          &copy; {currentYear} EVY GROWTH — Marketing Digital Estratégico
        </div>
      </div>
    </footer>
  );
}
