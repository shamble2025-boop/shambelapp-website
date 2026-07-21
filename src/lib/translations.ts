export const getStaticTranslations = (lang: string) => {
  const dict = {
    en: {
      home: 'Home', about: 'About', contact: 'Contact', help: 'Help',
      trending: 'Trending Now', latest: 'Latest Tutorials', popular: 'Most Popular',
      newsletter: 'Join the Newsletter', subscribe: 'Subscribe',
    },
    am: {
      home: 'መነሻ', about: 'ስለ እኛ', contact: 'አግኙን', help: 'እገዛ',
      trending: 'አሁን በተወዳነበት', latest: 'የአሁኑ ማስተማሪያዎች', popular: 'በጣም ታዋቂ',
      newsletter: 'ዜና ደብዳቤን ይቀላቹ', subscribe: 'ይመዝገቡ',
    }
  };
  return dict[lang] || dict.en;
};