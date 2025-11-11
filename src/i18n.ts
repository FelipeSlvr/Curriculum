import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/common.json';
import pt from './locales/pt/common.json';

const saved = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
const fallbackLng = 'en';

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
    },
    lng: saved || fallbackLng,
    fallbackLng,
    interpolation: { escapeValue: false },
  });

export default i18n;
