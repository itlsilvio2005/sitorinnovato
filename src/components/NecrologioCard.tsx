import { Link } from 'react-router-dom';
import { MapPin, Church, Clock, ChevronDown, ChevronUp, Flower, MessageCircle, Share2 } from 'lucide-react';
import { useState } from 'react';
import { Necrologio } from '../lib/necrologi';
import { getInitials, getRelativeTime, formatDateIT, formatDateTimeCerimonia } from '../lib/utils';
import Modal from './Modal';

interface Props {
  necrologio: Necrologio;
}

export default function NecrologioCard({ necrologio }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [showFioriModal, setShowFioriModal] = useState(false);
  const [showPensieroModal, setShowPensieroModal] = useState(false);
  const [fioriInviato, setFioriInviato] = useState(false);
  const [pensieroInviato, setPensieroInviato] = useState(false);
  const initials = getInitials(necrologio.nome);
  const lastPensiero = necrologio.pensieri.length > 0 ? necrologio.pensieri[necrologio.pensieri.length - 1] : null;

  return (
    <>
      <article className="bg-white border border-tortora-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        {/* Header: avatar + nome */}
        <div className="p-5 md:p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-full bg-tortora-700 flex items-center justify-center">
                <span className="font-serif text-white text-xl">{initials}</span>
              </div>
              <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-tortora-300 scale-110"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-2xl text-text-primary mb-1">
                {necrologio.nome}
              </h3>
              <p className="text-text-secondary text-[15px]">
                di anni {necrologio.eta} · {formatDateIT(necrologio.dataNascita)} — {formatDateIT(necrologio.dataDecesso)}
              </p>
            </div>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1 bg-tortora-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
              <MapPin className="w-3 h-3" />
              {necrologio.comune}
            </span>
            <span className="inline-flex items-center gap-1 bg-tortora-50 text-tortora-800 text-xs font-semibold px-3 py-1 rounded-full border border-tortora-200">
              <Church className="w-3 h-3" />
              Rito {necrologio.rito.toLowerCase()}
            </span>
            <span className="inline-flex items-center gap-1 text-tortora-700 text-xs font-semibold px-2">
              <Clock className="w-3 h-3" />
              {getRelativeTime(necrologio.dataPubblicazione)}
            </span>
          </div>

          {/* Cerimonia + Camera ardente */}
          <div className="grid grid-cols-1 gap-3 mb-5">
            <div className="bg-tortora-50 rounded-lg p-4 border border-tortora-200">
              <p className="text-xs font-bold text-tortora-800 uppercase tracking-wider mb-2">Cerimonia</p>
              <p className="text-[15px] text-text-primary font-medium">{formatDateTimeCerimonia(necrologio.cerimonia.data, necrologio.cerimonia.ora)}</p>
              <p className="text-sm text-text-secondary mt-1">{necrologio.cerimonia.luogo}</p>
            </div>
            <div className="bg-tortora-50 rounded-lg p-4 border border-tortora-200">
              <p className="text-xs font-bold text-tortora-800 uppercase tracking-wider mb-2">Camera Ardente</p>
              <p className="text-[15px] text-text-primary font-medium">{necrologio.cameraArdente.luogo}</p>
              <p className="text-sm text-text-secondary mt-1">Oggi: {necrologio.cameraArdente.orariOggi} · Domani: {necrologio.cameraArdente.orariDomani}</p>
            </div>
          </div>

          {/* Accordion dettagli */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between py-2 text-[15px] font-semibold text-tortora-800 hover:text-tortora-900 transition-colors"
            aria-expanded={expanded}
          >
            <span>DETTAGLI: Camera ardente · Cerimonia · {necrologio.cremazione ? 'Cremazione' : 'Sepoltura'}</span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expanded && (
            <div className="pb-3 text-[15px] text-text-secondary space-y-2 border-t border-tortora-200 pt-3">
              <p><strong>Camera ardente:</strong> {necrologio.cameraArdente.indirizzo}</p>
              <p><strong>Cerimonia:</strong> {necrologio.cerimonia.luogo}, {necrologio.cerimonia.indirizzo}</p>
              {necrologio.sepoltura && <p><strong>Sepoltura:</strong> {necrologio.sepoltura}</p>}
              {necrologio.cremazione && <p><strong>Cremazione:</strong> {necrologio.cremazione}</p>}
            </div>
          )}

          {/* Ultimo pensiero */}
          {lastPensiero && (
            <div className="border-l-2 border-tortora-700 pl-4 py-2 my-4">
              <p className="text-[15px] text-text-secondary italic">"{lastPensiero.testo}"</p>
              <p className="text-xs text-text-muted mt-1">— {lastPensiero.autore}, {getRelativeTime(lastPensiero.data)} · {necrologio.pensieri.length} {necrologio.pensieri.length === 1 ? 'pensiero' : 'pensieri'}</p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2 p-5 pt-3 border-t border-tortora-200 bg-tortora-50">
          <button
            onClick={() => setShowFioriModal(true)}
            className="inline-flex items-center gap-1.5 bg-tortora-700 text-white text-xs font-semibold px-3 py-2 rounded-md hover:bg-tortora-800 transition-colors"
          >
            <Flower className="w-3.5 h-3.5" />
            Invia fiori
          </button>
          <button
            onClick={() => setShowPensieroModal(true)}
            className="inline-flex items-center gap-1.5 bg-tortora-800 text-white text-xs font-semibold px-3 py-2 rounded-md hover:bg-tortora-900 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Lascia un pensiero
          </button>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(`Ricordo di ${necrologio.nome}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 text-text-muted hover:text-green-600 transition-colors rounded-md hover:bg-white"
            aria-label="Condividi su WhatsApp"
          >
            <Share2 className="w-4 h-4" />
          </a>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-tortora-200">
          <p className="text-xs text-text-muted">
            Pratica curata da <strong>Onoranze Funebri Pecorari</strong> · 059 260667
          </p>
          <Link
            to={`/necrologi/${necrologio.comune.toLowerCase()}/${necrologio.slug}`}
            className="text-xs font-semibold text-tortora-800 hover:text-tortora-900 transition-colors"
          >
            Scheda →
          </Link>
        </div>
      </article>

      {/* Modal Invia Fiori */}
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

      {/* Modal Lascia un pensiero */}
      <Modal isOpen={showPensieroModal} onClose={() => { setShowPensieroModal(false); setPensieroInviato(false); }} title="Lascia un pensiero">
        {pensieroInviato ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-tortora-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-tortora-700" />
            </div>
            <p className="text-text-primary font-semibold text-lg mb-2">Grazie, messaggio inviato (demo)</p>
            <p className="text-text-secondary">Il vostro pensiero è stato registrato.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setPensieroInviato(true); }} className="space-y-4">
            <p className="text-text-secondary text-[15px]">Per {necrologio.nome}</p>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1">Nome e cognome *</label>
              <input type="text" required className="w-full px-3 py-2 border border-tortora-200 rounded-md text-[15px] focus:outline-none focus:border-tortora-500" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text-primary mb-1">Messaggio *</label>
              <textarea rows={4} required className="w-full px-3 py-2 border border-tortora-200 rounded-md text-[15px] focus:outline-none focus:border-tortora-500 resize-none" />
            </div>
            <button type="submit" className="w-full bg-tortora-700 text-white py-2.5 rounded-md hover:bg-tortora-800 transition-colors font-semibold">
              Invia pensiero
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}
