import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    {
      label: 'Servizi', path: '#', children: [
        { label: 'Messaggi di cordoglio', path: '/servizi/messaggi-di-cordoglio' },
        { label: 'Addobbi floreali', path: '/servizi/addobbi-floreali' },
        { label: 'Lapidi e ornamenti', path: '/servizi/lapidi-e-ornamenti' },
        { label: 'Operazioni cimiteriali', path: '/servizi/operazioni-cimiteriali' },
        { label: 'Trasporti funebri', path: '/servizi/trasporti-funebri' },
        { label: 'Cofani e Urne cinerarie', path: '/servizi/cofani-e-urne-cinerarie' },
      ]
    },
    {
      label: 'Decesso', path: '#', children: [
        { label: 'Cosa fare in caso di decesso', path: '/decesso/in-caso-di-decesso' },
        { label: 'Cosa fare dopo il decesso', path: '/decesso/dopo-il-decesso' },
      ]
    },
    { label: 'Necrologi', path: '/necrologi' },
    { label: 'Contatti', path: '/contatti' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-tortora-200">
      {/* Top bar - tortora-700 */}
      <div className="bg-tortora-700 text-white py-2.5 px-4">
        <div className="max-w-container mx-auto flex items-center justify-between text-[15px] font-semibold">
          <span className="tracking-wide">SERVIZIO CONTINUATO 24H SU 24 - 7 GIORNI SU 7</span>
          <div className="hidden md:flex items-center gap-4">
            <a href="https://facebook.com/pecorarisrl" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="mailto:pecorarisrl@yahoo.it" className="hover:text-white/80 transition-colors">pecorarisrl@yahoo.it</a>
            <a href="https://wa.me/+39%20338%207277095" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors" aria-label="WhatsApp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Home - Onoranze Funebri Pecorari">
          <img
            src="https://irp-cdn.multiscreensite.com/247e9246/logo_gxP"
            alt="Onoranze Funebri Pecorari"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <>
                  <button className="px-3 py-2 text-[15px] font-semibold text-text-secondary hover:text-tortora-800 transition-colors rounded-md hover:bg-tortora-50">
                    {item.label}
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border border-tortora-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-[15px] text-text-secondary hover:text-tortora-800 hover:bg-tortora-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-[15px] font-semibold rounded-md transition-colors ${
                    isActive(item.path) ? 'text-tortora-800 border-b-2 border-tortora-700' : 'text-text-secondary hover:text-tortora-800 hover:bg-tortora-50'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+39059260667"
            className="hidden md:flex items-center gap-2 bg-tortora-700 text-white px-4 py-2 rounded-md hover:bg-tortora-800 transition-colors font-semibold text-[15px]"
          >
            <Phone className="w-4 h-4" />
            CHIAMA ORA 059 260667
          </a>
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-tortora-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-tortora-200 shadow-lg">
          <nav className="max-w-container mx-auto px-4 py-4 space-y-1" aria-label="Navigazione mobile">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-3 py-3 text-[15px] font-semibold text-text-secondary cursor-pointer rounded-md hover:bg-tortora-50">
                      {item.label}
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-[15px] text-text-secondary hover:text-tortora-800 hover:bg-tortora-50 rounded-md"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 text-[15px] font-semibold rounded-md ${
                      isActive(item.path) ? 'text-tortora-800 bg-tortora-50' : 'text-text-secondary hover:text-tortora-800 hover:bg-tortora-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-tortora-200 mt-3">
              <a
                href="tel:+39059260667"
                className="flex items-center justify-center gap-2 bg-tortora-700 text-white px-4 py-3 rounded-md font-semibold text-[15px]"
              >
                <Phone className="w-4 h-4" />
                CHIAMA ORA — 059 260667
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
