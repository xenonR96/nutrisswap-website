import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';

const APP_STORE_URL = 'https://apps.apple.com/app/nutriswap/id6745822109';

export function BlogLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      <nav className="bg-white border-b border-gray-200/80 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-4 lg:gap-8 min-w-0">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/blog" className="text-gray-900 font-medium transition-colors">
                {t('nav.blog')}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <LanguageToggle />
            <a
              href={APP_STORE_URL}
              className="px-3 sm:px-6 py-2 sm:py-2.5 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-primary-hover transition-colors shadow-sm text-xs sm:text-base whitespace-nowrap"
            >
              {t('nav.download')}
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">{t('footer.copyright')}</div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t('nav.blog')}
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t('footer.terms')}
              </Link>
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t('footer.contact')}
              </Link>
              <Link to="/sources" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t('footer.sources')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
