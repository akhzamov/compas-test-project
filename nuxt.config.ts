export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/compas-logo.svg' },
      ],
      bodyAttrs: {
        id: 'body',
      },
    },
  },
  css: ['~/assets/scss/main.scss'],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          FieldArray: 'VeeFieldArray',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'PT Sans': {
            wght: [400, 700, 900],
            ital: [300],
          },
        },
      },
    ]
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})