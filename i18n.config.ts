import messages from "./locales";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  warnHtmlMessage: false,
  messages
}))