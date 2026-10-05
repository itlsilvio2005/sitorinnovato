import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Clock, Church, Share2, Mail, Copy, Send, Camera, Flower, Lock } from 'lucide-react';
import { getNecrologio, Necrologio } from '../lib/necrologi';
import { getInitials, formatDateIT, formatDateTimeCerimonia, getRelativeTime } from '../lib/utils';

export default function NecrologioDetailPage() {
  const { slug } = useParams<{ comune: string; slug: string }>();
  const [necrologio, setNecrologio] = useState<Necrologio | null>(null);
  const [loading, setLoading] = useState(true);
  const [messaggioInviato, setMessaggioInviato] = useState(false);
  const [formData, setFormData] = useState({ nome: '', cognome: '', cellulare: '', email: '', messaggio: '', privacy: false, visibileFamiglia: false });

  useEffect(() => {
    if (slug) {
      getNecrologio(slug).then((data) => {
        setNecrologio(data || null);
        setLoading(false);
      });
    }
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Messaggio inviato:', { ...formData, necrologioId: necrologio?.id });
    setMessaggioInviato(true);
    setFormData({ nome: '', cognome: '', cellulare: '', email: '', messaggio: '', privacy: false, visibileFamiglia: false });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-text-muted">Caricamento...</p>
      </div>
    );
  }

  if (!necrologio) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-2xl text-primary mb-4">Necrologio non trovato</h1>
        <Link to="/necrologi" className="text-primary hover:text-primary-light">← Tutti i necrologi</Link>
      </div>
    );
  }

  const initials = getInitials(necrologio.nome);

  return (
    <main className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/necrologi" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Tutti i necrologi
        </Link>

        {/* Header */}
        <div className="bg-[#f7f7f7] border border-[#e0e0e0] rounded-xl p-6 md:p-10 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-[#B8A394]/30 flex items-center justify-center shadow-sm">
                <span className="font-['Antic_Didone'] text-[#463939] text-2xl md:text-3xl">{initials}</span>
              </div>
              <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#B8A394]/20 scale-110"></div>
            </div>

            <div className="flex-1">
              <p className="text-xs text-[#999] uppercase tracking-wider mb-1">Nel ricordo di</p>
              <h1 className="font-['Antic_Didone'] text-2xl md:text-4xl text-black mb-2 font-normal">{necrologio.nome}</h1>
              <p className="text-text-muted">
                <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4 text-accent" /> {necrologio.comune}</span>
              </p>
              <p className="text-text-muted mt-2 text-sm">
                Nato/a il {formatDateIT(necrologio.dataNascita)} · Ci ha lasciati il {formatDateIT(necrologio.dataDecesso)}
              </p>
              <p className="text-text-muted text-sm">di anni {necrologio.eta}</p>
            </div>
          </div>

          {/* Annuncio */}
          <div className="mt-6 pt-6 border-t border-border-light">
            <p className="text-text leading-relaxed italic">"{necrologio.annuncio}"</p>
          </div>
        </div>

        {/* Il commiato */}
        <section className="mb-8">
          <h2 className="font-['Antic_Didone'] text-2xl text-black mb-6 font-normal">Il commiato</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cerimonia */}
            <div className="bg-[#f7f7f7] border border-[#f0f0f0] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Church className="w-5 h-5 text-[#B8A394]" />
                <h3 className="font-semibold text-[#B8A394] text-sm uppercase tracking-wide">Cerimonia</h3>
              </div>
              <p className="text-text font-medium">{formatDateTimeCerimonia(necrologio.cerimonia.data, necrologio.cerimonia.ora)}</p>
              <p className="text-text-muted text-sm mt-1">{necrologio.cerimonia.luogo}</p>
              <p className="text-text-muted text-sm">{necrologio.cerimonia.indirizzo}</p>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(necrologio.cerimonia.indirizzo)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary-light mt-2 transition-colors"
              >
                <MapPin className="w-3 h-3" /> Indicazioni stradali
              </a>
            </div>

            {/* Camera ardente */}
            <div className="bg-[#f7f7f7] border border-[#f0f0f0] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-[#B8A394]" />
                <h3 className="font-semibold text-[#B8A394] text-sm uppercase tracking-wide">Camera Ardente</h3>
              </div>
              <p className="text-text font-medium">{necrologio.cameraArdente.luogo}</p>
              <p className="text-text-muted text-sm mt-1">{necrologio.cameraArdente.indirizzo}</p>
              <p className="text-text-muted text-sm mt-2">Oggi: {necrologio.cameraArdente.orariOggi}</p>
              <p className="text-text-muted text-sm">Domani: {necrologio.cameraArdente.orariDomani}</p>
            </div>

            {/* Sepoltura/Cremazione */}
            {(necrologio.sepoltura || necrologio.cremazione) && (
              <div className="bg-surface border border-border-light rounded-xl p-5">
                <h3 className="font-semibold text-primary text-sm uppercase tracking-wide mb-3">
                  {necrologio.cremazione ? 'Cremazione' : 'Sepoltura'}
                </h3>
                <p className="text-text-muted">{necrologio.cremazione || necrologio.sepoltura}</p>
              </div>
            )}
          </div>
        </section>

        {/* Azioni */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/necrologi/${necrologio.comune.toLowerCase()}/${necrologio.slug}#messaggio`}
              className="inline-flex items-center gap-2 bg-[#B8A394] text-white px-4 py-2.5 rounded-md hover:bg-[#9C8575] transition-colors text-sm font-medium"
            >
              <Send className="w-4 h-4" />
              Invia un messaggio
            </Link>
            <button className="inline-flex items-center gap-2 bg-[#f7f7f7] border border-[#e0e0e0] text-[#666] px-4 py-2.5 rounded-md hover:bg-[#e0e0e0] transition-colors text-sm font-medium">
              <Camera className="w-4 h-4" />
              Invia una foto
            </button>
            <a
              href="tel:+39059260667"
              className="inline-flex items-center gap-2 bg-[#463939] text-white px-4 py-2.5 rounded-md hover:bg-[#5C4C4C] transition-colors text-sm font-medium"
            >
              <Flower className="w-4 h-4" />
              Invia dei fiori
            </a>
            <button className="inline-flex items-center gap-2 bg-[#f7f7f7] border border-[#e0e0e0] text-[#888] px-4 py-2.5 rounded-md hover:bg-[#e0e0e0] transition-colors text-sm">
              <Lock className="w-4 h-4" />
              Area famiglia
            </button>
          </div>
        </section>

        {/* Messaggi di cordoglio */}
        <section className="mb-8">
          <h2 className="font-['Antic_Didone'] text-2xl text-black mb-6 font-normal">Messaggi di cordoglio</h2>

              {necrologio.pensieri.length > 0 ? (
            <div className="space-y-4 mb-8">
              {necrologio.pensieri.filter(p => !p.visibileFamiglia).map((pensiero, i) => (
                <div key={i} className="border-l-2 border-[#B8A394] pl-4 py-3 bg-[#f7f7f7] rounded-r-lg">
                  <p className="text-[#666] italic">"{pensiero.testo}"</p>
                  <p className="text-xs text-[#888] mt-2">— {pensiero.autore}, {getRelativeTime(pensiero.data)}</p>
                </div>
              ))}
            </div>          ) : (
            <p className="text-[#666] text-sm mb-8">Nessun messaggio di cordoglio ancora. Sii il primo a lasciare un pensiero.</p>
          )}

          {/* Form messaggio */}
          <div id="messaggio" className="bg-[#f7f7f7] border border-[#e0e0e0] rounded-xl p-6">
            <h3 className="font-['Antic_Didone'] text-xl text-black mb-4 font-normal">Lascia un messaggio</h3>

            {messaggioInviato && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-4 text-sm">
                Grazie per il tuo messaggio. Verrà pubblicato dopo approvazione.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-text mb-1">Nome e cognome *</label>
                  <input
                    id="nome"
                    type="text"
                    required
                    value={formData.nome + ' ' + formData.cognome}
                    onChange={(e) => {
                      const parts = e.target.value.split(' ');
                      setFormData({ ...formData, nome: parts[0] || '', cognome: parts.slice(1).join(' ') || '' });
                    }}
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="cellulare" className="block text-sm font-medium text-text mb-1">Cellulare *</label>
                  <input
                    id="cellulare"
                    type="tel"
                    required
                    value={formData.cellulare}
                    onChange={(e) => setFormData({ ...formData, cellulare: e.target.value })}
                    className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email (facoltativa)</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="messaggio" className="block text-sm font-medium text-text mb-1">Messaggio *</label>
                <textarea
                  id="messaggio"
                  required
                  rows={4}
                  value={formData.messaggio}
                  onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                  className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="visibileFamiglia"
                  type="checkbox"
                  checked={formData.visibileFamiglia}
                  onChange={(e) => setFormData({ ...formData, visibileFamiglia: e.target.checked })}
                  className="mt-1 rounded border-border"
                />
                <label htmlFor="visibileFamiglia" className="text-sm text-text-muted">
                  Visibile solo alla famiglia
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="privacy"
                  type="checkbox"
                  required
                  checked={formData.privacy}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  className="mt-1 rounded border-border"
                />
                <label htmlFor="privacy" className="text-sm text-text-muted">
                  Ho letto l'informativa e autorizzo il trattamento dei miei dati personali per le finalità ivi indicate. *
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#B8A394] text-white px-6 py-3 rounded-md hover:bg-[#9C8575] transition-colors font-medium text-sm"
              >
                Invia messaggio
              </button>
            </form>
          </div>
        </section>

        {/* Condividi */}
        <section className="border-t border-[#e0e0e0] pt-8">
          <h3 className="text-sm font-medium text-[#666] mb-3">Condividi</h3>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Ricordo di ${necrologio.nome} - ${window.location.href}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors text-sm"
            >
              <Share2 className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`mailto:?subject=Ricordo di ${necrologio.nome}&body=${encodeURIComponent(window.location.href)}`}
              className="inline-flex items-center gap-2 bg-[#f7f7f7] border border-[#e0e0e0] text-[#666] px-4 py-2 rounded-md hover:bg-[#e0e0e0] transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 bg-[#f7f7f7] border border-[#e0e0e0] text-[#666] px-4 py-2 rounded-md hover:bg-[#e0e0e0] transition-colors text-sm"
            >
              <Copy className="w-4 h-4" />
              Copia link
            </button>
          </div>
        </section>

        {/* Pratica */}
        <div className="mt-8 pt-6 border-t border-[#e0e0e0] text-center">
          <p className="text-sm text-[#999]">
            Pratica curata da <strong>Onoranze Funebri Pecorari</strong> · <a href="tel:+39059260667" className="text-[#B8A394] hover:text-[#9C8575]">059 260667</a>
          </p>
        </div>
      </div>
    </main>
  );
}
