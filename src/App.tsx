import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  AlertTriangle,
  BarChart3,
  ChevronDown,
  Leaf,
  Repeat,
  ScanLine,
  Search,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { Logo } from './components/Logo';
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';
import { Contact } from './components/Contact';
import { Sources } from './components/Sources';
import { GetPage } from './components/GetPage';
import { ComingSoonModal } from './components/ComingSoonModal';
import { LanguageToggle } from './components/LanguageToggle';

const APP_STORE_URL = 'https://apps.apple.com/app/nutriswap/id6745822109';

function HomePage() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const breakdownItems = [
    t('features.breakdownItems.seedOils'),
    t('features.breakdownItems.processing'),
    t('features.breakdownItems.sugars'),
    t('features.breakdownItems.additives'),
  ];

  const featureCards = [
    {
      icon: BarChart3,
      title: t('features.scoreTitle'),
      desc: t('features.scoreDesc'),
    },
    {
      icon: Sparkles,
      title: t('features.breakdownTitle'),
      desc: t('features.breakdownDesc'),
    },
    {
      icon: AlertTriangle,
      title: t('features.alertsTitle'),
      desc: t('features.alertsDesc'),
    },
    {
      icon: Search,
      title: t('features.ingredientsTitle'),
      desc: t('features.ingredientsDesc'),
    },
    {
      icon: ShoppingBag,
      title: t('features.alternativesTitle'),
      desc: t('features.alternativesDesc'),
    },
  ];

  const faqItems = t('faq.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 lg:gap-8 min-w-0">
            <Logo />
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {t('nav.howItWorks')}
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {t('nav.features')}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {t('nav.faq')}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <LanguageToggle />
            <a
              href={APP_STORE_URL}
              className="px-4 sm:px-6 py-2.5 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-sm text-sm sm:text-base"
            >
              {t('nav.download')}
            </a>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 text-center text-sm font-medium shadow-sm">
        <p>{t('banner')}</p>
      </div>

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-16">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <ScanLine className="w-4 h-4" />
                NutriSwap Scan
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {t('hero.title')}
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8">{t('hero.subtitle')}</p>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <img
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                  alt={t('hero.downloadAlt')}
                  className="h-14 sm:h-16 hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
            <div className="relative">
              <img
                src="/screenshots.png"
                alt={t('hero.screenshotsAlt')}
                className="w-full h-auto rounded-2xl shadow-lg border border-gray-100"
              />
            </div>
          </div>

          {/* How it works */}
          <div id="how-it-works" className="mt-24 mb-16 scroll-mt-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {t('howItWorks.title')}
            </h2>
            <div className="bg-white p-8 rounded-3xl shadow-md">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <ScanLine className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('howItWorks.step1Title')}</h3>
                  <p className="text-gray-600">{t('howItWorks.step1Desc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('howItWorks.step2Title')}</h3>
                  <p className="text-gray-600">{t('howItWorks.step2Desc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Repeat className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t('howItWorks.step3Title')}</h3>
                  <p className="text-gray-600">{t('howItWorks.step3Desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scan features */}
          <div id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {t('features.title')}
            </h2>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {breakdownItems.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="w-12 h-12 mb-4 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl shadow-md text-white sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t('features.analysisTitle')}</h3>
                <p className="text-emerald-50 text-sm leading-relaxed">
                  {t('howItWorks.step2Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Why section */}
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {t('why.title')}
            </h2>
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-3xl shadow-md grid md:grid-cols-2 gap-12 items-center">
                <div className="p-4 sm:p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">{t('why.scanTitle')}</h3>
                  <ul className="space-y-4">
                    {(t('why.scanItems', { returnObjects: true }) as string[]).map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 sm:p-8">
                  <div className="aspect-square overflow-hidden rounded-3xl shadow-md">
                    <video
                      src="/test_video.mov"
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-label={t('why.videoAlt')}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md grid md:grid-cols-2 gap-12 items-center">
                <div className="p-4 sm:p-8 order-2 md:order-1">
                  <div className="aspect-square overflow-hidden rounded-3xl shadow-md">
                    <img
                      src="/whofor.png"
                      alt={t('why.imageAlt')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-8 order-1 md:order-2">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">{t('why.everyoneTitle')}</h3>
                  <ul className="space-y-4">
                    {(t('why.everyoneItems', { returnObjects: true }) as string[]).map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="max-w-2xl mx-auto mb-16 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {t('faq.title')}
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.question} className="bg-white rounded-xl shadow-md group">
                  <summary className="px-6 py-4 cursor-pointer font-medium flex items-center justify-between">
                    {faq.question}
                    <ChevronDown
                      size={20}
                      className="text-gray-500 transition-transform group-open:rotate-180 shrink-0 ml-4"
                    />
                  </summary>
                  <p className="px-6 py-4 text-gray-600 border-t">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {t('cta.title')}
            </h2>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-600 transition-colors text-lg shadow-md"
            >
              {t('cta.button')}
            </a>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">{t('footer.copyright')}</div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sources" element={<Sources />} />
      <Route path="/get" element={<GetPage />} />
    </Routes>
  );
}

export default App;
