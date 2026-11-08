import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Network, 
  Menu, 
  X, 
  Languages, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { navigationItems } from '../../data/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { useProgress } from '../../context/ProgressContext';
import { ThemeSelector } from './ThemeSelector';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const { overallProgressPercentage } = useProgress();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="group flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-500 shadow-md shadow-cyan-500/20 ring-1 ring-white/20">
            <Network className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-500"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-wider text-white">NET<span className="text-cyan-400">CORE</span></span>
              <span className="rounded bg-cyan-950/80 px-1.5 py-0.5 text-[10px] font-semibold text-cyan-400 border border-cyan-800/60 uppercase">
                Edu
              </span>
            </div>
            <span className="text-[11px] font-medium text-slate-400">
              {t('Computer Networking Academy', 'কম্পিউটার নেটওয়ার্কিং একাডেমি')}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1">
          {navigationItems.map(item => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-1.5 py-1 2xl:px-2.5 2xl:py-1.5 rounded-lg text-xs 2xl:text-sm font-medium whitespace-nowrap transition-all ${
                  active
                    ? 'text-cyan-400 bg-cyan-950/50 shadow-sm border border-cyan-800/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {t(item.nameEn, item.nameBn)}
                {active && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Progress Pill, Theme Switcher, Language Switcher & Mobile Menu Button */}
        <div className="flex items-center gap-1.5 2xl:gap-2.5 shrink-0">
          {/* Progress Indicator */}
          <Link
            to="/progress"
            className="hidden 2xl:flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1.5 text-xs text-slate-300 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-colors"
            title={t('My Learning Progress', 'শেখার অগ্রগতি')}
          >
            <div className="h-2 w-14 overflow-hidden rounded-full bg-slate-800">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                style={{ width: `${overallProgressPercentage}%` }}
              />
            </div>
            <span className="font-semibold text-cyan-400 font-mono-code">{overallProgressPercentage}%</span>
          </Link>

          {/* Theme Selector (Desktop Dropdown) */}
          <ThemeSelector />

          {/* Bilingual Language Switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1.5 text-xs font-semibold text-slate-200 transition-all hover:border-cyan-500/40 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
            aria-label="Toggle language between English and Bangla"
          >
            <Languages className="h-3.5 w-3.5 text-cyan-400" />
            <span className={language === 'en' ? 'text-cyan-400 font-bold' : 'text-slate-400'}>EN</span>
            <span className="text-slate-600">/</span>
            <span className={language === 'bn' ? 'text-cyan-400 font-bold font-bangla' : 'text-slate-400 font-bangla'}>বাং</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white xl:hidden focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-5 backdrop-blur-lg">
          <div className="space-y-1">
            {navigationItems.map(item => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/40'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {t(item.nameEn, item.nameBn)}
                  </span>
                  <ChevronRight className="h-4 w-4 text-slate-500" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Theme Selector */}
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <ThemeSelector isMobileDrawer={true} />
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              {t('Overall Progress', 'সামগ্রিক অগ্রগতি')}: <strong className="text-cyan-400">{overallProgressPercentage}%</strong>
            </span>
            <Link
              to="/progress"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold text-cyan-400 hover:underline"
            >
              {t('View Progress', 'প্রগ্রেস দেখুন')} &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
