import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeId = 'light' | 'dark' | 'midnight' | 'cyber-red' | 'purple' | 'emerald' | 'water';

export interface ThemeConfig {
  id: ThemeId;
  nameEn: string;
  nameBn: string;
  accentHex: string;
  bgHex: string;
  surfaceHex: string;
  descriptionEn: string;
  descriptionBn: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: 'light',
    nameEn: 'Light Mode',
    nameBn: 'লাইট মোড',
    accentHex: '#0284c7',
    bgHex: '#f8fafc',
    surfaceHex: '#ffffff',
    descriptionEn: 'Crisp white & clean slate for bright environments',
    descriptionBn: 'উজ্জ্বল ব্যাকগ্রাউন্ড ও পরিষ্কার কনট্রাস্ট',
  },
  {
    id: 'dark',
    nameEn: 'Dark Classic',
    nameBn: 'ডার্ক ক্লাসিক',
    accentHex: '#38bdf8',
    bgHex: '#090a0f',
    surfaceHex: '#14151b',
    descriptionEn: 'Pure black & dark graphite with cyan highlights',
    descriptionBn: 'ক্লাসিক ব্ল্যাক ও গ্রাফাইট কনট্রাস্ট',
  },
  {
    id: 'midnight',
    nameEn: 'Midnight Blue',
    nameBn: 'মিডনাইট ব্লু',
    accentHex: '#38bdf8',
    bgHex: '#030712',
    surfaceHex: '#0b1528',
    descriptionEn: 'Deep ocean navy with electric blue networking glow',
    descriptionBn: 'গভীর নেভি ব্লু ও ইলেকট্রিক সায়ান আভা',
  },
  {
    id: 'cyber-red',
    nameEn: 'Cyber Red',
    nameBn: 'সাইবার রেড',
    accentHex: '#f43f5e',
    bgHex: '#090405',
    surfaceHex: '#180a0e',
    descriptionEn: 'Stealth obsidian black with crimson red energy',
    descriptionBn: 'অ্যাবসোলুট ব্ল্যাক ও প্রফেশনাল লাল আভা',
  },
  {
    id: 'purple',
    nameEn: 'Deep Purple',
    nameBn: 'ডিপ পার্পল',
    accentHex: '#a855f7',
    bgHex: '#080411',
    surfaceHex: '#140a24',
    descriptionEn: 'Atmospheric royal violet & neon purple accents',
    descriptionBn: 'রয়েল ভায়োলেট ও নিয়ন পার্পল সৌন্দর্য',
  },
  {
    id: 'emerald',
    nameEn: 'Emerald Green',
    nameBn: 'এমারেল্ড গ্রিন',
    accentHex: '#10b981',
    bgHex: '#020d07',
    surfaceHex: '#071f13',
    descriptionEn: 'Deep matrix emerald with luminous mint glow',
    descriptionBn: 'গাঢ় এমারেল্ড ও স্পন্দনশীল সবুজ আভা',
  },
  {
    id: 'water',
    nameEn: 'Water',
    nameBn: 'ওয়াটার',
    accentHex: '#06b6d4',
    bgHex: '#031322',
    surfaceHex: '#082642',
    descriptionEn: 'Crystal-clear aqua & luminous water glass reflections',
    descriptionBn: 'স্বচ্ছ নীল জলরাশি ও স্ফটিক অ্যাকোয়া গ্লাস প্রতিফলন',
  },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  currentThemeConfig: ThemeConfig;
  allThemes: ThemeConfig[];
}

const STORAGE_KEY = 'netcore_theme';
const DEFAULT_THEME: ThemeId = 'midnight';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeId;
      if (saved && THEMES.some(t => t.id === saved)) {
        return saved;
      }
    } catch {
      // Ignore localStorage errors
    }
    return DEFAULT_THEME;
  });

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // Ignore localStorage errors
    }
  };

  useEffect(() => {
    // Apply data-theme attribute and class to <html> element
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    
    // Remove previous theme-* classes and add new one
    THEMES.forEach(t => {
      root.classList.remove(`theme-${t.id}`);
    });
    root.classList.add(`theme-${theme}`);

    // If light theme, also update light class, else dark
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  }, [theme]);

  const currentThemeConfig = THEMES.find(t => t.id === theme) || THEMES[2];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, currentThemeConfig, allThemes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
