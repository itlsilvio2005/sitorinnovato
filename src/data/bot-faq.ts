export interface FAQ {
  keywords: string[];
  answer: string;
}

export const botFAQs: FAQ[] = [
  {
    keywords: ['decesso', 'morto', 'morte', 'cosa fare', 'primo'],
    answer: 'In caso di decesso, chiamate subito la nostra sede operativa H24 al numero 338 7277095. Se il decesso avviene in abitazione, avvertite prima il medico curante. Se avviene in ospedale, sarà la struttura a occuparsi delle pratiche. Siamo sempre a vostra disposizione con grande umanità e discrezione.'
  },
  {
    keywords: ['orari', 'apertura', 'quando', 'tempo'],
    answer: 'Siamo aperti 24 ore su 24, 7 giorni su 7, inclusi festivi e notturno. Potete contattarci in qualsiasi momento al numero 059 260667 (Modena) o 059 549279 (Nonantola).'
  },
  {
    keywords: ['servizi', 'offrite', 'fate', 'cosa'],
    answer: 'Offriamo servizi funerari completi: trasporti funebri nazionali e internazionali, articoli funebri, fornitura di cofani, necrologi e avvisi di lutto, arredi cimiteriali, inumazione e cremazione, tanatoestetica, vestizione salme, assistenza contrattuale, perizie e consulenze tecniche, lapidi e oggetti ornamentali, addobbi floreali.'
  },
  {
    keywords: ['cremazione', 'ceneri', 'urna'],
    answer: 'Ci occupiamo di tutte le operazioni cimiteriali, inclusa la cremazione. Gestiamo il disbrigo di tutte le pratiche burocratiche e le autorizzazioni necessarie. Offriamo anche una vasta gamma di urne cinerarie in diversi materiali e stili.'
  },
  {
    keywords: ['lapidi', 'ornamento', 'cimitero', 'tomba'],
    answer: 'Offriamo un servizio completo per la fornitura e posa di lapidi e oggetti ornamentali cimiteriali. Con la collaborazione di artigiani specializzati, realizziamo lapidi personalizzate, portraits in ceramica, vasi, lampade e altri complementi per la decorazione delle tombe.'
  },
  {
    keywords: ['trasporti', 'trasferimento', 'nazionale', 'internazionale'],
    answer: 'Ci occupiamo del recupero di tutta la documentazione e le autorizzazioni necessarie per il trasferimento della salma, anche oltre i confini nazionali. Il nostro staff curerà in ogni dettaglio l\'allestimento della cerimonia e il trasporto funebre, disponendo di mezzi eleganti e sicuri.'
  },
  {
    keywords: ['sedi', 'dove', 'indirizzo', 'trovate'],
    answer: 'Abbiamo due sedi: Modena in Via Nonantolana 555 (tel. 059 260667) e Nonantola in Piazza Liberazione 34 (tel. 059 549279). Il cellulare sempre attivo è 338 7277095.'
  },
  {
    keywords: ['telefono', 'chiama', 'contatto', 'numero'],
    answer: 'Potete chiamarci al numero 059 260667 per la sede di Modena, o 059 549279 per la sede di Nonantola. Il cellulare sempre attivo è 338 7277095. Siamo disponibili 24 ore su 24.'
  },
  {
    keywords: ['necrologi', 'annuncio', 'pubblicare'],
    answer: 'Gestiamo la pubblicazione di necrologi e avvisi di lutto. Potete consultare i necrologi recenti nella sezione dedicata del nostro sito. Per pubblicare un necrologio, contattateci al numero 059 260667.'
  },
  {
    keywords: ['fiori', 'addobbi', 'floreali'],
    answer: 'Ci occupiamo della cura degli addobbi floreali per le esequie, offrendo composizioni floreali di alta qualità: corone, cuscini, composizioni personalizzate e mazzi di fiori per esprimere il vostro affetto e rispetto.'
  },
  {
    keywords: ['cofani', 'bara'],
    answer: 'Offriamo una vasta gamma di cofani in legno massello, laccati, con finiture pregiate per rispondere a ogni esigenza e desiderio della famiglia, nel rispetto delle volontà del defunto.'
  },
  {
    keywords: ['cordoglio', 'condoglianze', 'messaggi'],
    answer: 'Offriamo il servizio di raccolta messaggi di cordoglio per tutte le persone che non avendo la possibilità di partecipare al funerale intendono comunque lasciare le proprie condoglianze ed esprimere la propria vicinanza nel momento del dolore.'
  },
  {
    keywords: ['prezzi', 'costo', 'quanto'],
    answer: 'Per informazioni sui prezzi e preventivi personalizzati, vi invitiamo a contattarci direttamente al numero 059 260667 o a venirci a trovare in sede. Ogni situazione è diversa e siamo disponibili a discutere le vostre esigenze con discrezione e professionalità.'
  },
];

export function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  for (const faq of botFAQs) {
    if (faq.keywords.some(keyword => lowerMessage.includes(keyword))) {
      return faq.answer;
    }
  }
  
  return 'Non ho questa informazione, la prego di chiamare Modena 059 260667 o Nonantola 059 549279 o scriverci su WhatsApp 338 7277095.';
}
