import { useTranslation } from 'react-i18next';

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const setLanguage = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('nutriswap-lang', lang);
    document.documentElement.lang = lang;
  };

  return (
    <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden text-sm font-medium">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 transition-colors ${
          i18n.language === 'en'
            ? 'bg-emerald-500 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1.5 transition-colors ${
          i18n.language === 'fr'
            ? 'bg-emerald-500 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        FR
      </button>
    </div>
  );
};
