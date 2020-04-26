export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Covid Africa - Updated Data and Live Tracking',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'google-site-verification',
        content: 'vEDBqIkTecht48dmoYXwxESgIzNgTpg58p0RJJRP2Nk'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#7957d5'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-ssr-cache', ,
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  //Cache configuration
  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],
  },
  store: {
    type: 'memcached',
    max: 100,
    ttl: 43200,
  }
}
