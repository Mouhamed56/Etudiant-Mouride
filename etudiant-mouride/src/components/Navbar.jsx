import { useState, useEffect } from 'react';
import { useLang } from '../hooks/useLang';

const NAV_MAIN = [
  { key:'nav.home',      href:'#accueil' },
  { key:'nav.about',     href:'#apropos' },
  { key:'nav.teachings', href:'#enseignements' },
  { key:'nav.videos',    href:'#videos' },
  { key:'nav.book',      href:'#livre' },
  { key:'nav.blog',      href:'#blog' },
];
const NAV_MORE = [
  { key:'nav.xassida',  href:'#xassida' },
  { key:'nav.mission',  href:'#mission-cheikh' },
  { key:'nav.economy',  href:'#modele-economique' },
  { key:'nav.quotes',   href:'#citations' },
  { key:'nav.gallery',  href:'#galerie' },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const close = (e) => { if (!e.target.closest('#more-wrapper')) setMoreOpen(false); };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  const lnk = 'nav-link px-2 py-1 text-white hover:text-mouride-gold transition-colors text-sm';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mouride-green-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#accueil" className="text-lg font-display font-bold text-white flex-shrink-0">
            Étudiant Mouride
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_MAIN.map(i => (
              <a key={i.key} href={i.href} className={lnk}>{t(i.key)}</a>
            ))}

            {/* Bouton langue */}
            <button type="button" onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 border border-mouride-gold/70 rounded-full text-mouride-gold font-bold text-xs hover:bg-mouride-gold/10 transition-all">
              {lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
            </button>

            {/* Dropdown Plus */}
            <div className="relative" id="more-wrapper">
              <button type="button" onClick={() => setMoreOpen(o => !o)}
                className={`${lnk} flex items-center gap-1`}>
                {t('nav.more')}
                <svg className={`w-3 h-3 transition-transform ${moreOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-mouride-green-dark rounded-xl shadow-2xl border border-mouride-gold/20 py-2 z-50">
                  {NAV_MORE.map(i => (
                    <a key={i.key} href={i.href} onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2 text-white hover:text-mouride-gold hover:bg-white/5 transition-colors text-sm">
                      {t(i.key)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <a href="#contact"
              className="ml-1 px-4 py-2 bg-mouride-gold text-mouride-green font-semibold rounded-full hover:bg-mouride-gold-light transition-colors text-sm">
              {t('nav.contact')}
            </a>
          </div>

          {/* Mobile burger */}
          <button type="button" onClick={() => setMenuOpen(o => !o)} className="lg:hidden text-white p-1">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-mouride-green-dark border-t border-white/10 px-4 py-4 space-y-1">
          {[...NAV_MAIN, ...NAV_MORE].map(i => (
            <a key={i.key} href={i.href} onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-mouride-gold py-2 text-sm">{t(i.key)}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            className="block text-mouride-gold font-semibold py-2 text-sm">{t('nav.contact')}</a>
          <button type="button" onClick={() => { toggleLang(); setMenuOpen(false); }}
            className="mt-2 px-4 py-2 border border-mouride-gold/70 rounded-full text-mouride-gold font-bold text-xs">
            {lang === 'fr' ? '🇬🇧 Switch to English' : '🇫🇷 Passer en Français'}
          </button>
        </div>
      )}
    </nav>
  );
}
