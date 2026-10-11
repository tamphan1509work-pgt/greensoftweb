import React, { useEffect, useState } from 'react';
import {
  ArrowLeft, ArrowRight, Check, Plus, Sparkles, Briefcase, GraduationCap, Wallet, Users2, ChevronRight,
} from 'lucide-react';
import { Language } from '../i18n/translations';
import { getJobs } from '../data/jobs';
import { GreensoftLogo, GreensoftWordmark } from '../components/GreensoftLogo';
import { ApplyForm } from '../components/ApplyForm';

const readLang = (): Language =>
  new URLSearchParams(window.location.search).get('lang')?.toLowerCase() === 'en' ? 'EN' : 'VI';

const FACT_ICONS = [Users2, Wallet, GraduationCap, Briefcase];

const Section: React.FC<{ index: number; title: string; children: React.ReactNode }> = ({ index, title, children }) => (
  <section className="py-10 border-t border-white/10 first:border-t-0 first:pt-0">
    <h2 className="flex items-baseline gap-3 text-xl sm:text-2xl font-semibold text-white tracking-tight mb-5">
      <span className="font-mono text-sm text-emerald-400">{String(index).padStart(2, '0')}</span>
      {title}
    </h2>
    {children}
  </section>
);

const CheckList: React.FC<{ items: string[]; icon?: 'check' | 'plus' }> = ({ items, icon = 'check' }) => (
  <ul className="space-y-3">
    {items.map(item => (
      <li key={item} className="flex items-start gap-3 text-[15px] text-zinc-300 leading-relaxed">
        <span className="w-6 h-6 shrink-0 mt-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          {icon === 'check' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Plus className="w-3.5 h-3.5 text-emerald-400" />}
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const CareersPage: React.FC = () => {
  const [lang, setLang] = useState<Language>(readLang);
  const isEn = lang === 'EN';
  const job = getJobs(lang)[0];
  const home = import.meta.env.BASE_URL;

  useEffect(() => {
    document.documentElement.lang = isEn ? 'en' : 'vi';
    document.title = isEn ? `Careers · ${job.title} · GreenSoft` : `Tuyển dụng · ${job.title} · GreenSoft`;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang.toLowerCase());
    window.history.replaceState(null, '', url);
  }, [lang, isEn, job.title]);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100">
      {/* Top bar */}
      <header className="sticky top-0 z-30 bg-[#050505]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center gap-4">
          <a href={home} className="flex items-center gap-3" aria-label="GreenSoft">
            <GreensoftLogo variant="emblem" size={34} />
            <span className="hidden sm:block"><GreensoftWordmark fontSize={16} /></span>
          </a>
          <a href={`${home}#recruitment`} className="ml-auto inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {isEn ? 'Back to home' : 'Về trang chủ'}
          </a>
          <div className="flex items-center p-0.5 rounded-full border border-white/10 bg-white/[0.03]" role="group" aria-label="Ngôn ngữ / Language">
            {(['EN', 'VI'] as Language[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer ${lang === l ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(closest-side, rgba(16,185,129,0.16), transparent)' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-14 pb-12 sm:pt-20 sm:pb-16">
          <nav className="flex items-center gap-1.5 text-xs text-zinc-500 mb-6" aria-label="Breadcrumb">
            <a href={home} className="hover:text-white transition-colors">GreenSoft</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <a href={`${home}#recruitment`} className="hover:text-white transition-colors">{isEn ? 'Careers' : 'Tuyển dụng'}</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-300">{job.title}</span>
          </nav>

          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-emerald-400 font-semibold">
            <Sparkles className="w-4 h-4" />
            {isEn ? 'Now hiring' : 'Thông báo tuyển dụng'}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08]">
            {job.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-mono">{job.tagline}</p>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {job.facts.map((fact, i) => {
              const Icon = FACT_ICONS[i % FACT_ICONS.length];
              return (
                <div key={fact.label} className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <Icon className="w-5 h-5 text-emerald-400 mb-3" />
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500">{fact.label}</div>
                  <div className="mt-1 text-sm sm:text-base font-semibold text-white leading-snug">{fact.value}</div>
                </div>
              );
            })}
          </div>

          <a href="#apply" className="mt-8 inline-flex items-center gap-2 py-3.5 px-6 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-colors">
            {isEn ? 'Apply now' : 'Ứng tuyển ngay'}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Body */}
      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <article className="lg:col-span-8">
          <Section index={1} title={isEn ? 'The opportunity' : 'Cơ hội'}>
            <p className="text-[15px] sm:text-base text-zinc-300 leading-relaxed">{job.opportunity}</p>
          </Section>

          <Section index={2} title={isEn ? 'Key responsibilities' : 'Trách nhiệm chính'}>
            <CheckList items={job.responsibilities} />
          </Section>

          <Section index={3} title={isEn ? 'AI-assisted software development — top priority' : 'AI-Assisted Software Development — Ưu tiên đặc biệt'}>
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 to-zinc-950 border border-emerald-500/25">
              <p className="text-[15px] text-zinc-300 leading-relaxed">{job.aiDev.intro}</p>
              <ol className="mt-5 flex flex-wrap items-center gap-y-2 text-xs sm:text-sm">
                {job.aiDev.lifecycle.map((step, i) => (
                  <li key={step} className="flex items-center">
                    <span className="px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 font-medium">{step}</span>
                    {i < job.aiDev.lifecycle.length - 1 && <ArrowRight className="w-3.5 h-3.5 mx-1.5 text-emerald-500/60" />}
                  </li>
                ))}
              </ol>
              <div className="mt-6 text-[11px] uppercase tracking-wider text-zinc-500 mb-2.5">
                {isEn ? 'Tools we love to see' : 'Công cụ ưu tiên'}
              </div>
              <div className="flex flex-wrap gap-2">
                {job.aiDev.tools.map(tool => (
                  <span key={tool} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-sm text-zinc-200">{tool}</span>
                ))}
                <span className="px-3 py-1.5 rounded-lg text-sm text-zinc-500">{isEn ? '…or equivalent' : '…hoặc công cụ tương đương'}</span>
              </div>
              <p className="mt-5 text-[15px] text-zinc-300 leading-relaxed">{job.aiDev.note}</p>
            </div>
          </Section>

          <Section index={4} title={isEn ? 'Requirements' : 'Yêu cầu'}>
            <CheckList items={job.requirements} />
          </Section>

          <Section index={5} title={isEn ? 'Nice to have' : 'Điểm cộng'}>
            <CheckList items={job.pluses} icon="plus" />
          </Section>

          <Section index={6} title={isEn ? 'Final-year students especially welcome' : 'Đặc biệt khuyến khích sinh viên năm cuối'}>
            <div className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border-l-2 border-emerald-400">
              <GraduationCap className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-[15px] text-zinc-200 leading-relaxed">{job.students}</p>
            </div>
          </Section>

          <Section index={7} title={isEn ? 'Benefits & career path' : 'Quyền lợi & Lộ trình'}>
            <CheckList items={job.benefits} />
            <div className="mt-8 text-[11px] uppercase tracking-wider text-zinc-500 mb-3">{isEn ? 'Career path' : 'Lộ trình phát triển'}</div>
            <ol className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {job.careerPath.map((step, i) => (
                <li key={step} className="relative p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="block font-mono text-xs text-emerald-400 mb-1.5">{isEn ? 'Step' : 'Bước'} {i + 1}</span>
                  <span className="text-sm font-semibold text-white leading-snug">{step}</span>
                </li>
              ))}
            </ol>
          </Section>
        </article>

        {/* Sticky summary */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24 p-6 rounded-2xl bg-zinc-950 border border-white/10">
            <div className="text-[11px] uppercase tracking-wider text-zinc-500">{isEn ? 'Position' : 'Vị trí'}</div>
            <div className="mt-1 text-lg font-semibold text-white">{job.title}</div>
            <dl className="mt-5 space-y-3 text-sm">
              {job.facts.map(fact => (
                <div key={fact.label} className="flex justify-between gap-4 border-b border-white/5 pb-3">
                  <dt className="text-zinc-500">{fact.label}</dt>
                  <dd className="text-zinc-200 text-right">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <a href="#apply" className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors">
              {isEn ? 'Apply for this role' : 'Ứng tuyển vị trí này'}
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-4 text-xs text-zinc-500 leading-relaxed">{job.howToApply}</p>
          </div>
        </aside>
      </main>

      {/* Apply */}
      <section id="apply" className="scroll-mt-20 border-t border-white/10 bg-gradient-to-b from-emerald-950/30 to-transparent">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight uppercase">
              {job.closing}
            </p>
            <p className="mt-5 text-zinc-400 text-base leading-relaxed">{job.howToApply}</p>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-zinc-950/90 border border-white/10">
            <ApplyForm lang={lang} defaultRole={job.id} />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-xs text-zinc-500">
          <span>© 2026 GreenSoftits Co.,Ltd · greensoftits.com · sales@greensoftits.com</span>
          <a href={home} className="hover:text-white transition-colors">{isEn ? 'Back to greensoftits.com' : 'Quay lại trang chủ GreenSoft'}</a>
        </div>
      </footer>
    </div>
  );
};
