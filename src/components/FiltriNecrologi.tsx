import { Search, X } from 'lucide-react';

interface Props {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  comune: string;
  onComuneChange: (value: string) => void;
  dataDal: string;
  onDataDalChange: (value: string) => void;
  dataAl: string;
  onDataAlChange: (value: string) => void;
  comuni: string[];
  onReset: () => void;
}

export default function FiltriNecrologi({
  searchTerm,
  onSearchChange,
  comune,
  onComuneChange,
  dataDal,
  onDataDalChange,
  dataAl,
  onDataAlChange,
  comuni,
  onReset,
}: Props) {
  const hasFilters = searchTerm || comune || dataDal || dataAl;

  return (
    <div className="bg-white border border-border rounded-xl p-4 md:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {/* Search */}
        <div className="lg:col-span-2 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
          <input
            type="text"
            placeholder="Cerca per nome..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            aria-label="Cerca necrologio per nome"
          />
        </div>

        {/* Comune */}
        <select
          value={comune}
          onChange={(e) => onComuneChange(e.target.value)}
          className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          aria-label="Filtra per comune"
        >
          <option value="">Tutti i comuni</option>
          {comuni.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Data dal */}
        <input
          type="date"
          value={dataDal}
          onChange={(e) => onDataDalChange(e.target.value)}
          className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          aria-label="Data dal"
          placeholder="Dal"
        />

        {/* Data al */}
        <input
          type="date"
          value={dataAl}
          onChange={(e) => onDataAlChange(e.target.value)}
          className="w-full px-3 py-2.5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          aria-label="Data al"
          placeholder="Al"
        />
      </div>

      {hasFilters && (
        <div className="mt-3 flex justify-end">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors"
          >
            <X className="w-4 h-4" />
            Azzera filtri
          </button>
        </div>
      )}
    </div>
  );
}
