import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/common.json';

const lng = 'en';

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
    },
    lng,
    fallbackLng: lng,
    interpolation: { escapeValue: false },
  });

export default i18n;
