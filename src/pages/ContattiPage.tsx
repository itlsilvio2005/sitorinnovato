import { useState } from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function ContattiPage() {
  const [inviato, setInviato] = useState(false);
  const [formData, setFormData] = useState({ nome: '', cognome: '', email: '', telefono: '', messaggio: '', privacy: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form contatti (demo):', formData);
    setInviato(true);
    setFormData({ nome: '', cognome: '', email: '', telefono: '', messaggio: '', privacy: false });
  };

  return (
    <main className="py-12 md:py-16 bg-tortora-50 min-h-screen">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">Contatti</h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            L'agenzia funebre Pecorari disponibile 24 ore su 24, con cortesia e affidabilità vi aiuterà nel momento difficile della perdita della persona amata. Non abbiate fretta in una situazione così delicata, venite presso i nostri uffici in via Nonantolana 555 a Modena e prendetevi il tempo necessario per scegliere ogni elemento, con l'accortezza di rispettare sempre la volontà del defunto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-serif text-2xl text-text-primary mb-6">Compila il modulo per richiedere maggiori informazioni</h2>
            <p className="text-sm text-text-muted mb-6">* Campi obbligatori</p>

            {inviato && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6 text-[15px]">
                Grazie per averci contattato. Ti risponderemo il più presto possibile.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl border border-tortora-200 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contatto-nome" className="block text-sm font-semibold text-text-primary mb-1">*Nome</label>
                  <input
                    id="contatto-nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-3 py-2.5 border border-tortora-200 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-tortora-500/20 focus:border-tortora-500"
                  />
                </div>
                <div>
                  <label htmlFor="contatto-cognome" className="block text-sm font-semibold text-text-primary mb-1">*Cognome</label>
                  <input
                    id="contatto-cognome"
                    type="text"
                    required
                    value={formData.cognome}
                    onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                    className="w-full px-3 py-2.5 border border-tortora-200 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-tortora-500/20 focus:border-tortora-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contatto-email" className="block text-sm font-semibold text-text-primary mb-1">*Email</label>
                <input
                  id="contatto-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 border border-tortora-200 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-tortora-500/20 focus:border-tortora-500"
                />
              </div>

              <div>
                <label htmlFor="contatto-telefono" className="block text-sm font-semibold text-text-primary mb-1">Telefono</label>
                <input
                  id="contatto-telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full px-3 py-2.5 border border-tortora-200 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-tortora-500/20 focus:border-tortora-500"
                />
              </div>

              <div>
                <label htmlFor="contatto-messaggio" className="block text-sm font-semibold text-text-primary mb-1">*Messaggio</label>
                <textarea
                  id="contatto-messaggio"
                  required
                  rows={5}
                  value={formData.messaggio}
                  onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                  className="w-full px-3 py-2.5 border border-tortora-200 rounded-lg text-[15px] focus:outline-none focus:ring-2 focus:ring-tortora-500/20 focus:border-tortora-500 resize-none"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="contatto-privacy"
                  type="checkbox"
                  required
                  checked={formData.privacy}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  className="mt-1 rounded border-tortora-300"
                />
                <label htmlFor="contatto-privacy" className="text-[15px] text-text-secondary">
                  Ho letto l'informativa e autorizzo il trattamento dei miei dati personali per le finalità ivi indicate. *
                </label>
              </div>

              <button
                type="submit"
                className="bg-tortora-700 text-white px-6 py-3 rounded-md hover:bg-tortora-800 transition-colors font-semibold text-[15px]"
              >
                Invia messaggio
              </button>
            </form>
          </div>

          {/* Info sedi */}
          <div>
            <h2 className="font-serif text-2xl text-text-primary mb-6">Sedi e recapiti</h2>

            <div className="space-y-6 mb-8">
              {/* Modena */}
              <div className="bg-white border border-tortora-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-serif text-lg text-text-primary mb-3">Modena — Via Nonantolana, 555</h3>
                <div className="space-y-2 text-[15px] text-text-secondary">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-tortora-700 shrink-0" />
                    Via Nonantolana, 555 — 41122 Modena (MO)
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-tortora-700 shrink-0" />
                    <a href="tel:+39059260667" className="hover:text-tortora-800 transition-colors">+39 059 260667</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-tortora-700 shrink-0" />
                    <a href="tel:+393387277095" className="hover:text-tortora-800 transition-colors">+39 338 7277095 (Cellulare)</a>
                  </p>
                </div>
              </div>

              {/* Nonantola */}
              <div className="bg-white border border-tortora-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-serif text-lg text-text-primary mb-3">Nonantola — Piazza Liberazione, 34</h3>
                <div className="space-y-2 text-[15px] text-text-secondary">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-tortora-700 shrink-0" />
                    Piazza Liberazione, 34 — 41015 Nonantola (MO)
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-tortora-700 shrink-0" />
                    <a href="tel:+39059549279" className="hover:text-tortora-800 transition-colors">+39 059 549279</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-tortora-700 shrink-0" />
                    <a href="tel:+393387277095" className="hover:text-tortora-800 transition-colors">+39 338 7277095 (Cellulare)</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Orari */}
            <div className="bg-white border border-tortora-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-tortora-700" />
                <h3 className="font-serif text-lg text-text-primary">Orari di apertura</h3>
              </div>
              <p className="text-text-secondary text-[15px]">
                Lun — Dom: 00:00 — 23:59
              </p>
              <p className="text-text-secondary text-[15px] mt-1">
                Servizio attivo 24 ore su 24, 7 giorni su 7
              </p>
            </div>

            {/* Email */}
            <div className="mt-6 text-center bg-white border border-tortora-200 rounded-xl p-6 shadow-sm">
              <p className="text-text-secondary text-[15px]">
                Potete contattarci anche via email:
              </p>
              <a href="mailto:pecorarisrl@yahoo.it" className="text-tortora-800 font-semibold hover:text-tortora-900 transition-colors text-lg">
                pecorarisrl@yahoo.it
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
