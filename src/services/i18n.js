import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import environment from '../../environment'
import serbianResourceBundle from '../../public/locales/sr/translation.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {},
    lng: environment.lan,
    fallbackLng: 'en',
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: false
    }
  })


i18n.addResourceBundle('en', 'translation', {}, true, true)
i18n.addResourceBundle('sr', 'translation', serbianResourceBundle, true, true)

export default i18n