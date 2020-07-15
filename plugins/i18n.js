import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  if (app.$cookies.get('locale') === 'en') {
    store.commit('SET_LANG', 'en')
  }
  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'es',
    messages: {
      en: require('~/static/en.json'),
      es: require('~/static/es.json')
    }
  })
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      console.log('a')
      return `/${link}`
    }
    console.log('b')
    return `/${app.i18n.locale}/${link}`
  }
}
