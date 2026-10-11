import React from 'react';
import { GreensoftLogo, GreensoftWordmark } from './GreensoftLogo';
import { Language, translations } from '../i18n/translations';

interface StickyNavProps {
  isVisible: boolean;
  onOpenModal: (type: 'get-started' | 'about') => void;
  lang?: Language;
  onToggleLang?: (lang: Language) => void;
  onNavigateToAbout?: () => void;
  onNavigateToHero?: () => void;
}

export const StickyNav: React.FC<StickyNavProps> = ({ 
  isVisible,
  lang = 'VI',
  onToggleLang,
  onNavigateToAbout,
  onNavigateToHero,
}) => {
  const t = translations[lang];

  const scrollTo = (id: string) => {
    if (id === 'about' && onNavigateToAbout) {
      onNavigateToAbout();
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0 bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/60'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
      aria-label="Sticky Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Left: Big Company Symbol and Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateToHero) {
              onNavigateToHero();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 text-decoration-none group cursor-pointer"
          title="GreenSoft · Make It Different"
        >
          <GreensoftLogo variant="emblem" size={38} />
          <span className="hidden min-[400px]:block"><GreensoftWordmark fontSize={18} /></span>
        </a>

        {/* Center: Navigation links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-sm text-zinc-300 font-medium"
          >
            {t.nav.about}
          </button>
          <button
            onClick={() => scrollTo('features')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-sm text-zinc-300 font-medium"
          >
            {t.nav.products}
          </button>
          <button
            onClick={() => scrollTo('recruitment')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-sm text-zinc-300 font-medium"
          >
            {t.nav.recruitment}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-sm text-zinc-300 font-medium"
          >
            {t.nav.contact}
          </button>
        </div>

        {/* Right: Language switch + Get in Touch CTA */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {onToggleLang && (
            <div className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => onToggleLang('EN')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-colors cursor-pointer border-none ${
                  lang === 'EN' ? 'bg-white/20 text-white' : 'text-zinc-400 bg-transparent hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('VI')}
                className={`px-2.5 py-1 rounded-full font-semibold transition-colors cursor-pointer border-none ${
                  lang === 'VI' ? 'bg-white/20 text-white' : 'text-zinc-400 bg-transparent hover:text-white'
                }`}
              >
                VI
              </button>
            </div>
          )}

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="hidden sm:inline-flex items-center whitespace-nowrap px-5 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-100 transition-transform active:scale-95 shadow-md shadow-white/5"
          >
            {t.nav.getInTouch}
          </a>
        </div>
      </div>
    </nav>
  );
};
