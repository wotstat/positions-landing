// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    defaultLocale: 'ru',
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://positions.wotstat.info',
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU'
      }, {
        code: 'en',
        iso: 'en-US'
      }
    ],
  }
})