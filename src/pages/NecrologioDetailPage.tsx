import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Clock, Church, Share2, Mail, Copy, Send, Camera, Flower, Lock, MessageCircle } from 'lucide-react';
import { getNecrologio, Necrologio } from '../lib/necrologi';
import { getInitials, formatDateIT, formatDateTimeCerimonia, getRelativeTime } from '../lib/utils';
import Modal from '../components/Modal';

export default function NecrologioDetailPage() {
  const { slug } = useParams<{ comune: string; slug: string }>();
  const [necrologio, setNecrologio] = useState<Necrologio | null>(null);
  const [loading, setLoading] = useState(true);
  const [showMessaggioModal, setShowMessaggioModal] = useState(false);
  const [showFioriModal, setShowFioriModal] = useState(false);
  const [messaggioInviato, setMessaggioInviato] = useState(false);
  const [fioriInviato, setFioriInviato] = useState(false);
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
    console.log('Messaggio inviato (demo):', { ...formData, necrologioId: necrologio?.id });
    setMessaggioInviato(true);
    setFormData({ nome: '', cognome: '', cellulare: '', email: '', messaggio: '', privacy: false, visibileFamiglia: false });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  if (loading) {
    return (
      <div className="max-w-container mx-auto px-4 py-16 text-center">
        <p className="text-text-secondary">Caricamento...</p>
      </div>
    );
  }

  if (!necrologio) {
    return (
      <div className="max-w-container mx-auto px-4 py-16 text-center">
        <h1 className="font-serif text-2xl text-text-primary mb-4">Necrologio non trovato</h1>
        <Link to="/necrologi" className="text-tortora-800 hover:text-tortora-900">← Tutti i necrologi</Link>
      </div>
    );
  }

  const initials = getInitials(necrologio.nome);

  return (
    <main className="py-12 md:py-16 bg-tortora-50 min-h-screen">
      <div className="max-w-container mx-auto px-4">
        <Link to="/necrologi" className="inline-flex items-center gap-2 text-[15px] text-text-muted hover:text-tortora-800 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Tutti i necrologi
        </Link>

        {/* Header */}
        <div className="bg-white border border-tortora-200 rounded-xl p-6 md:p-10 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 rounded-full bg-tortora-700 flex items-center justify-center shadow-sm">
                <span className="font-serif text-white text-3xl">{initials}</span>
              </div>
              <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-tortora-300 scale-110"></div>
            </div>

            <div className="flex-1">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Nel ricordo di</p>
              <h1 className="font-serif text-3xl md:text-4xl text-text-primary mb-2">{necrologio.nome}</h1>
              <p className="text-text-secondary">
                <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4 text-tortora-700" /> {necrologio.comune}</span>
              </p>
              <p className="text-text-secondary mt-2 text-[15px]">
                Nato/a il {formatDateIT(necrologio.dataNascita)} · Ci ha lasciati il {formatDateIT(necrologio.dataDecesso)}
              </p>
              <p className="text-text-secondary text-[15px]">di anni {necrologio.eta}</p>
            </div>
          </div>

          {/* Annuncio */}
          <div className="mt-6 pt-6 border-t border-tortora-200">
            <p className="text-text-primary text-[17px] leading-relaxed italic">"{necrologio.annuncio}"</p>
          </div>
        </div>

        {/* Il commiato */}
        <section className="mb-8">
          <h2 className="font-serif text-2xl text-text-primary mb-6">Il commiato</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cerimonia */}
            <div className="bg-white border border-tortora-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Church className="w-5 h-5 text-tortora-700" />
                <h3 className="font-bold text-tortora-800 text-sm uppercase tracking-wider">Cerimonia</h3>
              </div>
              <p className="text-text-primary text-[15px] font-medium">{formatDateTimeCerimonia(necrologio.cerimonia.data, necrologio.cerimonia.ora)}</p>
              <p className="text-text-secondary text-sm mt-1">{necrologio.cerimonia.luogo}</p>
              <p className="text-text-secondary text-sm">{necrologio.cerimonia.indirizzo}</p>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(necrologio.cerimonia.indirizzo)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-tortora-800 hover:text-tortora-900 mt-2 transition-colors font-semibold"
              >
                <MapPin className="w-3 h-3" /> Indicazioni stradali
              </a>
            </div>

            {/* Camera ardente */}
            <div className="bg-white border border-tortora-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-tortora-700" />
                <h3 className="font-bold text-tortora-800 text-sm uppercase tracking-wider">Camera Ardente</h3>
              </div>
              <p className="text-text-primary text-[15px] font-medium">{necrologio.cameraArdente.luogo}</p>
              <p className="text-text-secondary text-sm mt-1">{necrologio.cameraArdente.indirizzo}</p>
              <p className="text-text-secondary text-sm mt-2">Oggi: {necrologio.cameraArdente.orariOggi}</p>
              <p className="text-text-secondary text-sm">Domani: {necrologio.cameraArdente.orariDomani}</p>
            </div>

            {/* Sepoltura/Cremazione */}
            {(necrologio.sepoltura || necrologio.cremazione) && (
              <div className="bg-white border border-tortora-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-tortora-800 text-sm uppercase tracking-wider mb-3">
                  {necrologio.cremazione ? 'Cremazione' : 'Sepoltura'}
                </h3>
                <p className="text-text-secondary text-[15px]">{necrologio.cremazione || necrologio.sepoltura}</p>
              </div>
            )}
          </div>
        </section>

        {/* Azioni */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowMessaggioModal(true)}
              className="inline-flex items-center gap-2 bg-tortora-700 text-white px-4 py-2.5 rounded-md hover:bg-tortora-800 transition-colors text-[15px] font-semibold"
            >
              <Send className="w-4 h-4" />
              Invia un messaggio
            </button>
            <button className="inline-flex items-center gap-2 bg-white border border-tortora-200 text-text-primary px-4 py-2.5 rounded-md hover:bg-tortora-50 transition-colors text-[15px] font-semibold">
              <Camera className="w-4 h-4" />
              Invia una foto
            </button>
            <button
              onClick={() => setShowFioriModal(true)}
              className="inline-flex items-center gap-2 bg-tortora-800 text-white px-4 py-2.5 rounded-md hover:bg-tortora-900 transition-colors text-[15px] font-semibold"
            >
              <Flower className="w-4 h-4" />
              Invia dei fiori
            </button>
            <button className="inline-flex items-center gap-2 bg-white border border-tortora-200 text-text-muted px-4 py-2.5 rounded-md hover:bg-tortora-50 transition-colors text-[15px]">
              <Lock className="w-4 h-4" />
              Area famiglia
            </button>
          </div>
        </section>

        {/* Messaggi di cordoglio */}
        <section className="mb-8">
          <h2 className="font-serif text-2xl text-text-primary mb-6">Messaggi di cordoglio</h2>

          {necrologio.pensieri.filter(p => !p.visibileFamiglia).length > 0 ? (
            <div className="space-y-4 mb-8">
              {necrologio.pensieri.filter(p => !p.visibileFamiglia).map((pensiero, i) => (
                <div key={i} className="border-l-2 border-tortora-700 pl-4 py-3 bg-white rounded-r-lg shadow-sm">
                  <p className="text-text-primary text-[15px] italic">"{pensiero.testo}"</p>
                  <p className="text-xs text-text-muted mt-2">— {pensiero.autore}, {getRelativeTime(pensiero.data)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary text-[15px] mb-8">Nessun messaggio di cordoglio ancora. Sii il primo a lasciare un pensiero.</p>
          )}
        </section>

        {/* Condividi */}
        <section className="border-t border-tortora-200 pt-8">
          <h3 className="text-sm font-semibold text-text-primary mb-3">Condividi</h3>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Ricordo di ${necrologio.nome} - ${window.location.href}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors text-[15px]"
            >
              <Share2 className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`mailto:?subject=Ricordo di ${necrologio.nome}&body=${encodeURIComponent(window.location.href)}`}
              className="inline-flex items-center gap-2 bg-white border border-tortora-200 text-text-primary px-4 py-2 rounded-md hover:bg-tortora-50 transition-colors text-[15px]"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 bg-white border border-tortora-200 text-text-primary px-4 py-2 rounded-md hover:bg-tortora-50 transition-colors text-[15px]"
            >
              <Copy className="w-4 h-4" />
              Copia link
            </button>
          </div>
        </section>

        {/* Pratica */}
        <div className="mt-8 pt-6 border-t border-tortora-200 text-center">
          <p className="text-sm text-text-muted">
            Pratica curata da <strong>Onoranze Funebri Pecorari</strong> · <a href="tel:+39059260667" className="text-tortora-800 hover:text-tortora-900 font-semibold">059 260667</a>
          </p>
        </div>
      </div>

      {/* Modal Messaggio */}
      <Modal isOpen={showMessaggioModal} onClose={() => { setShowMessaggioModal(false); setMessaggioInviato(false); }} title="Invia un messaggio">
        {messaggioInviato ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-tortora-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-tortora-700" />
            </div>
            <p className="text-text-primary font-semibold text-lg mb-2">Grazie, messaggio inviato (demo)</p>
            <p className="text-text-secondary">Il vostro messaggio è stato registrato.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1">Nome *</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-3 py-2 border border-tortora-200 rounded-md text-[15px] focus:outline-none focus:border-tortora-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1">Cognome *</label>
                <input
                  type="text"
                  required
                  value={formData.cognome}
                  onChange={(e) => setFormData({ ...formData, cognome: e.target.value })}
                  className="w-full px-3 py-2 border border-tortora-200 rounded-md text-[15px] focus:outline-none focus:border-tortora-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1">Cellulare *</label>
              <input
                type="tel"
                required
                value={formData.cellulare}
                onChange={(e) => setFormData({ ...formData, cellulare: e.target.value })}
                className="w-full px-3 py-2 border border-tortora-200 rounded-md text-[15px] focus:outline-none focus:border-tortora-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1">Email (facoltativa)</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-tortora-200 rounded-md text-[15px] focus:outline-none focus:border-tortora-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1">Messaggio *</label>
              <textarea
                required
                rows={4}
                value={formData.messaggio}
                onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                className="w-full px-3 py-2 border border-tortora-200 rounded-md text-[15px] focus:outline-none focus:border-tortora-500 resize-none"
              />
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={formData.visibileFamiglia}
                onChange={(e) => setFormData({ ...formData, visibileFamiglia: e.target.checked })}
                className="mt-1 rounded border-tortora-300"
                id="visibileFamiglia"
              />
              <label htmlFor="visibileFamiglia" className="text-[15px] text-text-secondary">
                Visibile solo alla famiglia
              </label>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                checked={formData.privacy}
                onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                className="mt-1 rounded border-tortora-300"
                id="privacy"
              />
              <label htmlFor="privacy" className="text-[15px] text-text-secondary">
                Ho letto l'informativa e autorizzo il trattamento dei miei dati personali. *
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-tortora-700 text-white py-2.5 rounded-md hover:bg-tortora-800 transition-colors font-semibold"
            >
              Invia messaggio
            </button>
          </form>
        )}
      </Modal>

      {/* Modal Fiori */}
      <Modal isOpen={showFioriModal} onClose={() => { setShowFioriModal(false); setFioriInviato(false); }} title="Invia fiori">
        {fioriInviato ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-tortora-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flower className="w-8 h-8 text-tortora-700" />
            </div>
            <p className="text-text-primary font-semibold text-lg mb-2">Grazie!</p>
            <p className="text-text-secondary">Messaggio inviato (demo). Per ordinare fiori, chiamate il 059 260667.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setFioriInviato(true); }} className="space-y-4">
            <p className="text-text-secondary text-[15px]">Per {necrologio.nome}</p>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1">Nome *</label>
              <input type="text" required className="w-full px-3 py-2 border border-tortora-200 rounded-md text-[15px] focus:outline-none focus:border-tortora-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1">Messaggio</label>
              <textarea rows={3} className="w-full px-3 py-2 border border-tortora-200 rounded-md text-[15px] focus:outline-none focus:border-tortora-500 resize-none" />
            </div>
            <button type="submit" className="w-full bg-tortora-700 text-white py-2.5 rounded-md hover:bg-tortora-800 transition-colors font-semibold">
              Invia richiesta fiori
            </button>
          </form>
        )}
      </Modal>
    </main>
  );
}
