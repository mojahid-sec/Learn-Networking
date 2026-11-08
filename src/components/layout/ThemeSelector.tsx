import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { useTheme, ThemeId, THEMES } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

interface ThemeSelectorProps {
  isMobileDrawer?: boolean;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ isMobileDrawer = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, currentThemeConfig } = useTheme();
  const { language, t } = useLanguage();

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // If in mobile drawer, render an inline grid of themes for fast 1-tap switching
  if (isMobileDrawer) {
    return (
      <div className="pt-2 pb-1">
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
            <Palette className="h-3.5 w-3.5 text-cyan-400" />
            <span>{t('Website Theme', 'ওয়েবসাইট থিম')}</span>
          </div>
          <span className="text-[11px] font-medium text-cyan-400">
            {language === 'en' ? currentThemeConfig.nameEn : currentThemeConfig.nameBn}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {THEMES.map(th => {
            const isSelected = theme === th.id;
            return (
              <button
                key={th.id}
                type="button"
                onClick={() => setTheme(th.id)}
                className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-cyan-400/80 bg-slate-900/90 shadow-md ring-1 ring-cyan-400/40'
                    : 'border-slate-800 bg-slate-950/60 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                {/* 3-color palette swatch preview */}
                <div className="flex items-center -space-x-1 shrink-0">
                  <span
                    className="h-4 w-4 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: th.bgHex }}
                  />
                  <span
                    className="h-4 w-4 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: th.surfaceHex }}
                  />
                  <span
                    className="h-4 w-4 rounded-full border border-white/20 shadow-sm ring-1 ring-white/30"
                    style={{ backgroundColor: th.accentHex }}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {language === 'en' ? th.nameEn : th.nameBn}
                    </span>
                    {isSelected && <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0 ml-1" />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Dropdown Selector
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/90 px-2.5 py-1.5 text-xs font-semibold text-slate-200 transition-all hover:border-cyan-500/40 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
        aria-haspopup="true"
        aria-expanded={isOpen}
        title={t('Change Website Theme', 'ওয়েবসাইট থিম পরিবর্তন করুন')}
      >
        <Palette className="h-3.5 w-3.5 text-cyan-400" />
        {/* Active theme color indicator dot */}
        <span
          className="h-2.5 w-2.5 rounded-full ring-2 ring-slate-900 shadow-sm"
          style={{ backgroundColor: currentThemeConfig.accentHex }}
        />
        <span className="hidden 2xl:inline font-medium">
          {language === 'en' ? currentThemeConfig.nameEn : currentThemeConfig.nameBn}
        </span>
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl border border-slate-800 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 px-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>{t('Select Website Theme', 'থিম নির্বাচন')}</span>
            </div>
            <span className="text-[10px] font-mono-code px-1.5 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
              {THEMES.length} Themes
            </span>
          </div>

          <div className="space-y-1.5">
            {THEMES.map(th => {
              const isSelected = theme === th.id;
              return (
                <button
                  key={th.id}
                  type="button"
                  onClick={() => {
                    setTheme(th.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-cyan-500/60 bg-cyan-950/30 shadow-md ring-1 ring-cyan-500/30'
                      : 'border-transparent hover:bg-slate-900 hover:border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Visual Color Swatch */}
                    <div className="flex items-center -space-x-1.5 shrink-0">
                      <span
                        className="h-4 w-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: th.bgHex }}
                        title="Background"
                      />
                      <span
                        className="h-4 w-4 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: th.surfaceHex }}
                        title="Surface"
                      />
                      <span
                        className="h-4 w-4 rounded-full border border-white/20 shadow-sm ring-1 ring-white/30"
                        style={{ backgroundColor: th.accentHex }}
                        title="Accent"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-slate-200">
                        {language === 'en' ? th.nameEn : th.nameBn}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        {language === 'en' ? th.descriptionEn : th.descriptionBn}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div
                      className="ml-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white shadow-sm"
                      style={{ backgroundColor: th.accentHex }}
                    >
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
