
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'induSoftware | Creative Teams',
    script: [
      
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/static/index.css', lang: 'css' },
    { src: 'animate.css/animate.css', lang: 'css'}
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/i18n' },
    { src: '~/plugins/vue-gtag.js'}
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    'nuxt-facebook-pixel-module',
    '@nuxtjs/gtm',
  ],
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '1033244960878250',
    autoPageView: true,
    disabled: false
  },
  gtm: {
    id: 'GTM-W7M58D5', // Used as fallback if no runtime config is provided
    enabled: true
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    vendor: ['vue-i18n'],
  },
  
  router: {
    middleware: 'i18n'
  }
}
