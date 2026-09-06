import { useTranslation } from 'react-i18next';

const BADGES = {
  en: '/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg',
  fr: '/Download_on_the_App_Store_Badge_FRCA_RGB_blk.svg',
} as const;

interface AppStoreBadgeProps {
  className?: string;
}

export const AppStoreBadge = ({ className = 'h-14 sm:h-16 hover:opacity-90 transition-opacity' }: AppStoreBadgeProps) => {
  const { i18n, t } = useTranslation();
  const language = i18n.language.startsWith('fr') ? 'fr' : 'en';

  return (
    <img
      src={BADGES[language]}
      alt={t('hero.downloadAlt')}
      className={className}
    />
  );
};
