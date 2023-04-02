import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector' // importa el detector de idiomas del navegador

// Importa tus archivos de traducciones aquí
import en from './locales/en.json'
import es from './locales/es.json'

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
}

i18n
  .use(LanguageDetector) // utiliza el detector de idiomas del navegador
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es', // idioma de respaldo si no se encuentra la traducción
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
