import rawArticles from './home_articles_fr.json';

export type ArticleBlock = {
  kind: 'heading' | 'paragraph' | 'link';
  text: string;
  url?: string;
};

export type Article = {
  id: string;
  title: string;
  subtitle: string;
  dateText: string;
  imageAssetName: string;
  blocks: ArticleBlock[];
};

const IMAGE_MAP: Record<string, string> = {
  home_article_hexane: '/blog/hexane.png',
  home_article_huiles: '/blog/huiles.png',
  home_article_nutriscore: '/blog/nutriscore.png',
  home_article_nova: '/blog/nova.png',
  home_article_additifs: '/blog/additifs.png',
  home_article_additifs_nutrinet: '/blog/additifs-nutrinet.png',
};

export const articles = rawArticles as Article[];

export function getArticleImage(article: Article): string {
  return IMAGE_MAP[article.imageAssetName] ?? '/blog/hexane.png';
}

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}
