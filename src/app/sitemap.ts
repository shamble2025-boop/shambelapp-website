import { getLatestArticles } from '@/services/api.service';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getLatestArticles();
  const articleUrls = articles.map((article) => ({
    url: `https://shambelapp.com/article/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  return [
    { url: 'https://shambelapp.com', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'https://shambelapp.com/videos', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://shambelapp.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ...articleUrls,
  ];
}