export interface Service {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  intro: string[];
  galleryImages: { src: string; alt: string }[];
  sections?: { title: string; content: string; anchor?: string }[];
}

export const services: Service[] = [
  {
    slug: 'messaggi-di-cordoglio',
    title: 'Messaggi di cordoglio',
    metaDescription: 'Servizio di raccolta messaggi di cordoglio per esprimere vicinanza nel momento del dolore. Onoranze Funebri Pecorari Modena e Nonantola.',
    heroImage: 'https://image.qwenlm.ai/generated-images/d30f72fd-7ef5-4888-8bc7-4828ad040a4c/_result.png',
    intro: [
      'Onoranze funebri Pecorari è l\'agenzia che offre il servizio di raccolta messaggi di cordoglio per tutte le persone che non avendo la possibilità di partecipare al funerale della Vostra persona cara, intendono comunque lasciare le proprie condoglianze ed esprimere la propria vicinanza nel momento del dolore.',
    ],
    galleryImages: [
      { src: 'https://image.qwenlm.ai/generated-images/d30f72fd-7ef5-4888-8bc7-4828ad040a4c/_result.png', alt: 'Lettera di condoglianze con fiori bianchi' },
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/GettyImages-1293873354-1920w.jpg', alt: 'Composizione floreale per condoglianze' },
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/flower-3287768_1920-1920w.jpg', alt: 'Bouquet di fiori per commemorazione' },
    ],
  },
  {
    slug: 'addobbi-floreali',
    title: 'Addobbi floreali',
    metaDescription: 'Addobbi floreali funebri di ogni genere: corone, coccarde, camera ardente. Allestimenti per cerimonie religiose e laiche. Pecorari Modena.',
    heroImage: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/GettyImages-1293873354-1920w.jpg',
    intro: [
      'L\'agenzia Onoranze funebri Pecorari realizza servizi e addobbi floreali di ogni genere: dalla semplice coccarda e corona, alla camera ardente più classica.',
      'Grazie alla vastissima gamma di tessuti, colori e attrezzature, siamo in grado di predisporre i nostri allestimenti in qualsiasi luogo, per ogni tipo di cerimonia sia religiosa che laica.',
    ],
    galleryImages: [
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/GettyImages-1010977266-1920w.jpg', alt: 'Corona funebre di fiori bianchi' },
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/GettyImages-1305208242-1920w.jpg', alt: 'Composizione floreale per funerale' },
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/flower-3287768_1920-1920w.jpg', alt: 'Bouquet di fiori per commemorazione' },
    ],
  },
  {
    slug: 'lapidi-e-ornamenti',
    title: 'Lapidi e ornamenti',
    metaDescription: 'Lapidi, ornamenti cimiteriali e oggetti commemorativi. Lapidi personalizzate, portraits in ceramica, vasi e lampade. Pecorari Modena e Nonantola.',
    heroImage: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/angel-2902845_1920-1920w.jpg',
    intro: [
      'L\'agenzia Onoranze funebri Pecorari realizza lapidi e ornamenti cimiteriali di ogni genere, con la collaborazione di artigiani specializzati per creare opere personalizzate e di qualità.',
      'Offriamo portraits in ceramica, vasi, lampade e altri complementi per la decorazione delle tombe, con attenzione ai dettagli e rispetto per la memoria del defunto.',
    ],
    galleryImages: [
      { src: 'https://irp-cdn-website.com/247e9246/import/base/dms3rep/multi/opt/img.LTE0MjcwODcxNDg-1920w.jpeg', alt: 'Lapide cimiteriale in marmo' },
      { src: 'https://irp-cdn-website.com/247e9246/import/base/dms3rep/multi/opt/img.LTIxNjk1MzAzMQ-1920w.png', alt: 'Ornamento funerario' },
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/GettyImages-1064891178-1920w.jpg', alt: 'Statua angelo al cimitero' },
    ],
  },
  {
    slug: 'operazioni-cimiteriali',
    title: 'Operazioni cimiteriali',
    metaDescription: 'Operazioni cimiteriali complete: disbrigo pratiche, cremazione, inumazione, tumulazione, esumazione. Assistenza burocratica completa. Pecorari Modena.',
    heroImage: 'https://image.qwenlm.ai/generated-images/47f75bb8-055c-4f4f-926e-9a7e9fb3386a/_result.png',
    intro: [
      'Le onoranze funebri Pecorari a Modena seguono il disbrigo di tutte le pratiche funerarie e cimiteriali venendo in soccorso della famiglia del defunto e offrendo la propria competenza ed esperienza per quanto riguarda gli aspetti burocratici ed amministrativi, spesso pesanti ma indispensabili.',
    ],
    sections: [
      {
        title: 'Disbrigo pratiche',
        anchor: 'pratiche',
        content: 'Tra i documenti per la cerimonia funebre, che lo staff di Pecorari esegue, vi sono le pratiche presso Comuni, Istituti di cura, Ospedali e Case di riposo. Si occupa, quindi, della richiesta del certificato di morte, di tutti i documenti e le autorizzazioni necessarie al trasporto e alla sepoltura della salma e della domanda per il rilascio del passaporto mortuario, in caso di trasporto funebre all\'estero.',
      },
      {
        title: 'La cremazione',
        anchor: 'Cremazione',
        content: 'Si tratta di un procedimento di sepoltura divenuto piuttosto comune. La cremazione avviene immettendo nel forno crematorio la bara con la salma. L\'autorizzazione alla cremazione è concessa nel rispetto delle volontà espresse dalla persona scomparsa tramite testamento o del parente più prossimo, oppure tramite iscrizione ad associazioni legalmente riconosciute. Le ceneri rimaste vengono raccolte e sigillate in un\'urna e consegnata ai parenti o ai cari del defunto. Per disposizioni particolari e la scelta dell\'urna, il nostro staff è totalmente a vostra disposizione.',
      },
      {
        title: 'L\'inumazione',
        anchor: 'inumazione',
        content: 'Una delle più antiche forme di sepoltura. La sepoltura del cofano avviene in fosse di terra scavata all\'interno del terreno cimiteriale definito dal Comune interessato, il quale ne determina anche gli eventuali oneri. Per disposizioni particolari e la scelta del cofano, il nostro staff è totalmente a vostra disposizione.',
      },
      {
        title: 'La tumulazione',
        anchor: 'tumulazione',
        content: 'A differenza dell\'inumazione, la tumulazione è una sepoltura finalizzata a conservare intatte più a lungo possibile le spoglie mortali del defunto. A tale scopo il corpo viene riposto in una controcassa di zinco alloggiata all\'interno della bara in legno. La tumulazione prevede la sepoltura in nicchie, loculi separati, o tombe private, costruiti con opera muraria.',
      },
      {
        title: 'L\'esumazione',
        anchor: 'esumazione',
        content: 'Tra le altre operazioni cimiteriali, l\'agenzia segue anche la gestione delicata dell\'esumazione e di tutte le pratiche annesse. Per l\'esumazione ordinaria, dopo un minimo di 10 anni dalla data di inumazione del defunto, è possibile scegliere di recuperare i resti ossei per destinarli a una nuova collocazione. Oppure è possibile effettuare l\'operazione anche prima dei termini previsti, solo previa autorizzazione motivata, per ricongiungimento a un familiare, traslazione, trasporto in altro comune, cremazione o tumulazione all\'interno di una tomba di famiglia. Nel caso di esumazione straordinaria l\'agenzia Pecorari provvede a programmare l\'operazione presentando la richiesta presso gli uffici competenti e a comunicarne data e ora ai familiari, aiutandoli nell\'organizzazione delle successive fasi di trasferimento o raccolta dei resti in ossario.',
      },
    ],
    galleryImages: [
      { src: 'https://image.qwenlm.ai/generated-images/47f75bb8-055c-4f4f-926e-9a7e9fb3386a/_result.png', alt: 'Cimitero con lapidi in marmo' },
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/angel-2902845_1920-1920w.jpg', alt: 'Statua angelo al cimitero' },
      { src: 'https://irp-cdn-website.com/247e9246/import/base/dms3rep/multi/opt/img.LTE0MjcwODcxNDg-1920w.jpeg', alt: 'Lapide cimiteriale' },
    ],
  },
  {
    slug: 'trasporti-funebri',
    title: 'Trasporti funebri',
    metaDescription: 'Trasporti funebri nazionali e internazionali. Recupero documentazione e autorizzazioni per trasferimento salma. Mezzi eleganti e sicuri. Pecorari Modena.',
    heroImage: 'https://image.qwenlm.ai/generated-images/d1782db0-f7e9-4017-a431-75b6398d52e9/_result.png',
    intro: [
      'Pecorari, agenzia di onoranze funebri tra i servizi offerti si occupa anche del recupero di tutta la documentazione e le autorizzazioni necessarie per il recupero e il trasferimento della salma, anche oltre i confini nazionali.',
      'Lo staff con professionalità e competenza, di cui la famiglia del defunto ha bisogno nel momento di dolore e sofferenza, curerà in ogni dettaglio l\'allestimento della cerimonia e il trasporto funebre, sia sul territorio nazionale che internazionale, disponendo di mezzi eleganti e sicuri.',
      'Le onoranze Funebri Pecorari oggi rappresentano un punto di riferimento per tutto il territorio modenese ed in particolare per le zone di Modena, Nonantola e Ravarino.',
    ],
    galleryImages: [
      { src: 'https://image.qwenlm.ai/generated-images/d1782db0-f7e9-4017-a431-75b6398d52e9/_result.png', alt: 'Carro funebre elegante con fiori bianchi' },
      { src: 'https://lirp.cdn-website.com/247e9246/dms3rep/multi/opt/202005221521032952_carro+funebre1-1920w.jpeg', alt: 'Mezzo funebre' },
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/GettyImages-174776067-1920w.jpg', alt: 'Trasporto funebre' },
    ],
  },
  {
    slug: 'cofani-e-urne-cinerarie',
    title: 'Cofani e Urne cinerarie',
    metaDescription: 'Cofani funebri in legno e urne cinerarie in diversi materiali. Casse per tumulazione, cremazione e inumazione. Ampia scelta di modelli. Pecorari Modena.',
    heroImage: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/cofani+funebri1-1065w.jpg',
    intro: [
      'Onoranze Funebri Pecorari ha a disposizione della propria clientela diversi modelli di feretri in legno, semplici, classici o dotati di finiture di pregio, decorazioni e incisioni. Le casse funebri, in diverse essenze legnose, variano sulla base della tipologia di sepoltura: casse funebri per tumulazione, casse funebri per cremazione, casse funebri per inumazione.',
      'I cofani funebri della prima tipologia sono realizzati in zinco e possono essere dotati di una cassa esterna in legno, questo perché la cassa metallica viene sigillata e previene eventuali esalazioni o percolazioni. Le casse per la cremazione sono in essenze legnose facilmente combustibili e non trattate, mentre le casse per la sepoltura in terra sono costituite da materiali facilmente degradabili.',
      'Per le famiglie che scelgono la cremazione, Onoranze funebri Pecorari fornisce un\'ampia scelta di urne cinerarie, prodotte impiegando le più recenti soluzioni di conservazione delle ceneri del defunto e del contenitore stesso, nelle quali alloggeranno per sempre. Queste speciali urne, ideali per la tumulazione possono essere conservate anche in casa. Infatti secondo recenti disposizioni di legge, oggi le ceneri dei propri cari possono essere conservate nella propria abitazione che disperse in ambiente aperto, a seconda delle esigenze, delle volontà dell\'estinto che delle regole comunali e territoriali.',
      'Le urne funebri in vendita sono disponibili in numerosi modelli e formati: diversi materiali a disposizione (vetro, ceramica, terracotta, legno, rame, bronzo, acciaio, marmo e granito), design particolari, incisioni e decorazioni ad hoc.',
    ],
    galleryImages: [
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/cofani+funebri2-1065w.jpg', alt: 'Cofano funebre in legno' },
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/cofani+funebri-1065w.jpg', alt: 'Cassa funebre classica' },
      { src: 'https://irp-cdn-website.com/247e9246/dms3rep/multi/opt/202005221521231240_Urne1-1065w.jpeg', alt: 'Urna cineraria' },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
