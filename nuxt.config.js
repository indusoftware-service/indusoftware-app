import webpack from 'webpack'
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
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: '/js/menustick.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:400,700"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Playball"
      }
    ]
  },
  script: [
    {src:'js/menustick.js'},
    { src: 'js/jquery.js' },
    { src: 'js/modernizr.js' },
    { src: 'js/bootstrap.min.js' },
    { src: 'js/parallax.js' },
    { src: 'js/easing.js' },
    { src: 'js/wow.js' },
    { src: 'js/smoothscroll.js' },
    { src: 'js/masonry.js' },
    { src: 'js/imgloaded.js' },
    { src: 'js/classie.js' },
    { src: 'js/gridscroll.js' },
    { src: 'js/contact.js' },
    { src: 'js/common.js' },
    { src: 'js/main.js'},
  ],
  /*
  ** Global CSS
  */
  css: [
    '@static/css/animate.css',
    '@static/css/animate.min.css',
    '@static/css/bootstrap.css',
    '@static/css/bootstrap-theme.css',
    '@static/css/bootstrap-theme.min.css',
    '@static/css/font-awesome.css',
    '@static/css/font-awesome.min.css',
    '@static/css/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
