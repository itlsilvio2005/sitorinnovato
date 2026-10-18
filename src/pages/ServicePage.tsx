import { useParams, Link } from 'react-router-dom';
import { Phone, ArrowLeft } from 'lucide-react';
import { useState, useCallback } from 'react';
import { getService, services } from '../data/services';
import Lightbox from '../components/Lightbox';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleNext = useCallback(() => {
    if (!service) return;
    setLightboxIndex((prev) => (prev + 1) % service.galleryImages.length);
  }, [service]);

  const handlePrev = useCallback(() => {
    if (!service) return;
    setLightboxIndex((prev) => (prev - 1 + service.galleryImages.length) % service.galleryImages.length);
  }, [service]);

  if (!service) {
    return (
      <div className="max-w-container mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-2xl text-text-primary mb-4">Pagina non trovata</h1>
        <Link to="/" className="text-tortora-800 hover:text-tortora-900">Torna alla home</Link>
      </div>
    );
  }

  // Update document title
  if (typeof document !== 'undefined') {
    document.title = `${service.title} | Modena | Onoranze Funebri Pecorari`;
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full h-[280px] md:h-[460px] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative h-full flex items-center justify-center px-4">
          <h1 className="font-sans text-[36px] md:text-[60px] font-semibold text-white text-center drop-shadow-lg">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Introduzione */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-4 text-center">
          {service.intro.map((p, i) => (
            <p key={i} className="text-text-primary text-[18px] leading-relaxed mb-6 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Sezioni aggiuntive (per operazioni-cimiteriali) */}
      {service.sections && service.sections.length > 0 && (
        <section className="py-12 md:py-16 bg-tortora-50">
          <div className="max-w-[900px] mx-auto px-4 space-y-10">
            {service.sections.map((section, i) => (
              <div key={i} id={section.anchor} className="bg-white border border-tortora-200 rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-text-primary mb-4">{section.title}</h2>
                <p className="text-text-primary text-[17px] leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Galleria */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {service.galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => handleImageClick(i)}
                className="relative aspect-[4/3] overflow-hidden group cursor-zoom-in"
                aria-label={`Apri immagine: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-12 md:py-16 bg-tortora-100">
        <div className="max-w-container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-3">Chiamaci per informazioni</h2>
          <p className="text-text-secondary text-[17px] mb-8">Siamo a disposizione 24 ore su 24</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+39059260667" className="inline-flex items-center gap-2 bg-tortora-700 text-white px-6 py-3 rounded-md hover:bg-tortora-800 transition-colors font-semibold text-[15px]">
              <Phone className="w-5 h-5" />
              Modena 059 260667
            </a>
            <a href="tel:+39059549279" className="inline-flex items-center gap-2 bg-tortora-800 text-white px-6 py-3 rounded-md hover:bg-tortora-900 transition-colors font-semibold text-[15px]">
              <Phone className="w-5 h-5" />
              Nonantola 059 549279
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={service.galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </main>
  );
}
