import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';

const serviziContent: Record<string, { title: string; content: string[]; frasi?: string[] }> = {
  'messaggi-di-cordoglio': {
    title: 'Messaggi di cordoglio',
    content: [
      'Onoranze funebri Pecorari è l\'agenzia che offre il servizio di raccolta messaggi di cordoglio per tutte le persone che non avendo la possibilità di partecipare al funerale della Vostra persona cara, intendono comunque lasciare le proprie condoglianze ed esprimere la propria vicinanza nel momento del dolore.',
    ],
    frasi: [
      'Le persone come Lui/Lei non muoiono per sempre, solo si allontanano. Lo/La sentiremo sempre nel nostro cuore.',
      'Ricordiamo con affetto il caro... e Vi siamo vicini nel Vostro dolore.',
      'Vi siamo vicini con tutto il nostro affetto.',
      'Il caro... vivrà sempre nelle nostre preghiere.',
      'La triste notizia ci ha veramente colpiti. Condoglianze.',
      'Vi siamo sinceramente vicini in questa dolorosa circostanza.',
      'La perdita subita è per noi motivo di dolore e di sincera commozione.',
      'È con animo mesto che Vi siamo vicini in questo terribile giorno.',
      'Vi siamo vicini nel dolore.',
      'Vi giungano le nostre più sentite condoglianze.',
      'Sentite e sincere condoglianze.',
      'Nella terribile solitudine del dolore vi esprimiamo i sensi del nostro più accorato cordoglio.',
      'Comprendiamo il Vostro dolore e Vi siamo vicini.',
      'In questo momento di dolore Vi giungano le nostre più sentite condoglianze.',
    ],
  },
  'addobbi-floreali': {
    title: 'Addobbi floreali',
    content: [
      'L\'agenzia funebre Pecorari si occupa della cura degli addobbi floreali per le esequie, offrendo composizioni floreali di alta qualità per onorare la memoria del defunto.',
      'Dalle corone ai cuscini, dalle composizioni personalizzate ai mazzi di fiori, il nostro team vi guiderà nella scelta più adatta per esprimere il vostro affetto e rispetto.',
    ],
  },
  'lapidi-e-ornamenti': {
    title: 'Lapidi e ornamenti',
    content: [
      'L\'agenzia Pecorari offre un servizio completo per la fornitura e posa di lapidi e oggetti ornamentali cimiteriali.',
      'Con la collaborazione di artigiani specializzati, realizziamo lapidi personalizzate, portraits in ceramica, vasi, lampade e altri complementi per la decorazione delle tombe.',
    ],
  },
  'operazioni-cimiteriali': {
    title: 'Operazioni cimiteriali',
    content: [
      'L\'agenzia funebre Pecorari gestisce tutte le operazioni cimiteriali necessarie, dall\'inumazione alla tumulazione, fino alla cremazione.',
      'Ci occupiamo del disbrigo di tutte le pratiche burocratiche, delle autorizzazioni necessarie e del coordinamento con le autorità competenti.',
      'Offriamo assistenza completa per la scelta della soluzione più adatta alle volontà del defunto e della famiglia.',
    ],
  },
  'trasporti-funebri': {
    title: 'Trasporti funebri',
    content: [
      'Pecorari, agenzia di onoranze funebri tra i servizi offerti si occupa anche del recupero di tutta la documentazione e le autorizzazioni necessarie per il recupero e il trasferimento della salma, anche oltre i confini nazionali.',
      'Lo staff con professionalità e competenza, di cui la famiglia del defunto ha bisogno nel momento di dolore e sofferenza, curerà in ogni dettaglio l\'allestimento della cerimonia e il trasporto funebre, sia sul territorio nazionale che internazionale, disponendo di mezzi eleganti e sicuri.',
      'Le Onoranze Funebri Pecorari oggi rappresentano un punto di riferimento per tutto il territorio modenese ed in particolare per le zone di Modena, Nonantola e Ravarino.',
    ],
  },
  'cofani-e-urne-cinerarie': {
    title: 'Cofani e Urne cinerarie',
    content: [
      'L\'agenzia funebre Pecorari offre una vasta gamma di cofani e urne cinerarie per rispondere a ogni esigenza e desiderio della famiglia.',
      'Disponiamo di cofani in legno massello, laccati, con finiture pregiate e urne cinerarie in diversi materiali e stili, per garantire una scelta rispettosa delle volontà del defunto.',
    ],
  },
};

export default function ServizioPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? serviziContent[slug] : null;

  if (!content) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-2xl text-primary mb-4">Pagina non trovata</h1>
        <Link to="/" className="text-primary hover:text-primary-light">Torna alla home</Link>
      </div>
    );
  }

  return (
    <main className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#463939] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Torna alla home
        </Link>

        <h1 className="font-['Antic_Didone'] text-3xl md:text-4xl text-black mb-8 font-normal">{content.title}</h1>

        <div className="prose max-w-none">
          {content.content.map((p, i) => (
            <p key={i} className="text-[#666] leading-relaxed mb-4">{p}</p>
          ))}
        </div>

        {content.frasi && (
          <div className="mt-8">
            <h2 className="font-serif text-xl text-primary mb-4">Frasi di condoglianze</h2>
            <ul className="space-y-3">
              {content.frasi.map((frase, i) => (
                <li key={i} className="flex items-start gap-3 text-text-muted">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                  <span className="italic">"{frase}"</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-[#f7f7f7] border border-[#e0e0e0] rounded-xl p-6 md:p-8 text-center">
          <h2 className="font-['Antic_Didone'] text-xl text-black mb-3 font-normal">Chiamaci per informazioni</h2>
          <p className="text-[#666] text-sm mb-4">Siamo a disposizione 24 ore su 24</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+39059260667" className="inline-flex items-center gap-2 bg-[#68CCD1] text-white px-5 py-3 rounded-md hover:bg-[#4FB8BD] transition-colors font-medium text-sm">
              <Phone className="w-4 h-4" />
              Modena — 059 260667
            </a>
            <a href="tel:+39059549279" className="inline-flex items-center gap-2 bg-[#463939] text-white px-5 py-3 rounded-md hover:bg-[#5C4C4C] transition-colors font-medium text-sm">
              <Phone className="w-4 h-4" />
              Nonantola — 059 549279
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
