import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BlogLayout } from './BlogLayout';
import { articles, getArticleImage } from '../data/articles';

export function Blog() {
  const { t } = useTranslation();

  return (
    <BlogLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-sm font-semibold text-brand-primary mb-3">{t('blog.eyebrow')}</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            {t('blog.title')}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group bg-white rounded-card shadow-card border border-gray-200/60 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                <img
                  src={getArticleImage(article)}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-brand-muted mb-2 capitalize">{article.dateText}</p>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug group-hover:text-brand-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{article.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </BlogLayout>
  );
}
