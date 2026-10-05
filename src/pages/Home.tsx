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
      <section className="relative bg-[#eee] py-16 md:py-24 lg:py-32">
        <div className="max-w-[960px] mx-auto px-4 text-center">
          <div className="fade-in">
            <h1 className="font-['Antic_Didone'] text-3xl md:text-4xl lg:text-5xl text-black font-normal mb-4">
              Organizzazione del rito funebre<br />con professionalità e serietà
            </h1>
            <p className="text-[#666] text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              Da moltissimi anni l'agenzia Onoranze Funebri Pecorari opera con serietà e discrezione nei comuni di Modena, Nonantola e Ravarino.
            </p>
            <p className="text-[#666] text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              L'agenzia organizza funerali completi sollevando i cari della persona scomparsa da qualsiasi incombenza.
            </p>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="py-12 md:py-16">
        <div className="max-w-[960px] mx-auto px-4">
          <h2 className="font-['Antic_Didone'] text-2xl md:text-3xl text-black text-center mb-3 font-normal">Servizi funerari completi</h2>
          <hr className="border-[#999] border-t-2 max-w-xs mx-auto mb-6" />
          <p className="text-[#666] text-center mb-10 max-w-2xl mx-auto">
            L'agenzia funebre Pecorari si occupa dei seguenti servizi:
          </p>

          {/* Elenco servizi con check */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12 max-w-3xl mx-auto">
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
                <svg className="w-5 h-5 text-[#B8A394] shrink-0" fill="currentColor" viewBox="0 0 1792 1792"><path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z"/></svg>
                <span className="text-[#666] font-['Mate_SC'] text-sm">{servizio}</span>
              </div>
            ))}
          </div>

          {/* Card servizi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.map((servizio) => (
              <Link
                key={servizio.path}
                to={servizio.path}
                className="group bg-white border border-[#e0e0e0] rounded-lg p-6 hover:shadow-md hover:border-[#B8A394] transition-all"
              >
                <h3 className="font-['Antic_Didone'] text-lg text-[#463939] font-normal mb-2 group-hover:text-[#B8A394] transition-colors">
                  {servizio.title}
                </h3>
                <p className="text-sm text-[#666] mb-4">{servizio.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#B8A394] font-medium group-hover:gap-2 transition-all">
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* L'agenzia */}
      <section className="py-12 md:py-16 bg-[#f7f7f7]">
        <div className="max-w-[960px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-['Antic_Didone'] text-3xl md:text-4xl text-black mb-4 font-normal">L'agenzia funebre</h2>
              <hr className="border-[#999] border-t-2 max-w-[100px] mb-6" />
              <div className="space-y-4 text-[#666] leading-relaxed">
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
            <div className="grid grid-cols-3 gap-2">
              <img src="https://irp.cdn-website.com/247e9246/dms3rep/multi/opt/0WO0N0000003gA6WAI_pecorari+2-1000w.png" alt="" className="w-full h-auto rounded" loading="lazy" />
              <img src="https://irp.cdn-website.com/247e9246/dms3rep/multi/opt/0WO0N0000003gA6WAI_pecorari_1-1000w.jpg" alt="" className="w-full h-auto rounded" loading="lazy" />
              <img src="https://irp.cdn-website.com/247e9246/dms3rep/multi/opt/0WO0N0000003gA6WAI_pecorari_2-1000w.jpg" alt="" className="w-full h-auto rounded" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Necrologi - ultimi 3 */}
      {ultimiNecrologi.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-[960px] mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-['Antic_Didone'] text-2xl md:text-3xl text-black mb-3 font-normal">Il ricordo trova voce</h2>
              <p className="text-[#666]">Gli ultimi annunci pubblicati</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ultimiNecrologi.map((n) => (
                <NecrologioCard key={n.id} necrologio={n} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/necrologi"
                className="inline-flex items-center gap-2 text-[#B8A394] font-medium hover:text-[#9C8575] transition-colors"
              >
                Consulta tutti i necrologi <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contattaci */}
      <section className="py-12 md:py-16 bg-[#f7f7f7]">
        <div className="max-w-[960px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-['Antic_Didone'] text-3xl md:text-4xl text-black mb-4 font-normal">Contattaci</h2>
              <hr className="border-[#999] border-t-2 max-w-[100px] mb-6" />
              <div className="space-y-3 text-[#666] leading-relaxed">
                <p><strong>L'agenzia funebre Pecorari è sempre a vostra disposizione, tutti i giorni a qualsiasi ora.</strong></p>
                <p>Potete contattarci tramite e-mail scrivendoci al nostro indirizzo</p>
                <p><strong>onoranzefunebripecorari@gmail.com</strong></p>
                <p>Oppure potete compilare il modulo nella pagina contatti (quelli con l'asterisco sono OBBLIGATORI).</p>
                <p>Vi verrà risposto al più presto all'indirizzo da voi inserito nel campo e-Mail.</p>
                <p>In alternativa chiamate ai numeri riportati o contattaci su WhatsApp.</p>
              </div>
              <Link to="/contatti" className="inline-flex items-center gap-2 mt-6 bg-[#B8A394] text-white px-6 py-3 rounded-md hover:bg-[#9C8575] transition-colors font-medium text-sm">
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
      <section className="py-12 md:py-16">
        <div className="max-w-[960px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Modena */}
            <div className="text-center">
              <h2 className="font-['Antic_Didone'] text-2xl md:text-3xl text-black font-normal">Modena</h2>
              <h2 className="font-['Antic_Didone'] text-2xl md:text-3xl text-black font-normal">Via Nonantolana, 555</h2>
              <h2 className="font-['Antic_Didone'] text-2xl md:text-3xl text-black font-normal">TEL. 059 260667</h2>
              <hr className="border-[#999] border-t-2 max-w-xs mx-auto my-4" />
            </div>

            {/* Nonantola */}
            <div className="text-center">
              <h2 className="font-['Antic_Didone'] text-2xl md:text-3xl text-black font-normal">Nonantola</h2>
              <h2 className="font-['Antic_Didone'] text-2xl md:text-3xl text-black font-normal">Piazza Liberazione, 34</h2>
              <h2 className="font-['Antic_Didone'] text-2xl md:text-3xl text-black font-normal">TEL. 059 549279</h2>
              <hr className="border-[#999] border-t-2 max-w-xs mx-auto my-4" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Chiamaci */}
      <section className="py-16 md:py-20 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://lirp.cdn-website.com/247e9246/dms3rep/multi/opt/130074417_lel-1920w.jpg)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-[960px] mx-auto px-4 text-center">
          <p className="text-white text-xl md:text-2xl mb-8">Chiamaci per informazioni</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+39059260667" className="inline-flex items-center gap-2 bg-[#B8A394] text-white px-6 py-3 rounded-md hover:bg-[#9C8575] transition-colors font-medium">
              <Phone className="w-5 h-5" />
              Modena +39 059 260667
            </a>
            <a href="tel:+39059549279" className="inline-flex items-center gap-2 bg-[#B8A394] text-white px-6 py-3 rounded-md hover:bg-[#9C8575] transition-colors font-medium">
              <Phone className="w-5 h-5" />
              Nonantola +39 059 549279
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
