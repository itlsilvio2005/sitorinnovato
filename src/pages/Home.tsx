import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getNecrologi, Necrologio } from '../lib/necrologi';
import NecrologioCard from '../components/NecrologioCard';

export default function Home() {
  const [ultimiNecrologi, setUltimiNecrologi] = useState<Necrologio[]>([]);

  useEffect(() => {
    getNecrologi().then((data) => {
      const sorted = [...data].sort((a, b) =>
        new Date(b.dataPubblicazione).getTime() - new Date(a.dataPubblicazione).getTime()
      );
      setUltimiNecrologi(sorted.slice(0, 3));
    });
  }, []);

  const servizi = [
    { title: 'Messaggi di cordoglio', path: '/servizi/messaggi-di-cordoglio', desc: 'Raccolta messaggi di cordoglio per chi non può partecipare al funerale.' },
    { title: 'Addobbi floreali', path: '/servizi/addobbi-floreali', desc: 'Composizioni floreali per onorare la memoria del defunto.' },
    { title: 'Lapidi e ornamenti', path: '/servizi/lapidi-e-ornamenti', desc: 'Lapidi e oggetti ornamentali per la commemorazione.' },
    { title: 'Operazioni cimiteriali', path: '/servizi/operazioni-cimiteriali', desc: 'Inumazione, tumulazione e cremazione con assistenza completa.' },
    { title: 'Trasporti funebri', path: '/servizi/trasporti-funebri', desc: 'Trasporti funebri nazionali e internazionali.' },
    { title: 'Cofani e Urne cinerarie', path: '/servizi/cofani-e-urne-cinerarie', desc: 'Fornitura di cofani e urne cinerarie di qualità.' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-surface-warm py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="fade-in">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary font-bold mb-4">
              Onoranze funebri a Modena
            </h1>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Organizzazione del rito funebre con professionalità e serietà
            </p>
            <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              Servizio continuato 24h su 24 — 7 giorni su 7
            </div>
          </div>
        </div>
      </section>

      {/* Presentazione */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-text-muted text-base md:text-lg leading-relaxed">
            Da moltissimi anni l'agenzia Onoranze Funebri Pecorari opera con serietà e discrezione nei comuni di Modena, Nonantola e Ravarino.
          </p>
          <p className="text-text-muted text-base md:text-lg leading-relaxed mt-4">
            L'agenzia organizza funerali completi sollevando i cari della persona scomparsa da qualsiasi incombenza.
          </p>
        </div>
      </section>

      {/* Servizi */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-primary text-center mb-3">Servizi funerari completi</h2>
          <p className="text-text-muted text-center mb-10 max-w-2xl mx-auto">
            L'agenzia funebre Pecorari si occupa dei seguenti servizi:
          </p>

          {/* Elenco servizi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              'Trasporti funebri nazionali e internazionali',
              'Articoli funebri',
              'Fornitura di cofani',
              'Necrologi e avvisi di lutto',
              'Arredi cimiteriali',
              'Inumazione e cremazione',
              'Tanatoestetica',
              'Vestizione salme',
              'Assistenza contrattuale',
              'Perizie e consulenze tecniche',
              'Lapidi e oggetti ornamentali',
              'Addobbi floreali',
            ].map((servizio) => (
              <div key={servizio} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-border-light">
                <div className="w-2 h-2 bg-accent rounded-full shrink-0"></div>
                <span className="text-sm text-text">{servizio}</span>
              </div>
            ))}
          </div>

          {/* Card servizi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.map((servizio) => (
              <Link
                key={servizio.path}
                to={servizio.path}
                className="group bg-white border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <h3 className="font-serif text-lg text-primary font-semibold mb-2 group-hover:text-primary-light transition-colors">
                  {servizio.title}
                </h3>
                <p className="text-sm text-text-muted mb-4">{servizio.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-accent font-medium group-hover:gap-2 transition-all">
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* L'agenzia */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-primary text-center mb-8">L'agenzia funebre</h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Onoranze Funebri Pecorari offre la propria esperienza per organizzare e gestire servizi funebri completi con grande discrezione e serietà.
            </p>
            <p>
              Operiamo da anni in tutta la provincia di Modena, avvalendoci del prezioso operato di personale competente e sensibile.
            </p>
            <p>
              Seguiamo l'allestimento della camera ardente e ci occupiamo di vestire la salma. Eseguiamo trasporti nazionali e internazionali e curiamo le procedure di tumulazione, inumazione o cremazione. Inoltre, gestiamo il disbrigo di tutte le pratiche inerenti, nonché la pubblicazione di necrologi e avvisi di lutto.
            </p>
          </div>
        </div>
      </section>

      {/* Necrologi - ultimi 3 */}
      {ultimiNecrologi.length > 0 && (
        <section className="py-12 md:py-16 bg-surface-warm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl text-primary mb-3">Il ricordo trova voce</h2>
              <p className="text-text-muted">Gli ultimi annunci pubblicati</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ultimiNecrologi.map((n) => (
                <NecrologioCard key={n.id} necrologio={n} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/necrologi"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
              >
                Consulta tutti i necrologi <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contatti / Sedi */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl text-primary text-center mb-3">Contattaci</h2>
          <p className="text-text-muted text-center mb-10 max-w-2xl mx-auto">
            L'agenzia funebre Pecorari è sempre a vostra disposizione, tutti i giorni a qualsiasi ora.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Modena */}
            <div className="bg-surface border border-border rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-serif text-xl text-primary font-semibold mb-2">Modena</h3>
              <p className="text-text-muted text-sm mb-3">Via Nonantolana, 555 — 41122 Modena (MO)</p>
              <a href="tel:+39059260667" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors">
                <Phone className="w-4 h-4" />
                059 260667
              </a>
            </div>

            {/* Nonantola */}
            <div className="bg-surface border border-border rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-serif text-xl text-primary font-semibold mb-2">Nonantola</h3>
              <p className="text-text-muted text-sm mb-3">Piazza Liberazione, 34 — 41015 Nonantola (MO)</p>
              <a href="tel:+39059549279" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors">
                <Phone className="w-4 h-4" />
                059 549279
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
