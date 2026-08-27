import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';

const DELETE_EMAIL = 'nutriswap@mxjdigital.com';
const APP_STORE_URL = 'https://apps.apple.com/app/nutriswap/id6745822109';

export const DeleteAccount = () => {
  const { t } = useTranslation();

  const mailtoLink = `mailto:${DELETE_EMAIL}?subject=${encodeURIComponent(t('deleteAccountPage.mailSubject'))}&body=${encodeURIComponent(t('deleteAccountPage.mailBody'))}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
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
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('deleteAccountPage.title')}</h1>
          <p className="text-gray-600 mb-8">{t('deleteAccountPage.intro')}</p>

          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">{t('deleteAccountPage.stepsTitle')}</h2>
            <ol className="list-decimal pl-5 space-y-4 text-gray-700">
              <li>
                {t('deleteAccountPage.step1Before')}{' '}
                <a href={mailtoLink} className="text-brand-primary font-medium hover:underline">
                  {DELETE_EMAIL}
                </a>{' '}
                {t('deleteAccountPage.step1After')}
              </li>
              <li>
                {t('deleteAccountPage.step2')} <strong>{t('deleteAccountPage.step2Subject')}</strong>.
              </li>
              <li>{t('deleteAccountPage.step3')}</li>
              <li>{t('deleteAccountPage.step4')}</li>
            </ol>

            <a
              href={mailtoLink}
              className="inline-block w-full sm:w-auto text-center px-6 py-3 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-primary-hover transition-colors"
            >
              {t('deleteAccountPage.cta')}
            </a>

            <p className="text-sm text-gray-500 pt-2">{t('deleteAccountPage.note')}</p>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">{t('footer.copyright')}</div>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t('footer.terms')}
              </Link>
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {t('footer.contact')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
