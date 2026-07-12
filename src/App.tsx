import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  AlertTriangle,
  BarChart3,
  ChevronDown,
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
import { AppStoreBadge } from './components/AppStoreBadge';

const APP_STORE_URL = 'https://apps.apple.com/app/nutriswap/id6745822109';

const RATING_STYLES = {
  excellent: 'text-brand-primary bg-brand-primary/15',
  good: 'text-brand-good bg-brand-good/15',
  limit: 'text-brand-limit bg-brand-limit/15',
  avoid: 'text-brand-avoid bg-brand-avoid/15',
} as const;

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
    { icon: BarChart3, title: t('features.scoreTitle'), desc: t('features.scoreDesc') },
    { icon: Sparkles, title: t('features.breakdownTitle'), desc: t('features.breakdownDesc') },
    { icon: AlertTriangle, title: t('features.alertsTitle'), desc: t('features.alertsDesc') },
    { icon: Search, title: t('features.ingredientsTitle'), desc: t('features.ingredientsDesc') },
    { icon: ShoppingBag, title: t('features.alternativesTitle'), desc: t('features.alternativesDesc') },
  ];

  const ratingTiers = (['excellent', 'good', 'limit', 'avoid'] as const).map((key) => ({
    key,
    label: t(`features.ratings.${key}`),
    className: RATING_STYLES[key],
  }));

  const faqItems = t('faq.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <div className="min-h-screen bg-brand-background flex flex-col">
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <nav className="bg-white border-b border-gray-200/80 sticky top-0 z-40">
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
              className="px-4 sm:px-6 py-2.5 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-primary-hover transition-colors shadow-sm text-sm sm:text-base"
            >
              {t('nav.download')}
            </a>
          </div>
        </div>
      </nav>

      <div className="bg-brand-primary text-white py-2 text-center text-sm font-medium">
        <p>{t('banner')}</p>
      </div>

      <main className="flex-grow">
        {/* Hero — Olive-style split: copy left, phone mockup right */}
        <section className="relative overflow-hidden bg-brand-background lg:grid lg:grid-cols-2 lg:min-h-[640px] xl:min-h-[720px]">
          <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-10 xl:px-16 py-14 lg:py-16 max-w-7xl lg:max-w-none lg:ml-auto lg:w-full">
            <div className="max-w-xl lg:max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/15 text-brand-primary text-sm font-medium mb-6 w-fit">
                <ScanLine className="w-4 h-4" />
                NutriSwap Scan
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-[1.05] tracking-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="w-fit">
                <AppStoreBadge />
              </a>
            </div>
          </div>

          <div className="relative flex items-end justify-center lg:justify-end px-4 sm:px-6 lg:px-0 overflow-hidden rounded-br-[3rem] sm:rounded-br-[4rem] lg:rounded-br-[5rem] xl:rounded-br-[6rem] min-h-[360px] lg:min-h-0">
            <img
              src="/hero-scan-mockup.png?v=2"
              alt={t('hero.screenshotsAlt')}
              className="w-full max-w-md sm:max-w-xl lg:max-w-none lg:w-[115%] xl:w-[122%] h-auto object-contain object-bottom pointer-events-none select-none"
            />
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div id="how-it-works" className="mt-20 lg:mt-24 mb-16 scroll-mt-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
              {t('howItWorks.title')}
            </h2>
            <div className="bg-white p-8 rounded-card shadow-card border border-gray-200/60">
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { icon: ScanLine, title: t('howItWorks.step1Title'), desc: t('howItWorks.step1Desc') },
                  { icon: BarChart3, title: t('howItWorks.step2Title'), desc: t('howItWorks.step2Desc') },
                  { icon: Repeat, title: t('howItWorks.step3Title'), desc: t('howItWorks.step3Desc') },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-brand-primary/15 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-brand-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-900">
              {t('features.title')}
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {ratingTiers.map(({ key, label, className }) => (
                <span
                  key={key}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${className}`}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {breakdownItems.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200/60"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-card shadow-card border border-gray-200/60"
                >
                  <div className="w-12 h-12 mb-4 bg-brand-primary/15 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
              <div className="relative p-[1.5px] rounded-card bg-gradient-to-br from-[#8533FF] via-[#F26BC7] to-[#47D1F5] sm:col-span-2 lg:col-span-1">
                <div className="bg-white p-6 rounded-[16.5px] h-full">
                  <div className="w-12 h-12 mb-4 bg-gradient-to-br from-[#8533FF]/15 to-[#47D1F5]/15 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#8533FF]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {t('features.analysisTitle')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t('howItWorks.step2Desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
              {t('why.title')}
            </h2>
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-card shadow-card border border-gray-200/60 grid md:grid-cols-2 gap-12 items-center">
                <div className="p-4 sm:p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">{t('why.scanTitle')}</h3>
                  <ul className="space-y-4">
                    {(t('why.scanItems', { returnObjects: true }) as string[]).map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 rounded-full bg-brand-primary flex-shrink-0" />
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 sm:p-8">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-[0_2px_5px_rgba(0,0,0,0.05)] border border-gray-200/60">
                    <video
                      src="/onboarding_insights.mov"
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

              <div className="bg-white p-8 rounded-card shadow-card border border-gray-200/60 grid md:grid-cols-2 gap-12 items-center">
                <div className="p-4 sm:p-8 order-2 md:order-1">
                  <div className="aspect-square overflow-hidden rounded-card shadow-card">
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
                        <div className="w-2 h-2 mt-2 rounded-full bg-brand-primary flex-shrink-0" />
                        <p className="text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="faq" className="max-w-2xl mx-auto mb-16 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">
              {t('faq.title')}
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.question} className="bg-white rounded-xl shadow-card border border-gray-200/60 group">
                  <summary className="px-6 py-4 cursor-pointer font-medium flex items-center justify-between">
                    {faq.question}
                    <ChevronDown
                      size={20}
                      className="text-brand-muted transition-transform group-open:rotate-180 shrink-0 ml-4"
                    />
                  </summary>
                  <p className="px-6 py-4 text-gray-600 border-t border-gray-100">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('cta.title')}</h2>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-primary-hover transition-colors text-lg shadow-md"
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
