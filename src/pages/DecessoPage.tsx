import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';

const decessoContent: Record<string, { title: string; intro: string; sections: { title: string; content: string }[] }> = {
  'in-caso-di-decesso': {
    title: 'Cosa fare in caso di decesso',
    intro: 'In caso di decesso chiamate subito la nostra sede operativa più vicina, Modena o Nonantola, H24 al numero: 338 7277095. Con grande umanità e discrezione, vi sosterremo e aiuteremo nell\'affrontare il lutto.',
    sections: [
      {
        title: 'Decesso in abitazione',
        content: 'Quando il decesso di una persona cara, o un familiare, avviene in casa, la prima cosa da fare è avvertire il medico curante, il quale ne denuncia la causa compilando la scheda ISTAT. Entro le 24h successive al momento del decesso sarà necessario notificare la dichiarazione del decesso presso l\'ufficio di Stato Civile del Comune. Durante questo lasso di tempo, subito dopo aver avvertito il medico curante è consigliabile contattare l\'impresa funebre.',
      },
      {
        title: 'Decesso in ospedale o struttura sanitaria',
        content: 'In caso di decesso in ospedale o presso una struttura sanitaria, i familiari sono esonerati da alcune incombenze, diversamente da quanto accade in caso di decesso all\'interno di un\'abitazione privata. Sarà infatti l\'Amministrazione ospedaliera, compresi medici e infermiere, a occuparsi dei doveri burocratici e a compilare tutti i moduli e i certificati necessari per la dichiarazione di morte. Dal momento della constatazione della morte dovranno comunque passare le tassative 24 ore. La salma viene trasferita in una camera mortuaria dove rimarrà sotto osservazione.',
      },
      {
        title: 'Decesso in luogo pubblico',
        content: 'In caso di decesso in un luogo pubblico, si deve chiamare il 113 o il 112 avvertendo l\'autorità giudiziaria che dopo gli opportuni accertamenti e previa autorizzazione del procuratore, darà disposizioni per la rimozione della salma e trasferirla presso l\'obitorio di competenza per effettuare l\'autopsia o per affidare la salma alla famiglia per lo svolgimento dell\'esequie.',
      },
    ],
  },
  'dopo-il-decesso': {
    title: 'Cosa fare dopo il decesso',
    intro: '',
    sections: [
      {
        title: 'Comunicazione all\'INPS',
        content: 'Se il familiare defunto era pensionato, la prima cosa che devono fare i suoi eredi è comunicare la morte all\'Inps o a qualsiasi altro ente che gli erogava la pensione. La comunicazione del decesso deve essere presentata all\'istituto di competenza tramite i patronati o sindacati, presentando una auto certificazione di decesso e restituendo il libretto di pensione. In ogni caso, per qualsiasi necessità, la nostra Agenzia funebre sarà in grado di consigliarti la strada più veloce e opportuna.',
      },
      {
        title: 'Successione e testamento',
        content: 'Gli eredi sono tenuti alla presentazione della dichiarazione di successione, presso L\'Agenzia delle Entrate competente, entro dodici mesi. In presenza di più eredi non vi è alcuna gerarchia in merito al soggetto onerato. Le dichiarazioni contenute nel testamento contenute hanno generalmente rilevanza patrimoniale. La strada più idonea da perseguire in presenza della notifica di un testamento è rivolgersi ad un notaio o patronato competente onde evitare dolorosi contenziosi familiari.',
      },
      {
        title: 'Banca, poste e assicurazioni',
        content: 'I familiari interessati si occuperanno di fornire agli istituti bancari una copia del certificato di morte. Il conto sarà momentaneamente "sospeso" in attesa della produzione dell\'atto di successione. Subito dopo la morte della persona cara, i familiari devono informare, con relativo certificato di morte, le varie società intestatarie di polizze assicurative, tra cui: auto, vita, casa, famiglia, sanitaria etc.',
      },
      {
        title: 'Dichiarazione dei redditi e detrazione delle spese funebri',
        content: 'Le spese funebri sono detraibili dal 730, con riferimento a ciascun decesso, per un importo non superiore a 1.550 euro. Questo limite resta fermo anche se più soggetti sostengono la spesa. La dichiarazione ai fini della detrazione per le spese funebri dell\'anno in cui avviene il decesso, deve essere presentata dagli eredi.',
      },
    ],
  },
};

export default function DecessoPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? decessoContent[slug] : null;

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
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Torna alla home
        </Link>

        <h1 className="font-['Antic_Didone'] text-3xl md:text-4xl text-black mb-6 font-normal">{content.title}</h1>

        {content.intro && (
          <p className="text-[#666] leading-relaxed mb-8 text-lg">{content.intro}</p>
        )}

        <div className="space-y-8">
          {content.sections.map((section, i) => (
            <div key={i} className="bg-[#f7f7f7] border border-[#f0f0f0] rounded-xl p-6 md:p-8">
              <h2 className="font-['Antic_Didone'] text-xl md:text-2xl text-black mb-4 font-normal">{section.title}</h2>
              <p className="text-[#666] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

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
