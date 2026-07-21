export type Language = 'en' | 'am';

const translations: Record<string, any> = {
  en: {},
  am: {}
};

export const getDictionary = (lang: string) => {
  const dictionary = translations as Record<string, any>;
  return dictionary[lang] || dictionary['en'] || dictionary['am'];
};

export default translations;