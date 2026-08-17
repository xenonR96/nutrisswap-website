import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';

const APP_STORE_URL = 'https://apps.apple.com/app/nutriswap/id6745822109';

const linkClass = 'text-brand-primary hover:text-brand-primary-hover';

export const Sources = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('sourcesPage.title')}</h1>
          <div className="prose prose-emerald max-w-none">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                <p>{t('sourcesPage.p1')}</p>
                <p>{t('sourcesPage.p2')}</p>
                <p>{t('sourcesPage.p3')}</p>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600">
                    {t('sourcesPage.poweredBy')}{' '}
                    <a
                      href="https://platform.fatsecret.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      FatSecret Platform API
                    </a>
                  </p>
                  <img
                    src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png"
                    alt="FatSecret"
                    className="h-6"
                  />
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('sourcesPage.scientificTitle')}</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.caloriesTitle')}</h3>
                <p>{t('sourcesPage.caloriesBody')}</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a href="https://doi.org/10.1093/ajcn/51.2.241" className={linkClass}>
                      {t('sourcesPage.bmr')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.researchgate.net/publication/377659090_Comprehensive_Review_on_BMI_TDEE_BMR_and_Calories_for_Weight_Management"
                      className={linkClass}
                    >
                      {t('sourcesPage.tdee')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html" className={linkClass}>
                      {t('sourcesPage.bmi')}
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.dietTitle')}</h3>
                <p>{t('sourcesPage.dietBody')}</p>
                <ul className="list-disc pl-5 space-y-2">
                  {[
                    'https://doi.org/10.7570/jomes20065',
                    'https://doi.org/10.3390/nu12123801',
                    'https://doi.org/10.1007/s10552-017-0869-z',
                    'https://doi.org/10.1002/oby.22373',
                  ].map((href, i) => (
                    <li key={href}>
                      <a href={href} className={linkClass}>
                        {t('sourcesPage.weightResearch')} {i + 1}
                      </a>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.swapScoreTitle')}</h3>
                <p>{t('sourcesPage.swapScoreBody')}</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a href="https://www.dietaryguidelines.gov" className={linkClass}>
                      {t('sourcesPage.dietaryGuidelines')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/"
                      className={linkClass}
                    >
                      {t('sourcesPage.harvardPlate')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" className={linkClass}>
                      {t('sourcesPage.whoDiet')}
                    </a>
                  </li>
                  <li>
                    <a href="https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx" className={linkClass}>
                      {t('sourcesPage.nihNutrients')}
                    </a>
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">{t('sourcesPage.highlightsTitle')}</h2>
                <p>{t('sourcesPage.highlightsBody')}</p>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.carbsTitle')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/" className={linkClass}>
                      {t('sourcesPage.harvardCarbs')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/carbohydrates-and-blood-sugar/"
                      className={linkClass}
                    >
                      {t('sourcesPage.carbsBloodSugar')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/whole-grains" className={linkClass}>
                      {t('sourcesPage.wholeGrains')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.myplate.gov/eat-healthy/grains" className={linkClass}>
                      {t('sourcesPage.myplateGrains')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/carbohydrates"
                      className={linkClass}
                    >
                      {t('sourcesPage.ahaCarbs')}
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.fatsTitle')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a
                      href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/fats-and-cholesterol/"
                      className={linkClass}
                    >
                      {t('sourcesPage.harvardFats')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/fats-and-cholesterol/types-of-fat/"
                      className={linkClass}
                    >
                      {t('sourcesPage.typesOfFat')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats" className={linkClass}>
                      {t('sourcesPage.ahaFats')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/fats-and-cholesterol/dietary-fat-and-disease/"
                      className={linkClass}
                    >
                      {t('sourcesPage.dietaryFatDisease')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/fats/trans-fat" className={linkClass}>
                      {t('sourcesPage.transFat')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3551118/" className={linkClass}>
                      {t('sourcesPage.fatResearch')}
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.proteinTitle')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a href="https://www.myplate.gov/eat-healthy/protein-foods" className={linkClass}>
                      {t('sourcesPage.myplateProtein')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/protein-and-heart-health"
                      className={linkClass}
                    >
                      {t('sourcesPage.proteinHeart')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/protein/" className={linkClass}>
                      {t('sourcesPage.harvardProtein')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.health.harvard.edu/blog/how-much-protein-do-you-need-every-day-201506188096"
                      className={linkClass}
                    >
                      {t('sourcesPage.dailyProtein')}
                    </a>
                  </li>
                  <li>
                    <a href="https://pubmed.ncbi.nlm.nih.gov/26797090/" className={linkClass}>
                      {t('sourcesPage.proteinResearch')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.myplate.gov/eat-healthy/protein-foods/beans-peas-lentils" className={linkClass}>
                      {t('sourcesPage.beans')}
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.fiberTitle')}</h3>
                <ul className="list-disc pl-5">
                  <li>
                    <a href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/fiber/" className={linkClass}>
                      {t('sourcesPage.harvardFiber')}
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.vitaminsTitle')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a href="https://www.hsph.harvard.edu/nutritionsource/vitamins/" className={linkClass}>
                      {t('sourcesPage.harvardVitamins')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.cdc.gov/nccdphp/dnpao/division-information/media-tools/adults-fruits-vegetables.html"
                      className={linkClass}
                    >
                      {t('sourcesPage.cdcFruits')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/nutrition-basics/how-can-i-eat-more-nutrient-dense-foods"
                      className={linkClass}
                    >
                      {t('sourcesPage.nutrientDense')}
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.macrosTitle')}</h3>
                <p>{t('sourcesPage.macrosBody')}</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a href="https://www.dietaryguidelines.gov" className={linkClass}>
                      {t('sourcesPage.dietaryGuidelines')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" className={linkClass}>
                      {t('sourcesPage.whoHealthyDiet')}
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.greensTitle')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a href="https://www.myplate.gov/eat-healthy/vegetables" className={linkClass}>
                      {t('sourcesPage.myplateVeg')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/vegetables-and-fruits/"
                      className={linkClass}
                    >
                      {t('sourcesPage.harvardVeg')}
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.processedTitle')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a
                      href="https://www.wcrf.org/dietandcancer/recommendations/limit-red-processed-meat"
                      className={linkClass}
                    >
                      {t('sourcesPage.wcrfMeat')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hsph.harvard.edu/news/hsph-in-the-news/are-all-processed-meats-equally-bad-for-health/"
                      className={linkClass}
                    >
                      {t('sourcesPage.processedHealth')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hsph.harvard.edu/nutritionsource/processed-foods/" className={linkClass}>
                      {t('sourcesPage.harvardProcessed')}
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.sugarTitle')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sugar" className={linkClass}>
                      {t('sourcesPage.ahaSugar')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sugar/how-much-sugar-is-too-much"
                      className={linkClass}
                    >
                      {t('sourcesPage.howMuchSugar')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hsph.harvard.edu/nutritionsource/carbohydrates/added-sugar-in-the-diet/"
                      className={linkClass}
                    >
                      {t('sourcesPage.addedSugarDiet')}
                    </a>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">{t('sourcesPage.sodiumTitle')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a href="https://www.heart.org/en/healthy-living/healthy-eating/eat-smart/sodium" className={linkClass}>
                      {t('sourcesPage.ahaSodium')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hsph.harvard.edu/nutritionsource/salt-and-sodium/take-action-on-salt/"
                      className={linkClass}
                    >
                      {t('sourcesPage.takeActionSalt')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hsph.harvard.edu/nutritionsource/salt-and-sodium/" className={linkClass}>
                      {t('sourcesPage.harvardSalt')}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ncbi.nlm.nih.gov/books/NBK133292/" className={linkClass}>
                      {t('sourcesPage.sodiumResearch')}
                    </a>
                  </li>
                </ul>
              </div>
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
