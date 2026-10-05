import { useState } from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function ContattiPage() {
  const [inviato, setInviato] = useState(false);
  const [formData, setFormData] = useState({ nome: '', cognome: '', email: '', telefono: '', messaggio: '', privacy: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form contatti:', formData);
    setInviato(true);
    setFormData({ nome: '', cognome: '', email: '', telefono: '', messaggio: '', privacy: false });
  };

  return (
    <main className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-['Antic_Didone'] text-3xl md:text-4xl text-black mb-4 font-normal">Contatti</h1>
          <p className="text-[#666] max-w-2xl mx-auto">
            L'agenzia funebre Pecorari è sempre a vostra disposizione, tutti i giorni a qualsiasi ora. Non abbiate fretta in una situazione così delicata, venite presso i nostri uffici e prendetevi il tempo necessario per scegliere ogni elemento, con l'accortezza di rispettare sempre la volontà del defunto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-['Antic_Didone'] text-2xl text-black mb-6 font-normal">Compila il modulo per richiedere maggiori informazioni</h2>
            <p className="text-sm text-text-muted mb-6">* Campi obbligatori</p>

            {inviato && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6 text-sm">
                Grazie per averci contattato. Ti risponderemo il più presto possibile.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contatto-nome" className="block text-sm font-medium text-text mb-1">*Nome</label>
                  <input
                    id="contatto-nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="contatto-cognome" className="block text-sm font-medium text-text mb-1">*Cognome</label>
                  <input
                    id="contatto-cognome"
                    type="text"
                    required
                    value={formData.cognome}
                    onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contatto-email" className="block text-sm font-medium text-text mb-1">*Email</label>
                <input
                  id="contatto-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="contatto-telefono" className="block text-sm font-medium text-text mb-1">Telefono</label>
                <input
                  id="contatto-telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="contatto-messaggio" className="block text-sm font-medium text-text mb-1">*Messaggio</label>
                <textarea
                  id="contatto-messaggio"
                  required
                  rows={5}
                  value={formData.messaggio}
                  onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="contatto-privacy"
                  type="checkbox"
                  required
                  checked={formData.privacy}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  className="mt-1 rounded border-border"
                />
                <label htmlFor="contatto-privacy" className="text-sm text-text-muted">
                  Ho letto l'informativa e autorizzo il trattamento dei miei dati personali per le finalità ivi indicate. *
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#68CCD1] text-white px-6 py-3 rounded-md hover:bg-[#4FB8BD] transition-colors font-medium text-sm"
              >
                Invia messaggio
              </button>
            </form>
          </div>

          {/* Info sedi */}
          <div>
            <h2 className="font-['Antic_Didone'] text-2xl text-black mb-6 font-normal">Sedi e recapiti</h2>

            <div className="space-y-6 mb-8">
              {/* Modena */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg text-primary font-semibold mb-3">Modena — Via Nonantolana, 555</h3>
                <div className="space-y-2 text-sm text-text-muted">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    Via Nonantolana, 555 — 41122 Modena (MO)
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent shrink-0" />
                    <a href="tel:+39059260667" className="hover:text-primary transition-colors">+39 059 260667</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent shrink-0" />
                    <a href="tel:+393387277095" className="hover:text-primary transition-colors">+39 338 7277095 (Cellulare)</a>
                  </p>
                </div>
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.5!2d10.95!3d44.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlhIE5vbmFudG9sYW5hIDU1NSwgNDEyMiBNb2RlbmEgTU8!5e0!3m2!1sit!2sit!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa sede Modena"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>

              {/* Nonantola */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="font-serif text-lg text-primary font-semibold mb-3">Nonantola — Piazza Liberazione, 34</h3>
                <div className="space-y-2 text-sm text-text-muted">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    Piazza Liberazione, 34 — 41015 Nonantola (MO)
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent shrink-0" />
                    <a href="tel:+39059549279" className="hover:text-primary transition-colors">+39 059 549279</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent shrink-0" />
                    <a href="tel:+393387277095" className="hover:text-primary transition-colors">+39 338 7277095 (Cellulare)</a>
                  </p>
                </div>
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836!2d11.09!3d44.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGlhenphIExpYmVyYXppb25lIDM0LCA0MTAxNSBOb25hbnRvbGEgTU8!5e0!3m2!1sit!2sit!4v1"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mappa sede Nonantola"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Orari */}
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="font-serif text-lg text-primary font-semibold">Orari di apertura</h3>
              </div>
              <p className="text-text-muted text-sm">
                Lun — Dom: 00:00 — 23:59
              </p>
              <p className="text-text-muted text-sm mt-1">
                Servizio attivo 24 ore su 24, 7 giorni su 7
              </p>
            </div>

            {/* Email */}
            <div className="mt-6 text-center">
              <p className="text-text-muted text-sm">
                Potete contattarci anche via email:
              </p>
              <a href="mailto:onoranzefunebripecorari@gmail.com" className="text-primary font-medium hover:text-primary-light transition-colors">
                onoranzefunebripecorari@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
