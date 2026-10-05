import { Link } from 'react-router-dom';
import { MapPin, Church, Clock, ChevronDown, ChevronUp, MessageCircle, Share2, Flower } from 'lucide-react';
import { useState } from 'react';
import { Necrologio } from '../lib/necrologi';
import { getInitials, getRelativeTime, formatDateIT, formatDateTimeCerimonia } from '../lib/utils';

interface Props {
  necrologio: Necrologio;
}

export default function NecrologioCard({ necrologio }: Props) {
  const [expanded, setExpanded] = useState(false);
  const initials = getInitials(necrologio.nome);
  const lastPensiero = necrologio.pensieri.length > 0 ? necrologio.pensieri[necrologio.pensieri.length - 1] : null;

  return (
    <article className="bg-white border border-[#e0e0e0] rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
      {/* Header: avatar + nome */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-full bg-[#f7f7f7] border-2 border-[#68CCD1]/30 flex items-center justify-center">
            <span className="font-['Antic_Didone'] text-[#463939] font-normal text-lg">{initials}</span>
          </div>
          <div className="absolute inset-0 w-14 h-14 rounded-full border border-[#68CCD1]/20 scale-110"></div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-['Antic_Didone'] text-xl md:text-2xl text-[#463939] font-normal leading-tight">
            {necrologio.nome}
          </h3>
          <p className="text-[#666] text-sm mt-1">
            di anni {necrologio.eta} · {formatDateIT(necrologio.dataNascita)} — {formatDateIT(necrologio.dataDecesso)}
          </p>
        </div>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center gap-1 bg-[#68CCD1] text-white text-xs font-medium px-2.5 py-1 rounded-full">
          <MapPin className="w-3 h-3" />
          {necrologio.comune}
        </span>
        <span className="inline-flex items-center gap-1 bg-[#f7f7f7] text-[#666] text-xs font-medium px-2.5 py-1 rounded-full border border-[#e0e0e0]">
          <Church className="w-3 h-3" />
          Rito {necrologio.rito.toLowerCase()}
        </span>
        <span className="inline-flex items-center gap-1 text-[#68CCD1] text-xs font-medium px-2.5 py-1">
          <Clock className="w-3 h-3" />
          {getRelativeTime(necrologio.dataPubblicazione)}
        </span>
      </div>

      {/* Cerimonia + Camera ardente */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="bg-[#f7f7f7] rounded-lg p-3 border border-[#f0f0f0]">
          <p className="text-xs font-semibold text-[#68CCD1] uppercase tracking-wide mb-1">Cerimonia</p>
          <p className="text-sm text-[#463939] font-medium">{formatDateTimeCerimonia(necrologio.cerimonia.data, necrologio.cerimonia.ora)}</p>
          <p className="text-xs text-[#666] mt-1">{necrologio.cerimonia.luogo}</p>
        </div>
        <div className="bg-[#f7f7f7] rounded-lg p-3 border border-[#f0f0f0]">
          <p className="text-xs font-semibold text-[#68CCD1] uppercase tracking-wide mb-1">Camera Ardente</p>
          <p className="text-sm text-[#463939] font-medium">{necrologio.cameraArdente.luogo}</p>
          <p className="text-xs text-[#666] mt-1">Oggi: {necrologio.cameraArdente.orariOggi} · Domani: {necrologio.cameraArdente.orariDomani}</p>
        </div>
      </div>

      {/* Accordion dettagli */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-2 text-sm font-medium text-[#463939] hover:text-[#68CCD1] transition-colors"
        aria-expanded={expanded}
      >
        <span>DETTAGLI: Camera ardente · Cerimonia · {necrologio.cremazione ? 'Cremazione' : 'Sepoltura'}</span>
        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {expanded && (
        <div className="pb-3 text-sm text-[#666] space-y-2 border-t border-[#f0f0f0] pt-3">
          <p><strong>Camera ardente:</strong> {necrologio.cameraArdente.indirizzo}</p>
          <p><strong>Cerimonia:</strong> {necrologio.cerimonia.luogo}, {necrologio.cerimonia.indirizzo}</p>
          {necrologio.sepoltura && <p><strong>Sepoltura:</strong> {necrologio.sepoltura}</p>}
          {necrologio.cremazione && <p><strong>Cremazione:</strong> {necrologio.cremazione}</p>}
        </div>
      )}

      {/* Ultimo pensiero */}
      {lastPensiero && (
        <div className="border-l-2 border-[#68CCD1] pl-4 py-2 my-4">
          <p className="text-sm text-[#666] italic">"{lastPensiero.testo}"</p>
          <p className="text-xs text-[#888] mt-1">— {lastPensiero.autore}, {getRelativeTime(lastPensiero.data)} · {necrologio.pensieri.length} {necrologio.pensieri.length === 1 ? 'pensiero' : 'pensieri'}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#f0f0f0]">
        <a
          href="tel:+39059260667"
          className="inline-flex items-center gap-1.5 bg-[#68CCD1] text-white text-xs font-medium px-3 py-2 rounded-md hover:bg-[#4FB8BD] transition-colors"
        >
          <Flower className="w-3.5 h-3.5" />
          Invia fiori
        </a>
        <Link
          to={`/necrologi/${necrologio.comune.toLowerCase()}/${necrologio.slug}`}
          className="inline-flex items-center gap-1.5 bg-[#463939] text-white text-xs font-medium px-3 py-2 rounded-md hover:bg-[#5C4C4C] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Lascia un pensiero
        </Link>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`Ricordo di ${necrologio.nome} - https://onoranzefunebripecorari.com/necrologi/${necrologio.comune.toLowerCase()}/${necrologio.slug}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-8 h-8 text-[#666] hover:text-green-600 transition-colors rounded-md hover:bg-[#f7f7f7]"
          aria-label="Condividi su WhatsApp"
        >
          <Share2 className="w-4 h-4" />
        </a>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#f0f0f0]">
        <p className="text-xs text-[#999]">
          Pratica curata da <strong>Onoranze Funebri Pecorari</strong> · 059 260667
        </p>
        <Link
          to={`/necrologi/${necrologio.comune.toLowerCase()}/${necrologio.slug}`}
          className="text-xs font-medium text-[#68CCD1] hover:text-[#4FB8BD] transition-colors"
        >
          Scheda →
        </Link>
      </div>
    </article>
  );
}
