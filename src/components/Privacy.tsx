import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';

const APP_STORE_URL = 'https://apps.apple.com/app/nutriswap/id6745822109';

const definitionKeys = [
  'defAccount',
  'defCompany',
  'defCookies',
  'defCountry',
  'defDevice',
  'defPersonalData',
  'defService',
  'defWebsite',
] as const;

const typeKeys = ['typePersonal', 'typeUsage', 'typeCookies'] as const;

const useKeys = [
  'useProvide',
  'useNotify',
  'useSupport',
  'useAnalysis',
  'useMonitor',
  'useDetect',
] as const;

const renderBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
};

export const Privacy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/#how-it-works"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {t('nav.howItWorks')}
              </Link>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {t('nav.blog')}
              </Link>
              <Link
                to="/#faq"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {t('nav.faq')}
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <LanguageToggle />
            <a
              href={APP_STORE_URL}
              className="px-6 py-2.5 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-primary-hover transition-colors shadow-sm"
            >
              {t('nav.download')}
            </a>
          </div>
        </div>
      </nav>

      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('privacyPage.title')}</h1>
          <div className="prose prose-emerald max-w-none">
            <p className="text-gray-600 mb-8">{t('privacyPage.lastUpdated')}</p>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="mb-4">{t('privacyPage.introP1')}</p>
              <p className="mb-8">{t('privacyPage.introP2')}</p>

              <h2 className="text-xl font-semibold mb-4">{t('privacyPage.interpretationTitle')}</h2>
              <h3 className="text-lg font-medium mb-2">{t('privacyPage.interpretationHeading')}</h3>
              <p className="mb-4">{t('privacyPage.interpretationBody')}</p>

              <h3 className="text-lg font-medium mb-2">{t('privacyPage.definitionsHeading')}</h3>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                {definitionKeys.map((key) => (
                  <li key={key}>{renderBold(t(`privacyPage.${key}`))}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold mb-4">{t('privacyPage.collectingTitle')}</h2>
              <h3 className="text-lg font-medium mb-2">{t('privacyPage.typesHeading')}</h3>
              <p className="mb-4">{t('privacyPage.typesIntro')}</p>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                {typeKeys.map((key) => (
                  <li key={key}>{renderBold(t(`privacyPage.${key}`))}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold mb-4">{t('privacyPage.useTitle')}</h2>
              <p className="mb-4">{t('privacyPage.useIntro')}</p>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                {useKeys.map((key) => (
                  <li key={key}>{t(`privacyPage.${key}`)}</li>
                ))}
              </ul>

              <h2 className="text-xl font-semibold mb-4">{t('privacyPage.securityTitle')}</h2>
              <p className="mb-8">{t('privacyPage.securityBody')}</p>

              <h2 className="text-xl font-semibold mb-4">{t('privacyPage.childrenTitle')}</h2>
              <p className="mb-8">{t('privacyPage.childrenBody')}</p>

              <h2 className="text-xl font-semibold mb-4">{t('privacyPage.changesTitle')}</h2>
              <p className="mb-8">{t('privacyPage.changesBody')}</p>

              <h2 className="text-xl font-semibold mb-4">{t('privacyPage.contactTitle')}</h2>
              <p className="mb-4">{t('privacyPage.contactBody')}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t('privacyPage.contactEmail')}</li>
                <li>
                  {t('privacyPage.contactPageBefore')}{' '}
                  <Link to="/contact" className="text-brand-primary hover:text-brand-primary-hover">
                    nutriswap.app/contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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
};
