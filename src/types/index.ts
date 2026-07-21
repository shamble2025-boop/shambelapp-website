export interface Article {
  id: number; 
  slug: string; thumbnail: string; author: string; views: number; readingTime: number;
  title_en: string; title_am: string;
  excerpt_en: string; excerpt_am: string;
  category_en: string; category_am: string;
  date_en: string; date_am: string;
  content_en?: string; content_am?: string;
  tags_en?: string[]; tags_am?: string[];
  keywords_en?: string[]; keywords_am?: string[];
}
export interface Video { id: string; thumbnail: string; youtubeId: string; duration: string; title_en: string; title_am: string; }