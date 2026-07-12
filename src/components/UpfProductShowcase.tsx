import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const CHIP_STYLES = {
  red: 'bg-red-500/15 text-red-600',
  orange: 'bg-orange-500/20 text-orange-700',
  yellow: 'bg-amber-200/60 text-amber-900',
  gray: 'bg-gray-500/15 text-gray-600',
} as const;

const STATUS_STYLES = {
  good: 'text-brand-good bg-brand-good/15',
  limit: 'text-brand-limit bg-brand-limit/15',
  avoid: 'text-brand-avoid bg-brand-avoid/15',
} as const;

const NOVA_STYLES = {
  1: 'text-brand-good bg-brand-good/15',
  2: 'text-brand-good bg-brand-good/15',
  3: 'text-brand-limit bg-brand-limit/15',
  4: 'text-brand-avoid bg-brand-avoid/15',
} as const;

const NOVA_POSITIONS: Record<number, string> = {
  1: '12.5%',
  2: '37.5%',
  3: '62.5%',
  4: '87.5%',
};

type ChipColor = keyof typeof CHIP_STYLES;
type StatusTone = keyof typeof STATUS_STYLES;

type ProductData = {
  id: string;
  image: string;
  name: string;
  nova: 1 | 2 | 3 | 4;
  novaLabel: string;
  processingStatus: string;
  processingTone: StatusTone;
  seedOilsStatus: string;
  seedOilsTone: StatusTone;
  seedOilChips: string[];
  sugarChips: string[];
  additiveChips: Array<{ name: string; color: ChipColor }>;
  noneDetected: string;
};

const ROTATE_MS = 5000;

export function UpfProductShowcase() {
  const { t } = useTranslation();
  const products = t('why.upfBox.products', { returnObjects: true }) as ProductData[];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [products.length]);

  const product = products[activeIndex];

  return (
    <div className="bg-white p-8 rounded-card shadow-card border border-gray-200/60">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h3 className="text-2xl font-semibold mb-3 text-gray-900">{t('why.upfBox.title')}</h3>
        <p className="text-gray-600 leading-relaxed">{t('why.upfBox.subtitle')}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {products.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              index === activeIndex
                ? 'bg-brand-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {item.name.split('—')[0]?.trim() ?? item.name}
          </button>
        ))}
      </div>

      <div
        key={product.id}
        className="grid md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start transition-opacity duration-300"
      >
        <div className="mx-auto md:mx-0 w-full max-w-[260px]">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-50 border border-gray-200/60 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-3"
            />
          </div>
          <p className="mt-4 text-center md:text-left text-sm font-semibold text-gray-900 leading-snug">
            {product.name}
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-3">{t('why.upfBox.novaLabel')}</p>
            <div className="relative max-w-md">
              <div className="flex h-2 rounded-full overflow-hidden">
                <div className="flex-1 bg-green-500" />
                <div className="flex-1 bg-green-500/75" />
                <div className="flex-1 bg-orange-500" />
                <div className="flex-1 bg-red-500/80" />
              </div>
              <div
                className="absolute -top-1 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[7px] border-l-transparent border-r-transparent border-b-gray-500 transition-all duration-500"
                style={{ left: NOVA_POSITIONS[product.nova], transform: 'translateX(-50%)' }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-3 max-w-md">
              <span>{t('why.upfBox.novaUnprocessed')}</span>
              <span>{t('why.upfBox.novaUltraProcessed')}</span>
            </div>
            <p className={`mt-4 inline-flex px-3 py-1.5 rounded-full text-sm font-semibold ${NOVA_STYLES[product.nova]}`}>
              {product.novaLabel}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <p className="text-sm font-semibold text-gray-900">{t('why.upfBox.seedOilsTitle')}</p>
              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[product.seedOilsTone]}`}>
                {product.seedOilsStatus}
              </span>
            </div>
            {product.seedOilChips.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {product.seedOilChips.map((chip) => (
                  <span key={chip} className="px-2.5 py-1.5 rounded-lg text-sm bg-orange-500/20 text-orange-700">
                    {chip}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">{product.noneDetected}</p>
            )}
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 mb-3">{t('why.upfBox.sugarsTitle')}</p>
            {product.sugarChips.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {product.sugarChips.map((chip) => (
                  <span key={chip} className="px-2.5 py-1.5 rounded-lg text-sm bg-orange-500/20 text-orange-700">
                    {chip}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">{product.noneDetected}</p>
            )}
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 mb-3">{t('why.upfBox.additivesTitle')}</p>
            {product.additiveChips.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {product.additiveChips.map((chip) => (
                  <span
                    key={chip.name}
                    className={`px-2.5 py-1.5 rounded-lg text-sm font-medium ${CHIP_STYLES[chip.color]}`}
                  >
                    {chip.name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">{product.noneDetected}</p>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 pt-1">
            <p className="text-sm font-semibold text-gray-900">{t('why.upfBox.processingTitle')}</p>
            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_STYLES[product.processingTone]}`}>
              {product.processingStatus}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {products.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={item.name}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? 'w-6 bg-brand-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
