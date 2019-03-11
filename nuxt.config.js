const pkg = require('./package')

export default {
  router: {
    base: '/bansheestest/'
  }
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Jura|Roboto+Slab'},
      ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss'
  ],
  render: {
    bundlerenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue.js'
  ],


  /*
  ** Nuxt.js modules
  */
  modules: [

  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   extend: (config) => {
    const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

    svgRule.test = /\.(png|jpe?g|gif|webp)$/;

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'vue-svg-loader',
    });
  }
  },
/* Uncomment the following when using npm *run generate command* so the routing is adjusted to work on GH pages


  router: {
    base: '/basheestest/'
  }

*/
}

