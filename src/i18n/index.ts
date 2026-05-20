import en from './en.json';
import fr from './fr.json';
import ar from './ar.json';
import zh from './zh.json';

export type Locale = 'en' | 'fr' | 'ar' | 'zh';

export const locales: Locale[] = ['en', 'fr', 'ar', 'zh'];

export const dictionaries = { en, fr, ar, zh } as const;

export type Dict = typeof en;

export function getDict(locale: string): Dict {
  return (dictionaries as Record<string, Dict>)[locale] ?? en;
}

export function dirFor(locale: string): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

export function htmlLangFor(locale: string): string {
  switch (locale) {
    case 'zh': return 'zh-Hans';
    case 'ar': return 'ar';
    case 'fr': return 'fr';
    default: return 'en';
  }
}

export const localeLabels: Record<Locale, { label: string; native: string }> = {
  en: { label: 'English', native: 'English' },
  fr: { label: 'French', native: 'Français' },
  ar: { label: 'Arabic', native: 'العربية' },
  zh: { label: 'Chinese', native: '中文' },
};

export function localeStaticPaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

export const BASE = import.meta.env.BASE_URL;

export function localePath(locale: string, path: string = ''): string {
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '');
  const base = BASE.replace(/\/$/, '');
  return `${base}/${locale}/${cleanPath}${cleanPath ? '/' : ''}`;
}
