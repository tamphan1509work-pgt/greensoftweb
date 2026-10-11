/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Modals, ModalType } from './components/Modals';
import { GreensoftLogo, GreensoftWordmark } from './components/GreensoftLogo';
import { StickyNav } from './components/StickyNav';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { PartnersAndEngagement } from './components/PartnersAndEngagement';
import { RecruitmentSection } from './components/RecruitmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { SectionDivider } from './components/SectionDivider';
import { AnimatedMetric } from './components/AnimatedMetric';
import { FloatingScrollIndicator } from './components/FloatingScrollIndicator';
import { ChevronDown, Globe, X } from 'lucide-react';
import { Language, translations } from './i18n/translations';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<Language>('VI');
  const [isHeroActive, setIsHeroActive] = useState(false);
  const [isAboutNavigating, setIsAboutNavigating] = useState(false);

  const plateRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const aboutNavTimeoutRef = useRef<number | null>(null);

  const t = translations[lang];

  // Dynamic depth-zoom trigger when actively navigating between Hero and About
  const triggerAboutDepthZoom = () => {
    setIsAboutNavigating(true);
    if (aboutNavTimeoutRef.current !== null) {
      window.clearTimeout(aboutNavTimeoutRef.current);
    }
    aboutNavTimeoutRef.current = window.setTimeout(() => {
      setIsAboutNavigating(false);
    }, 1500);
  };

  // Monitor scroll for sticky navigation, aspect-calibrated parallax & dynamic depth-zoom
  useEffect(() => {
    let animationFrameId: number | null = null;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleScroll = () => {
      if (animationFrameId !== null) return;

      animationFrameId = requestAnimationFrame(() => {
        animationFrameId = null;
        const scrollY = Math.max(0, window.scrollY);

        // Sticky Nav trigger
        setIsScrolled(scrollY > 120);

        // Parallax and dynamic depth-zoom effect on Hero video plate
        if (!mediaQuery.matches && plateRef.current) {
          const stageHeight = stageRef.current ? stageRef.current.offsetHeight : window.innerHeight;
          if (scrollY <= stageHeight + 120) {
            const width = window.innerWidth || document.documentElement.clientWidth;
            const height = Math.max(1, window.innerHeight || document.documentElement.clientHeight);
            const aspectRatio = width / height;

            const baseFactor = 0.32;
            const baseAspectRatio = 16 / 9; // ~1.7778
            const scaledFactor = baseFactor * Math.pow(aspectRatio / baseAspectRatio, 0.45);
            // Safe clamp between 0.18 (portrait/compact tablet) and 0.46 (super ultra-wide 32:9)
            const dynamicParallaxFactor = Math.min(0.46, Math.max(0.18, scaledFactor));

            const parallaxOffset = scrollY * dynamicParallaxFactor;
            plateRef.current.style.transform = `translate3d(0, ${parallaxOffset.toFixed(2)}px, 0)`;

            // Dynamic depth-zoom transition activating as user navigates between Hero and About
            // Ranges from 0 (top of Hero) to 1 (entrance of About section)
            const aboutProgress = Math.min(1, Math.max(0, scrollY / Math.max(1, stageHeight * 0.90)));
            const depthZoomScale = 1 + (aboutProgress * 0.15);
            const depthZoomZ = aboutProgress * 60;
            const depthZoomBrightMult = 1 + (aboutProgress * 0.16);
            const depthZoomContrastMult = 1 + (aboutProgress * 0.10);

            plateRef.current.style.setProperty('--depth-zoom-scale', depthZoomScale.toFixed(4));
            plateRef.current.style.setProperty('--depth-zoom-z', `${depthZoomZ.toFixed(1)}px`);
            plateRef.current.style.setProperty('--depth-zoom-brightness-mult', depthZoomBrightMult.toFixed(3));
            plateRef.current.style.setProperty('--depth-zoom-contrast-mult', depthZoomContrastMult.toFixed(3));
            plateRef.current.style.setProperty('--depth-zoom-progress', aboutProgress.toFixed(3));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      if (aboutNavTimeoutRef.current !== null) {
        window.clearTimeout(aboutNavTimeoutRef.current);
      }
    };
  }, []);

  // Handle keyboard events (Escape to close menu or modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeModal) {
          setActiveModal(null);
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    const handleResize = () => {
      const aspect = window.innerWidth / window.innerHeight;
      if (aspect > 1.1 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen, activeModal]);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    if (id === 'about') {
      triggerAboutDepthZoom();
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (type: ModalType) => {
    setIsMenuOpen(false);
    setActiveModal(type);
  };

  return (
    <div className="w-full bg-[#050505] text-[#fafafa] selection:bg-emerald-500/30 selection:text-white">
      {/* Persistent Floating Navbar when scrolled */}
      <StickyNav 
        isVisible={isScrolled} 
        onOpenModal={(type) => openModal(type)}
        onOpenMenu={() => setIsMenuOpen(true)}
        lang={lang}
        onToggleLang={(newLang) => setLang(newLang)}
        onNavigateToAbout={triggerAboutDepthZoom}
        onNavigateToHero={triggerAboutDepthZoom}
      />

      {/* ============================================================ */}
      {/* HERO STAGE (Big Brand Left · Centered Menu · Actions Right) */}
      {/* ============================================================ */}
      <div 
        ref={stageRef}
        className={`stage ${isMenuOpen ? 'is-open' : ''} ${isHeroActive ? 'is-hero-active is-active active' : ''} ${isAboutNavigating ? 'is-about-navigating' : ''}`}
        onMouseEnter={() => setIsHeroActive(true)}
        onMouseLeave={() => setIsHeroActive(false)}
        onTouchStart={() => setIsHeroActive(true)}
        onTouchEnd={() => {
          setTimeout(() => setIsHeroActive(false), 1200);
        }}
      >
        {/* Background Plate with CloudFront Video & Scroll Parallax */}
        <div 
          ref={plateRef}
          className="plate"
        >
          <video 
            className="plate-video" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto" 
            aria-hidden="true"
          >
            <source 
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_112712_da9d53df-6d27-4b12-bdf6-aa9dc2622bdf.mp4" 
              type="video/mp4" 
            />
          </video>
        </div>

        {/* Stage Vignette for seamless fade during parallax movement */}
        <div className="stage-vignette" aria-hidden="true" />

        {/* Header Topbar */}
        <header className="topbar">
          {/* Left: Big Company Symbol and Name */}
          <a 
            className="brand" 
            aria-label="GreenSoft Home" 
            onClick={(e) => {
              e.preventDefault();
              triggerAboutDepthZoom();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            title="GreenSoftits Co.,Ltd · Make It Different"
          >
            <GreensoftLogo variant="emblem" size={54} />
            {/* Smaller wordmark on phones so it clears the language toggle */}
            <span className="hidden min-[480px]:block"><GreensoftWordmark fontSize={24} /></span>
            <span className="min-[480px]:hidden"><GreensoftWordmark fontSize={16} /></span>
          </a>

          {/* Centered: Menu Links (About, Products, Recruitment, Contact) */}
          <nav className="links" aria-label="Primary">
            <a onClick={() => scrollToSection('about')}>{t.nav.about}</a>
            <a onClick={() => scrollToSection('features')}>{t.nav.products}</a>
            <a onClick={() => scrollToSection('recruitment')}>{t.nav.recruitment}</a>
            <a onClick={() => scrollToSection('contact')}>{t.nav.contact}</a>
          </nav>

          {/* Far Right Corner: Language Switcher + White Pill CTA Button */}
          <div className="topbar-actions">
            {/* Language Switcher EN / VI */}
            <div className="lang-toggle" role="group" aria-label="Ngôn ngữ / Language">
              <button 
                type="button"
                className={`lang-btn ${lang === 'EN' ? 'active' : ''}`}
                onClick={() => setLang('EN')}
                aria-pressed={lang === 'EN'}
                title="Switch to English"
              >
                EN
              </button>
              <button 
                type="button"
                className={`lang-btn ${lang === 'VI' ? 'active' : ''}`}
                onClick={() => setLang('VI')}
                aria-pressed={lang === 'VI'}
                title="Chuyển sang Tiếng Việt"
              >
                VI
              </button>
            </div>

            {/* White Pill CTA Button */}
            <a 
              className="pill pill-nav"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              {t.nav.getInTouch}
            </a>
          </div>

          <button 
            className="burger" 
            id="burger" 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <i></i>
            <i></i>
          </button>
        </header>

        {/* Mobile Overlay Menu */}
        <nav className="menu" id="menu" aria-hidden={!isMenuOpen}>
          <div className="menu-inner">
            <div className="menu-head flex items-center gap-3 mb-6">
              <div className="flex items-center gap-3 mr-auto">
                <GreensoftLogo variant="emblem" size={38} />
                <GreensoftWordmark fontSize={18} />
              </div>

              {/* Mobile Language Switcher */}
              <div className="lang-toggle">
                <button 
                  type="button"
                  className={`lang-btn ${lang === 'EN' ? 'active' : ''}`}
                  onClick={() => setLang('EN')}
                >
                  EN
                </button>
                <button 
                  type="button"
                  className={`lang-btn ${lang === 'VI' ? 'active' : ''}`}
                  onClick={() => setLang('VI')}
                >
                  VI
                </button>
              </div>

              {/* Close button lives inside the menu so it works at any scroll position */}
              <button
                type="button"
                className="menu-close"
                aria-label={lang === 'EN' ? 'Close menu' : 'Đóng menu'}
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ul className="menu-list">
              <li><a onClick={() => scrollToSection('about')}>{t.nav.about}</a></li>
              <li><a onClick={() => scrollToSection('features')}>{t.nav.products}</a></li>
              <li><a onClick={() => scrollToSection('recruitment')}>{t.nav.recruitment}</a></li>
              <li><a onClick={() => scrollToSection('contact')}>{t.nav.contact}</a></li>
            </ul>

            <div className="menu-foot">
              <a className="pill" onClick={() => scrollToSection('contact')}>{t.nav.getInTouch}</a>
              <a className="ghost" onClick={() => scrollToSection('features')}>{t.hero.ctaSecondary}</a>
            </div>
          </div>
        </nav>

        {/* Hero Section: Left Generously Spaced Typography & Metrics */}
        <main className="hero">
          <div className="hero-column">
            {/* Brand Kicker Badge: Applied AI Platform */}
            <div className="hero-brand-kicker">
              <GreensoftLogo variant="emblem" size={22} />
              <span className="kicker-tag">{t.hero.kickerTag}</span>
              <span className="text-zinc-600">·</span>
              <span className="kicker-sub italic">{t.hero.kickerSub}</span>
            </div>

            {/* Headline */}
            <h1 className="headline">
              <span>{t.hero.headlineLine1}</span>
              <span className="text-emerald-400">{t.hero.headlineLine2}</span>
            </h1>

            {/* Subcopy */}
            <p className="sub">
              {t.hero.sub}
            </p>

            {/* Actions CTA: "Get in Touch" & "Explore Products" */}
            <div className="actions">
              <a 
                className="pill pill-cta" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                <span>{t.hero.ctaPrimary}</span>
              </a>
              <a 
                className="ghost" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
              >
                <span>{t.hero.ctaSecondary}</span>
                <span className="text-emerald-400">→</span>
              </a>
            </div>

            {/* Metrics Strip */}
            <div className="hero-metrics">
              <div className="metric-item">
                <AnimatedMetric 
                  value={t.hero.metrics.industriesNum} 
                  className="metric-num highlight" 
                  duration={1600}
                />
                <span className="metric-label">{t.hero.metrics.industriesLabel}</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <AnimatedMetric 
                  value={t.hero.metrics.operationsNum} 
                  className="metric-num highlight" 
                  duration={1800}
                />
                <span className="metric-label">{t.hero.metrics.operationsLabel}</span>
              </div>
            </div>
          </div>
        </main>

        {/* Floating Scroll Indicator with gentle pulse and scroll-reactive fade */}
        <FloatingScrollIndicator 
          label={t.hero.scrollCue} 
          targetId="about" 
          onNavigate={triggerAboutDepthZoom}
          className="hidden sm:block"
        />
      </div>

      {/* ============================================================ */}
      {/* EXPANDED LANDING PAGE CONTENT */}
      {/* ============================================================ */}
      <div className="relative z-10 bg-[#050505]">
        {/* Subtle horizontal gradient divider from Hero */}
        <SectionDivider />

        {/* Section 01: About GreenSoftits & 3 Technology Pillars */}
        <AboutSection lang={lang} />

        {/* Subtle semi-transparent horizontal gradient divider */}
        <SectionDivider />

        {/* Section 02: Full 16 AI Products Portfolio */}
        <ProductsSection lang={lang} />

        {/* Subtle semi-transparent horizontal gradient divider */}
        <SectionDivider />

        {/* Section 03: Featured Real-world Solutions */}
        <SolutionsSection lang={lang} />

        {/* Subtle semi-transparent horizontal gradient divider */}
        <SectionDivider />

        {/* Section 04: Partners, Customers & 3-Step Engagement */}
        <ScrollReveal distance={28}>
          <PartnersAndEngagement lang={lang} />
        </ScrollReveal>

        {/* Section 05: Careers & Recruitment */}
        <ScrollReveal distance={28}>
          <RecruitmentSection lang={lang} />
        </ScrollReveal>

        {/* Section 06: Get in Touch Contact Section */}
        <ScrollReveal distance={28}>
          <ContactSection lang={lang} />
        </ScrollReveal>

        {/* Footer */}
        <Footer lang={lang} />
      </div>

      {/* Interactive Modals */}
      <Modals 
        activeModal={activeModal} 
        onClose={() => setActiveModal(null)}
        onSwitchModal={(type) => setActiveModal(type)}
      />
    </div>
  );
}
