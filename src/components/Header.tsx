import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

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
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <span className="font-medium tracking-wide">SERVIZIO CONTINUATO 24H SU 24 — 7 GIORNI SU 7</span>
          <div className="hidden md:flex items-center gap-4">
            <a href="https://facebook.com/pecorarisrl" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="mailto:pecorarisrl@yahoo.it" className="hover:text-accent-light transition-colors" aria-label="Email">pecorarisrl@yahoo.it</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Home - Onoranze Funebri Pecorari">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">P</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-primary text-lg font-semibold leading-tight block">Onoranze Funebri</span>
            <span className="text-text-muted text-xs tracking-wider uppercase">Pecorari</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <>
                  <button className="px-3 py-2 text-sm font-medium text-text hover:text-primary transition-colors rounded-md hover:bg-surface">
                    {item.label}
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-text-muted hover:text-primary hover:bg-surface transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path) ? 'text-primary bg-surface' : 'text-text hover:text-primary hover:bg-surface'
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
            className="hidden md:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light transition-colors font-medium text-sm"
          >
            <Phone className="w-4 h-4" />
            CHIAMA ORA
          </a>
          <button
            className="lg:hidden p-2 text-text hover:text-primary"
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
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1" aria-label="Navigazione mobile">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between px-3 py-3 text-sm font-medium text-text cursor-pointer rounded-md hover:bg-surface">
                      {item.label}
                      <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-text-muted hover:text-primary hover:bg-surface rounded-md"
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
                    className={`block px-3 py-3 text-sm font-medium rounded-md ${
                      isActive(item.path) ? 'text-primary bg-surface' : 'text-text hover:text-primary hover:bg-surface'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-border mt-3">
              <a
                href="tel:+39059260667"
                className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-md font-medium text-sm"
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
