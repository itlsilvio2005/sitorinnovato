import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
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
      {/* Hero con immagine di sfondo */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background con gradiente tortora */}
        <div className="absolute inset-0 bg-gradient-to-br from-tortora-700 via-tortora-600 to-tortora-800"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-container mx-auto px-4 text-center text-white z-10">
          <div className="fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Organizzazione del rito funebre<br />con professionalità e serietà
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
              Da moltissimi anni l'agenzia Onoranze Funebri Pecorari opera con serietà e discrezione nei comuni di Modena, Nonantola e Ravarino.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+39059260667" className="inline-flex items-center gap-2 bg-white text-tortora-800 px-6 py-3 rounded-md hover:bg-tortora-50 transition-colors font-semibold">
                <Phone className="w-5 h-5" />
                Modena 059 260667
              </a>
              <a href="tel:+39059549279" className="inline-flex items-center gap-2 bg-white text-tortora-800 px-6 py-3 rounded-md hover:bg-tortora-50 transition-colors font-semibold">
                <Phone className="w-5 h-5" />
                Nonantola 059 549279
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="py-16 md:py-20 bg-tortora-50">
        <div className="max-w-container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary text-center mb-4">Servizi funerari completi</h2>
          <hr className="border-tortora-300 border-t-2 max-w-xs mx-auto mb-6" />
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto text-lg">
            L'agenzia funebre Pecorari si occupa dei seguenti servizi:
          </p>

          {/* Elenco servizi con check */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
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
              <div key={servizio} className="flex items-center gap-3 py-2">
                <svg className="w-5 h-5 text-tortora-700 shrink-0" fill="currentColor" viewBox="0 0 1792 1792"><path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"/></svg>
                <span className="text-text-primary text-[17px]">{servizio}</span>
              </div>
            ))}
          </div>

          {/* Card servizi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.map((servizio) => (
              <Link
                key={servizio.path}
                to={servizio.path}
                className="group bg-white border border-tortora-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-tortora-300 transition-all"
              >
                <h3 className="font-serif text-xl text-text-primary mb-3 group-hover:text-tortora-800 transition-colors">
                  {servizio.title}
                </h3>
                <p className="text-text-secondary mb-4 text-[17px]">{servizio.desc}</p>
                <span className="inline-flex items-center gap-1 text-[17px] text-tortora-800 font-semibold group-hover:gap-2 transition-all">
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* L'agenzia */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">L'agenzia funebre</h2>
              <hr className="border-tortora-300 border-t-2 max-w-[100px] mb-6" />
              <div className="space-y-4 text-text-primary text-[17px] leading-relaxed">
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
            <div className="grid grid-cols-3 gap-3">
              <img src="https://irp.cdn-website.com/247e9246/dms3rep/multi/opt/0WO0N0000003gA6WAI_pecorari+2-1000w.png" alt="" className="w-full h-48 object-cover rounded" loading="lazy" />
              <img src="https://irp.cdn-website.com/247e9246/dms3rep/multi/opt/0WO0N0000003gA6WAI_pecorari_1-1000w.jpg" alt="" className="w-full h-48 object-cover rounded" loading="lazy" />
              <img src="https://irp.cdn-website.com/247e9246/dms3rep/multi/opt/0WO0N0000003gA6WAI_pecorari_2-1000w.jpg" alt="" className="w-full h-48 object-cover rounded" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Necrologi - ultimi 3 */}
      {ultimiNecrologi.length > 0 && (
        <section className="py-16 md:py-20 bg-tortora-50">
          <div className="max-w-container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">Il ricordo trova voce</h2>
              <p className="text-text-secondary text-lg">Gli ultimi annunci pubblicati</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ultimiNecrologi.map((n) => (
                <NecrologioCard key={n.id} necrologio={n} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/necrologi"
                className="inline-flex items-center gap-2 text-tortora-800 font-semibold hover:text-tortora-900 transition-colors text-lg"
              >
                Consulta tutti i necrologi <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contattaci */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">Contattaci</h2>
              <hr className="border-tortora-300 border-t-2 max-w-[100px] mb-6" />
              <div className="space-y-4 text-text-primary text-[17px] leading-relaxed">
                <p><strong>L'agenzia funebre Pecorari è sempre a vostra disposizione, tutti i giorni a qualsiasi ora.</strong></p>
                <p>Potete contattarci tramite e-mail scrivendoci al nostro indirizzo</p>
                <p><strong>pecorarisrl@yahoo.it</strong></p>
                <p>Oppure potete compilare il modulo nella pagina contatti (quelli con l'asterisco sono OBBLIGATORI).</p>
                <p>Vi verrà risposto al più presto all'indirizzo da voi inserito nel campo e-Mail.</p>
                <p>In alternativa chiamate ai numeri riportati o contattaci su WhatsApp.</p>
              </div>
              <Link to="/contatti" className="inline-flex items-center gap-2 mt-8 bg-tortora-700 text-white px-6 py-3 rounded-md hover:bg-tortora-800 transition-colors font-semibold">
                Contatti
              </Link>
            </div>
            <div>
              <img
                src="https://lirp.cdn-website.com/247e9246/dms3rep/multi/opt/202005221521032952_carro+funebre1-1920w.jpeg"
                alt="Carro funebre"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sedi */}
      <section className="py-16 md:py-20 bg-tortora-100">
        <div className="max-w-container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Modena */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">Modena</h2>
              <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">Via Nonantolana, 555</h2>
              <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">TEL. 059 260667</h2>
              <hr className="border-tortora-300 border-t-2 max-w-xs mx-auto" />
            </div>

            {/* Nonantola */}
            <div className="text-center bg-white p-8 rounded-lg shadow-sm">
              <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">Nonantola</h2>
              <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-2">Piazza Liberazione, 34</h2>
              <h2 className="font-serif text-2xl md:text-3xl text-text-primary mb-4">TEL. 059 549279</h2>
              <hr className="border-tortora-300 border-t-2 max-w-xs mx-auto" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
