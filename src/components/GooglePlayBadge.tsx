import { useTranslation } from 'react-i18next';

const BADGES = {
  en: '/GetItOnGooglePlay_Badge_Web_color_English.png',
  fr: '/GetItOnGooglePlay_Badge_Web_color_French.png',
} as const;

interface GooglePlayBadgeProps {
  className?: string;
}

export const GooglePlayBadge = ({
  className = 'h-14 sm:h-16',
}: GooglePlayBadgeProps) => {
  const { i18n, t } = useTranslation();
  const language = i18n.language.startsWith('fr') ? 'fr' : 'en';

  return (
    <img
      src={BADGES[language]}
      alt={t('hero.googlePlayAlt')}
      className={className}
    />
  );
};
