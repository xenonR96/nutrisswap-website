import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { BlogLayout } from './BlogLayout';
import { articles, getArticleById, getArticleImage } from '../data/articles';

export function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const article = id ? getArticleById(id) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const related = articles.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <BlogLayout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('blog.back')}
        </Link>

        <p className="text-sm font-medium text-brand-muted mb-3 capitalize">{article.dateText}</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
          {article.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">{article.subtitle}</p>

        <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-gray-50 mb-10 border border-gray-200/60">
          <img
            src={getArticleImage(article)}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-5">
          {article.blocks.map((block, index) => {
            if (block.kind === 'heading') {
              return (
                <h2
                  key={`${article.id}-h-${index}`}
                  className="text-xl sm:text-2xl font-semibold text-gray-900 pt-4"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.kind === 'link' && block.url) {
              return (
                <p key={`${article.id}-l-${index}`}>
                  <a
                    href={block.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-primary hover:text-brand-primary-hover underline underline-offset-2 break-words"
                  >
                    {block.text}
                  </a>
                </p>
              );
            }

            return (
              <p key={`${article.id}-p-${index}`} className="text-gray-700 leading-relaxed text-base sm:text-[1.05rem]">
                {block.text}
              </p>
            );
          })}
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-gray-200/80 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('blog.moreArticles')}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/${item.id}`}
                  className="group bg-brand-background rounded-card border border-gray-200/60 overflow-hidden hover:shadow-card transition-shadow"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                    <img
                      src={getArticleImage(item)}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-brand-muted mb-1 capitalize">{item.dateText}</p>
                    <h3 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </BlogLayout>
  );
}
