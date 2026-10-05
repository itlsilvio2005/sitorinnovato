import { useEffect, useState, useMemo } from 'react';
import { getNecrologi, getComuni, Necrologio } from '../lib/necrologi';
import NecrologioCard from '../components/NecrologioCard';
import FiltriNecrologi from '../components/FiltriNecrologi';

export default function NecrologiPage() {
  const [necrologi, setNecrologi] = useState<Necrologio[]>([]);
  const [comuni, setComuni] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [searchTerm, setSearchTerm] = useState('');
  const [comune, setComune] = useState('');
  const [dataDal, setDataDal] = useState('');
  const [dataAl, setDataAl] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    Promise.all([getNecrologi(), getComuni()]).then(([data, comuniList]) => {
      const sorted = [...data].sort((a, b) =>
        new Date(b.dataPubblicazione).getTime() - new Date(a.dataPubblicazione).getTime()
      );
      setNecrologi(sorted);
      setComuni(comuniList);
      setLoading(false);
    });
  }, []);

  const filtered = useMemo(() => {
    return necrologi.filter((n) => {
      const matchSearch = !searchTerm || n.nome.toLowerCase().includes(searchTerm.toLowerCase());
      const matchComune = !comune || n.comune === comune;
      const matchDal = !dataDal || new Date(n.dataPubblicazione) >= new Date(dataDal);
      const matchAl = !dataAl || new Date(n.dataPubblicazione) <= new Date(dataAl + 'T23:59:59');
      return matchSearch && matchComune && matchDal && matchAl;
    });
  }, [necrologi, searchTerm, comune, dataDal, dataAl]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleReset = () => {
    setSearchTerm('');
    setComune('');
    setDataDal('');
    setDataAl('');
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="text-text-muted">Caricamento...</p>
      </div>
    );
  }

  return (
    <main className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-primary mb-3">Necrologi</h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            Registro online degli annunci funebri. Cercate il ricordo di una persona cara o consultate gli ultimi annunci pubblicati.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <FiltriNecrologi
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            comune={comune}
            onComuneChange={setComune}
            dataDal={dataDal}
            onDataDalChange={setDataDal}
            dataAl={dataAl}
            onDataAlChange={setDataAl}
            comuni={comuni}
            onReset={handleReset}
          />
        </div>

        {/* Results count */}
        <p className="text-sm text-text-muted mb-6">
          {filtered.length} {filtered.length === 1 ? 'annuncio trovato' : 'annunci trovati'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((n) => (
                <NecrologioCard key={n.id} necrologio={n} />
              ))}
            </div>

            {hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="inline-flex items-center gap-2 bg-surface border border-border text-primary px-6 py-3 rounded-md hover:bg-border-light transition-colors font-medium text-sm"
                >
                  Carica altri annunci
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-text-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="font-serif text-xl text-primary mb-2">Nessun annuncio trovato</h2>
            <p className="text-text-muted text-sm">Prova a modificare i filtri di ricerca</p>
          </div>
        )}
      </div>
    </main>
  );
}
