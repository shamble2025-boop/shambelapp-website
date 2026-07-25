import { Article, Video } from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// --- DATA MAPPING LAYER ---
const mapArticle = (raw: any): Article => ({
  id: raw.id,
  slug: raw.slug,
  thumbnail: raw.image || raw.thumbnail,
  author: raw.author,
  views: raw.views,
  readingTime: raw.reading_time || 5,
  title_en: raw.title,
  title_am: raw.am_title || raw.title,
  excerpt_en: raw.excerpt,
  excerpt_am: raw.am_excerpt || raw.excerpt,
  category_en: raw.category?.name || 'General',
  category_am: raw.category?.am_name || raw.category?.name || 'General',
  date_en: new Date(raw.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  date_am: new Date(raw.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  content_en: raw.content,
  content_am: raw.am_content || raw.content,
  tags_en: raw.tags || [],
  tags_am: raw.am_tags || raw.tags || [],
  keywords_en: raw.keywords || [],
  keywords_am: raw.am_keywords || raw.keywords || [],
});

const mockArticles: Article[] = [
  { id: 1, slug: 'mastering-chatgpt', thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80', author: 'Shambel', views: 15400, readingTime: 8, title_en: 'Mastering ChatGPT: Advanced Prompt Engineering', title_am: 'ቻትጂፒቲ መቆጣጠር: የላቀ ፕሮምፕት ምህንድስና', excerpt_en: 'Learn how to structure prompts to get production-ready code from AI models.', excerpt_am: 'ከሰው ሰራሽ አስተውቀር ሞዴሎች ምርት ለማምረት ዝግጁ ባለ ኮድ ለማግኘት ፕሮምፕቶችን እንዴት እንደሚያደራጁ ይማሩ።', category_en: 'ChatGPT & Gemini', category_am: 'ቻትጂፒቲ እና ጄሚኒ', date_en: 'May 20, 2024', date_am: 'ግንቦት 20፣ 2024', content_en: '<p>Advanced prompt engineering is the key to unlocking the true potential of large language models...</p>', content_am: '<p>የላቀ የፕሮምፕት ምህንድስና ትልቅ የቋንቋ ሞዴሎችን እውነተኛ አቅም ለመክፈት ቁልፍ ነው...</p>', tags_en: ['ChatGPT', 'Prompt Engineering', 'AI'], tags_am: ['ቻትጂፒቲ', 'ፕሮምፕት'], keywords_en: ['chatgpt', 'ai', 'prompts'] },
  { id: 2, slug: 'android-14-security', thumbnail: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=900&q=80', author: 'Shambel', views: 8200, readingTime: 5, title_en: 'Android 14: Hidden Security Features You Need', title_am: 'አንድሮይድ 14: የሚያስፈልጓችሁ የተደበቁ የደህንነት ባህሪያት', excerpt_en: 'Explore the new sandboxing and privacy controls introduced in the latest Android update.', excerpt_am: 'ባለፈው የአንድሮይድ ዝመና የቀረቡትን አዲስ ሳንድቦክስ እና የግላዊነት ቁጥጥሮች ያስሱ።', category_en: 'Android', category_am: 'አንድሮይድ', date_en: 'May 18, 2024', date_am: 'ግንቦት 18፣ 2024', content_en: '<p>Android 14 brings a massive overhaul to system security...</p>', content_am: '<p>አንድሮይድ 14 ለስርዓት ደህንነት ግዙፍ ለውጥ ያመጣል...</p>', tags_en: ['Android 14', 'Security', 'Mobile'], tags_am: ['አንድሮይድ 14', 'ደህንነት'], keywords_en: ['android', 'security'] }, 
  { id: 3, slug: 'zero-trust-architecture', thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80', author: 'Shambel', views: 12500, readingTime: 12, title_en: 'Zero Trust Architecture: A Complete Guide for 2024', title_am: 'ዜሮ ትራስት አርክቴክቸር: ለ2024 ሙሉ መመሪያ', excerpt_en: 'Understanding the shift from perimeter security to zero trust networks.', excerpt_am: 'ከድንበር ደህንነት ወደ ዜሮ ትራስት ኔትወርክስ መሸጋገሪያን ይረዱ።', category_en: 'Cyber Security', category_am: 'ሳይበር ደህንነት', date_en: 'May 15, 2024', date_am: 'ግንቦት 15፣ 2024', content_en: '<p>Scaling Node.js applications requires careful planning...</p>', content_am: '<p>የኖድ.js መተግበሪያዎችን ማስፋት ጥንቃቄ ይጠይቃል...</p>', tags_en: ['Zero Trust', 'Cyber Security', 'Network'], tags_am: ['ዜሮ ትራስት', 'ሳይበር ደህንነት'], keywords_en: ['cyber security', 'network'] },
  { id: 4, slug: 'm3-max-chip', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80', author: 'Shambel', views: 9800, readingTime: 4, title_en: 'M3 Max Chip: The Future of Mobile Computing', title_am: 'M3 ማክስ ቺፕ: የሞባይል ኮምፒውቲንግ የወደፊቱ', excerpt_en: 'Exploring Apple\'s latest silicon and what it means for developers.', excerpt_am: 'የአፕልን የአሁኑ ሲሊኮን እና ለዲቨሎፐሮች ምን ማለት እንደሆነ ያስሱ።', category_en: 'Tech News', category_am: 'የቴክ ዜና', date_en: 'May 12, 2024', date_am: 'ግንቦት 12፣ 2024', content_en: '<p>The M3 Max represents a significant leap in ARM architecture...</p>', content_am: '<p>M3 ማክስ በARM አርክቴክቸር ውስጥ ጠቃሚ ዝለት ይወክላል...</p>', tags_en: ['Apple', 'M3 Chip', 'Tech News'], tags_am: ['አፕል', 'ቺፕ'], keywords_en: ['apple', 'm3'] },
  { id: 5, slug: 'ios-18-hidden-features', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80', author: 'Shambel', views: 21000, readingTime: 6, title_en: '10 Hidden iOS 18 Features You Did Not Know', title_am: '10 የተደበቁ የiOS 18 ባህሪያት ያላወቃችሁት', excerpt_en: 'Maximize your productivity with these hidden iPhone settings.', excerpt_am: 'በእነዚህ የተደበቁ የአይፎን ቅንብሮች ምርታችሁን ያደርጉ።', category_en: 'Apps & Tips', category_am: 'መተግበሪያዎች እና ጠቋሚዎች', date_en: 'May 10, 2024', date_am: 'ግንቦት 10፣ 2024', content_en: '<p>iOS 18 introduces a myriad of quality-of-life improvements...</p>', content_am: '<p>iOS 18 የሕይወት ጥራት ማሻሻያዎችን ያስተዋውቃል...</p>', tags_en: ['iOS 18', 'iPhone', 'Tips'], tags_am: ['አይፎን', 'ጠቋሚዎች'], keywords_en: ['ios', 'iphone'] },
  { id: 6, slug: 'gemini-vs-chatgpt', thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&q=80', author: 'Shambel', views: 18500, readingTime: 10, title_en: 'Gemini vs ChatGPT: Which AI is Better for Coding?', title_am: 'ጄሚኒ እና ቻትጂፒቲ: ለኮዲንግ የትኛው ኤአይ ይሻላል?', excerpt_en: 'A deep dive comparison of Google\'s Gemini and OpenAI\'s GPT-4.', excerpt_am: 'የጉግል ጄሚኒ እና የኦፕንኤአይ GPT-4 ጥልቅ ንጽጽር።', category_en: 'Artificial Intelligence', category_am: 'ሰው ሰራሽ አስተውቀር', date_en: 'May 08, 2024', date_am: 'ግንቦት 08፣ 2024', content_en: '<p>The battle of the LLMs has never been fiercer...</p>', content_am: '<p>የLLMዎች ጦርነት ከመቼውም ጊዜ ይበልጥ ክፉ አልነበረም...</p>', tags_en: ['Gemini', 'ChatGPT', 'Coding', 'AI'], tags_am: ['ጄሚኒ', 'ቻትጂፒቲ'], keywords_en: ['gemini', 'chatgpt', 'ai'] },
  { id: 7, slug: 'rust-taking-over', thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80', author: 'Shambel', views: 7500, readingTime: 7, title_en: 'Why Rust is Taking Over Web Development', title_am: 'Rust የድረ-ገጽ እድገትን ለምን እየተቆጣጠረ ነው', excerpt_en: 'An analysis of Rust adoption in modern web backends.', excerpt_am: 'ዘመናዊ የድረ-ገጽ ዳራዎች ላይ Rust ን መቀበል ማየት።', category_en: 'Programming', category_am: 'ፕሮግራምንግ', date_en: 'May 05, 2024', date_am: 'ግንቦት 05፣ 2024', content_en: '<p>Rust provides memory safety without a garbage collector...</p>', content_am: '<p>Rust የማይታይ ቆሻሻ ሰብሳቢ ሳይኖር የማስታወስ ደህንነትን ይሰጣል...</p>', tags_en: ['Rust', 'Web'], tags_am: ['Rust'], keywords_en: ['rust', 'web'] },
  { id: 8, slug: 'docker-basics', thumbnail: 'https://images.unsplash.com/photo-1604975701397-6365ccfd2221?w=500&q=80', author: 'Shambel', views: 6200, readingTime: 5, title_en: 'Docker Basics Every Developer Should Know', title_am: 'እያንዳንዱ ዲቨሎፐር መማር ያለበት የDocker መሰረታዊ ነገሮች', excerpt_en: 'Learn containerization to simplify your deployment process.', excerpt_am: 'የዴፕሎይሜንት ሂደትዎን ለማስቀለል ኮንቴይነርን ይማሩ።', category_en: 'DevOps', category_am: 'ዴቭኦፕስ', date_en: 'May 01, 2024', date_am: 'ግንቦት 01፣ 2024', content_en: '<p>Docker packages software into standardized units...</p>', content_am: '<p>Docker ሶፍትዌሩን ወቅበኛ ክፍሎች ውስጥ ያሸጋግራል...</p>', tags_en: ['Docker', 'DevOps'], tags_am: ['ዶከር'], keywords_en: ['docker', 'devops'] },
  { id: 9, slug: 'tailwind-tricks', thumbnail: 'https://images.unsplash.com/photo-1545665277-4734cc1296b7?w=500&q=80', author: 'Shambel', views: 8800, readingTime: 6, title_en: '5 Tailwind CSS Tricks You Did Not Know', title_am: '5 ያላወቃቸው የTailwind CSS ዘጋቢዎች', excerpt_en: 'Improve your styling workflow with these advanced tips.', excerpt_am: 'በእነዚህ የላቁ ጠቋሚዎች የስታይሊንግ ስራዎን ያሻሽሉ።', category_en: 'Programming', category_am: 'ፕሮግራምንግ', date_en: 'Apr 28, 2024', date_am: 'ሚያዝያ 28፣ 2024', content_en: '<p>Tailwind CSS is highly customizable...</p>', content_am: '<p>Tailwind CSS በጣም ሊበጅ የሚችል ነው...</p>', tags_en: ['Tailwind', 'CSS'], tags_am: ['ታይልዊንድ'], keywords_en: ['tailwind', 'css'] },
  { id: 99, slug: 'ultimate-guide-to-nextjs-14',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    author: 'Shambel',
    views: 25500,
    readingTime: 15,
    title_en: 'The Ultimate Guide to Next.js 14 App Router: Server Components, Data Fetching, and Caching',
    title_am: 'የኔክስት.js 14 አፕ ራውተር አስተማሪ መመሪያ: የሰርቨር ኮምፖኔንቶች፣ ውሂብ ማምጣት እና ካሺንግ',
    excerpt_en: 'Dive deep into the Next.js 14 App Router. Learn how Server Components revolutionize data fetching, how caching works, and how to build blazing-fast web applications with this comprehensive guide.',
    excerpt_am: 'ወደ ኔክስት.js 14 አፕ ራውተር ጥልቅ ይግቡ። የሰርቨር ኮምፖኔንቶች ውሂብን እንዴት እንደሚቀይሩ፣ ካሺንግ እንዴት እንደሚሰራ እና በዚህ የደረጃ አማካይ መመሪያ ፈጣን የድረ-ገጽ መተግበሪያዎችን እንዴት እንደሚገንቡ ይማሩ።',
    category_en: 'Programming',
    category_am: 'ፕሮግራምንግ',
    date_en: 'July 24, 2024',
    date_am: 'ሐምሌ 24፣ 2024',
    content_en: '<h2>Introduction to the App Router</h2><p>Next.js 14 introduced a paradigm shift with the App Router, moving away from the Pages Router to a more intuitive, folder-based routing system. This change brings native support for React Server Components, enabling a new level of performance and developer experience.</p><p>In this comprehensive guide, we will explore the core concepts of the App Router, how it handles data fetching, and best practices for building modern web applications.</p><h2>Understanding React Server Components</h2><p>Server Components are the default in the App Router. They execute on the server and send zero JavaScript to the client by default. This drastically reduces the bundle size and improves initial page load times.</p><p>Unlike Client Components, Server Components cannot use hooks like <code>useState</code> or <code>useEffect</code>. They are ideal for fetching data, accessing backends, and rendering static content.</p><h3>When to use Client Components</h3><p>If you need interactivity, state management, or browser APIs, you must use the <code>"use client"</code> directive. Client Components are pre-rendered on the server and then hydrated on the client.</p><h2>Data Fetching and Caching</h2><p>Next.js 14 extends the native <code>fetch</code> Web API. You no longer need <code>getServerSideProps</code> or <code>getStaticProps</code>. Data fetching is now done directly inside the Server Component.</p><p>The <code>fetch</code> API in Next.js automatically caches requests by default. You can control this behavior using the <code>cache: \'no-store\'</code> or <code>next: { revalidate: 60 }</code> options.</p><h3>On-Demand Revalidation</h3><p>To ensure your content stays fresh without constantly re-fetching, you can use on-demand revalidation via webhooks. When your backend data updates, it pings a Next.js API route to purge the cache and regenerate the page.</p><h2>Conclusion</h2><p>The App Router in Next.js 14 simplifies complex patterns while boosting performance. By leveraging Server Components and the native fetch API, developers can build faster, more scalable applications with less boilerplate.</p>',
    content_am: '<h2>ወደ አፕ ራውተር መግቢያ</h2><p>ኔክስት.js 14 ከገጾች ራውተር ወደ ተሻለ የሆነ ፎልደር ላይ የተመሰረተ ራውቲንግ ሲስተም በመቀየር ትልቅ ለውጥ አመጣ። ይህ ለውጥ የሬአክት ሰርቨር ኮምፖኔንቶችን በአጠቃላይ ይደግፋል፣ ይህም አዲስ የአፈጻጸም ደረጃ እና የገንቢ ልምድ ያስገኛል።</p><p>በዚህ ሰፊ መመሪያ ውስጥ የአፕ ራውተርን ዋና ጽንሰ-ሐሳቦች፣ ውሂብን እንዴት እንደሚያስተናግድ እና ዘመናዊ የድረ-ገጽ መተግበሪያዎችን ለመገንባት ምርጥ ልምሮችን እናያለን።</p><h2>የሬአክት ሰርቨር ኮምፖኔንቶችን መረዳት</h2><p>ሰርቨር ኮምፖኔንቶች በአፕ ራውተር ውስጥ ነባሪ ናቸው። በሰርቨር ላይ ይሰራሉ እና በነባሪነት ወደ ክላይንት ምንም ጃቫስክሪፕት አይልኩም። ይህ የቡንድል መጠንን በእጅጉ ይቀንሳል እና የመነሻ ገጽ መጫኛ ጊዜን ያሻሽላል።</p><p>ከክላይንት ኮምፖኔንቶች ያለዎት ሰርቨር ኮምፖኔንቶች <code>useState</code> ወይም <code>useEffect</code> ያሉ ሁክስ መጠቀም አይችሉም። ለውሂብ ማምጣት፣ የጀርባ ኮዶችን ለመድረስ እና ስታቲክ ይዘትን ለማሳየት ተስማሚ ናቸው።</p><h3>መቼ ክላይንት ኮምፖኔንቶችን መጠቀም እንዳለብን</h3><p>መስተጋብያ፣ የሁኔታ አስተዳደር ወይም የአሳሽ APIs ያስፈልግዎታል ከሆነ <code>"use client"</code> መመሪያ መጠቀም አለብዎት። ክላይንት ኮምፖኔንቶች በሰርቨር ላይ ቅድመ-ማቅረብ ይደረግላቸዋል እና ከዚያ በክላይንት ላይ ይሟሟሉ።</p><h2>ውሂብ ማምጣት እና ካሺንግ</h2><p>ኔክስት.js 14 የመጀመሪያውን <code>fetch</code> ዌብ ኤፒአይ ያራዝባል። ከአሁን በኋላ <code>getServerSideProps</code> ወይም <code>getStaticProps</code> አያስፈልግዎትም። የውሂብ ማምጣት አሁን በቀጥታ በሰርቨር ኮምፖኔንት ውስጥ ይከናወናል።</p><p>በኔክስት.js ውስጥ ያለው የ<code>fetch</code> ኤፒኤፒ በነባሪነት ጥያቄዎችን በራስ-ሰር ያስቀምጣል። ይህን ባህሪ በ <code>cache: \'no-store\'</code> ወይም <code>next: { revalidate: 60 }</code> አማራጮች መጠቀም መቆጣጠር ይችላሉ።</p><h3>በፍላግ መንቀሽ</h3><p>ይዘትዎ ያለማቋረጥ እንደገና ሳይወስዱ ትኩስ መኖሩን ለማረጋገጥ ፣ በዌብሁክስ በኩል በፍላግ ማስገባትን መጠቀም ይችላሉ። የጀርባ ውሂብዎ ሲያዘምን የኔክስት.js ኤፒአይ ሩት ፒንግ ያደርጋል እና ካሺንግን ለማጽዳት እና ገጹን እንደገና ለመፍጠር።</p><h2>ማጠቃለያ</h2><p>በኔክስት.js 14 ውስጥ ያለው የአፕ ራውተር ውስብስብ ንድፎችን ሲያቃል አፈጻጸምን ይጨምራል። የሰርቨር ኮምፖኔንቶችን እና የመጀመሪያውን የፌች ኤፒአይ በመጠቀም ገንቢዎች በአነስተኛ ቦይለርፕሌት ፈጣን እና ሊስተማት የሆኑ መተግበሪያዎችን መገንባት ይችላሉ።</p>',
    tags_en: ['Next.js', 'React', 'Web Development'],
    tags_am: ['ኔክስት.js', 'ሬአክት', 'የድረ-ገጽ እድገት'],
    keywords_en: ['nextjs', 'react', 'app router']
  }
];

const mockVideos: Video[] = [
  { id: 'v1', title_en: ' turn off the setting increase your battery life', title_am: 'የስልካችንን ባትሪ የሚገድሉ አደገኛ setting አሁን ግቡና አስተካክሎ ', thumbnail: '/7PdIZBMvNqA-HD.jpg', youtubeId: '7PdIZBMvNqA', duration: '10:24' },
  { id: 'v2', title_en: 'How to use notion app Write notes, plan projects ', title_am: 'የኖሽን አፕ አጠቃቀም', thumbnail: '/9mRKyJGqyJY-HD.jpg', youtubeId: '9mRKyJGqyJY', duration: '08:15' }
];

export const getFeaturedArticles = async (): Promise<Article[]> => {
  if (!API_URL) return new Promise((resolve) => setTimeout(() => resolve(mockArticles.slice(0, 2)), 100));
  const res = await fetch(`${API_URL}/articles?featured=true`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map(mapArticle).slice(0, 2);
};
// 1. Replace getLatestArticles with this:
export const getLatestArticles = async (): Promise<Article[]> => {
  const videosAsArticles: Article[] = mockVideos.map(v => ({
    id: parseInt(v.id.replace('v', '')) + 1000, slug: v.id, thumbnail: v.thumbnail, author: 'Shambel', views: 12000, readingTime: parseInt(v.duration) || 10,
    title_en: v.title_en, title_am: v.title_am, excerpt_en: 'Watch this premium video tutorial.', excerpt_am: 'ይህን ምርጥ የቪዲዮ ማስተማሪያ ይመልከቱ።',
    category_en: 'Video Tutorials', category_am: 'የቪዲዮ ማስተማሪያዎች', date_en: 'May 02, 2024', date_am: 'ግንቦት 02፣ 2024',
    content_en: `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${v.youtubeId}" frameborder="0" allowfullscreen></iframe>`,
    youtubeId: v.youtubeId, duration: v.duration
  }));

  // Combine and sort by date descending (latest first)
  const allContent = [...mockArticles, ...videosAsArticles].sort((a, b) => new Date(b.date_en).getTime() - new Date(a.date_en).getTime());

  if (!API_URL) return new Promise((resolve) => setTimeout(() => resolve(allContent.slice(0, 8)), 100));
  const res = await fetch(`${API_URL}/articles?limit=8`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map(mapArticle);
};

// 2. Replace getAllArticles with this:
export const getAllArticles = async (page: number = 1, limit: number = 6): Promise<{ articles: Article[], totalPages: number }> => {
  const videosAsArticles: Article[] = mockVideos.map(v => ({
    id: parseInt(v.id.replace('v', '')) + 1000, slug: v.id, thumbnail: v.thumbnail, author: 'Shambel', views: 12000, readingTime: parseInt(v.duration) || 10,
    title_en: v.title_en, title_am: v.title_am, excerpt_en: 'Watch this premium video tutorial.', excerpt_am: 'ይህን ምርጥ የቪዲዮ ማስተማሪያ ይመልከቱ።',
    category_en: 'Video Tutorials', category_am: 'የቪዲዮ ማስተማሪያዎች', date_en: 'May 02, 2024', date_am: 'ግንቦት 02፣ 2024',
    content_en: `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${v.youtubeId}" frameborder="0" allowfullscreen></iframe>`,
    youtubeId: v.youtubeId, duration: v.duration
  }));

  // Combine and sort by date descending (latest first)
  const allContent = [...mockArticles, ...videosAsArticles].sort((a, b) => new Date(b.date_en).getTime() - new Date(a.date_en).getTime());

  if (!API_URL) {
    return new Promise((resolve) => setTimeout(() => {
      const start = (page - 1) * limit;
      const end = start + limit;
      resolve({ articles: allContent.slice(start, end), totalPages: Math.ceil(allContent.length / limit) });
    }, 100));
  }
  const res = await fetch(`${API_URL}/articles?page=${page}&limit=${limit}`, { next: { revalidate: 60 } });
  if (!res.ok) return { articles: [], totalPages: 0 };
  const data = await res.json();
  return { articles: data.data.map(mapArticle), totalPages: data.totalPages || 1 };
};

// 3. Replace getRelatedArticles with this:
export const getRelatedArticles = async (category_en: string, currentId: number): Promise<Article[]> => {
  const videosAsArticles: Article[] = mockVideos.map(v => ({
    id: parseInt(v.id.replace('v', '')) + 1000, slug: v.id, thumbnail: v.thumbnail, author: 'Shambel', views: 12000, readingTime: parseInt(v.duration) || 10,
    title_en: v.title_en, title_am: v.title_am, excerpt_en: 'Watch this premium video tutorial.', excerpt_am: 'ይህን ምርጥ የቪዲዮ ማስተማሪያ ይመልከቱ።',
    category_en: 'Video Tutorials', category_am: 'የቪዲዮ ማስተማሪያዎች', date_en: 'May 02, 2024', date_am: 'ግንቦት 02፣ 2024',
    content_en: `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${v.youtubeId}" frameborder="0" allowfullscreen></iframe>`,
    youtubeId: v.youtubeId, duration: v.duration
  }));

  const allContent = [...mockArticles, ...videosAsArticles];

  if (!API_URL) {
    // Try to find 3 articles in the same category
    let related = allContent.filter(a => a.category_en === category_en && a.id !== currentId);
    // If less than 3, fill with the latest articles from other categories
    if (related.length < 3) {
      const fillers = allContent.filter(a => a.category_en !== category_en && a.id !== currentId);
      related = [...related, ...fillers];
    }
    return new Promise((resolve) => setTimeout(() => resolve(related.slice(0, 3)), 100));
  }
  const res = await fetch(`${API_URL}/articles?category=${category_en}&limit=3`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.filter((a: any) => a.id !== currentId).slice(0, 3).map(mapArticle);
};

// 3. Add this new function at the very bottom of the file (after searchArticles):
export const getVideoById = async (id: string): Promise<Article | null> => {
  if (!API_URL) {
    const video = mockVideos.find(v => v.id === id);
    if (!video) return null;
    return {
      id: parseInt(video.id.replace('v', '')) + 1000, slug: video.id, thumbnail: video.thumbnail, author: 'Shambel', views: 12000, readingTime: parseInt(video.duration) || 10,
      title_en: video.title_en, title_am: video.title_am, excerpt_en: 'Watch this premium video tutorial.', excerpt_am: 'ይህን ምርጥ የቪዲዮ ማስተማሪያ ይመልከቱ።',
      category_en: 'Video Tutorials', category_am: 'የቪዲዮ ማስተማሪያዎች', date_en: 'May 02, 2024', date_am: 'ግንቦት 02፣ 2024',
      content_en: `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${video.youtubeId}" frameborder="0" allowfullscreen></iframe>`,
      youtubeId: video.youtubeId, duration: video.duration
    };
  }
  // Future API integration:
  const res = await fetch(`${API_URL}/videos/${id}`, { next: { revalidate: 60, tags: ['video', id] } });
  if (!res.ok) return null;
  const data = await res.json();
  return mapArticle(data);
};

export const getTrendingArticles = async (): Promise<Article[]> => {
  if (!API_URL) return new Promise((resolve) => setTimeout(() => resolve([...mockArticles].sort((a,b) => b.views - a.views).slice(0, 3)), 100));
  const res = await fetch(`${API_URL}/articles?sort=trending&limit=3`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map(mapArticle);
};

export const getPopularArticles = async (): Promise<Article[]> => {
  if (!API_URL) return new Promise((resolve) => setTimeout(() => resolve([...mockArticles].sort((a,b) => b.views - a.views).slice(0, 4)), 100));
  const res = await fetch(`${API_URL}/articles?sort=popular&limit=4`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map(mapArticle);
};

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  if (!API_URL) return new Promise((resolve) => setTimeout(() => resolve(mockArticles.find(a => a.slug === slug) || null), 100));
  const res = await fetch(`${API_URL}/articles/${slug}`, { next: { revalidate: 60, tags: ['article', slug] } });
  if (!res.ok) return null;
  const data = await res.json();
  return mapArticle(data);
};



export const getVideos = async (): Promise<Video[]> => {
  if (!API_URL) return new Promise((resolve) => setTimeout(() => resolve(mockVideos), 100));
  const res = await fetch(`${API_URL}/videos`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  return res.json();
};

export const searchArticles = async (query: string): Promise<Article[]> => {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  let allArticles: Article[] = mockArticles;

  if (API_URL) {
    const res = await fetch(`${API_URL}/articles`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      allArticles = data.map(mapArticle);
    } else {
      return [];
    }
  }

  return allArticles.filter(a => 
    a.title_en.toLowerCase().includes(q) ||
    a.title_am.toLowerCase().includes(q) ||
    a.excerpt_en.toLowerCase().includes(q) ||
    a.excerpt_am.toLowerCase().includes(q) ||
    a.category_en.toLowerCase().includes(q) ||
    a.category_am.toLowerCase().includes(q) ||
    (a.content_en || '').toLowerCase().includes(q) ||
    (a.content_am || '').toLowerCase().includes(q) ||
    (a.tags_en || []).some(tag => tag.toLowerCase().includes(q)) ||
    (a.tags_am || []).some(tag => tag.toLowerCase().includes(q)) ||
    (a.keywords_en || []).some(k => k.toLowerCase().includes(q)) ||
    (a.keywords_am || []).some(k => k.toLowerCase().includes(q))
  );
};