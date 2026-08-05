// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2025-07-15',

  modules: [
    "@nuxtjs/i18n",
    '@vueuse/nuxt',
    "nuxt-svgo",
    "@nuxt/image",
    "vue3-carousel-nuxt",
    "@nuxt/content"
  ],

  i18n: {
    defaultLocale: 'ru',
    vueI18n: '../i18n.config.ts',
    baseUrl: 'https://positions.wotstat.info',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'ru',
        language: 'ru-RU',
      }, {
        code: 'en',
        language: 'en-US'
      }
    ],
  },

  image: {
    format: ['webp']
  },

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         api: 'modern-compiler'
  //       }
  //     }
  //   }
  // },
})