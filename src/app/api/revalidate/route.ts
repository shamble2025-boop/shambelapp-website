export type Language = 'en' | 'am';

export interface Translations {
  [key: string]: any;
}

const translations: Record<string, any> = {
  en: {
    // English translations
  },
  am: {
    // Amharic translations
  }
};

export const getDictionary = (lang: string) => {
  const dictionary = translations as Record<string, any>;
  return dictionary[lang] || dictionary['en'] || dictionary['am'];
};

export default translations;