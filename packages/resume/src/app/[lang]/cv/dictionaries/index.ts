import 'server-only';

export type Locale = keyof typeof dictionaries;

const dictionaries = {
  en: () => import('./en'),
  pt: () => import('./pt'),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
