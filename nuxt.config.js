module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/both-sides.js' },
    { src: '~/plugins/client-only.js', mode: 'client' },
    { src: '~/plugins/server-only.js', mode: 'server' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    '@nuxtjs/pwa',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-fontawesome',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    // Doc: https://github.com/shakee93/vue-toasted
    '@nuxtjs/toast'
  ],
  pwa: {
    manifest: {
      "name": "Unhooked",
      "short_name": "Unhooked",
      "start_url": ".",
      "display": "fullscreen",
      "background_color": "gray",
      "description": "Manipulative Methods in Mobile Games: An E-Learning Unit",
      "categories": ["elearning", "education", "course", "social media", "awareness"],
      "dir": "ltr",
      "orientation": "portrait"
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: './mock/'
  },
  /*
   ** Fontawesome module configuration
   **
   */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },

  toast: {
    iconPack: 'fontawesome'
},
  /*
   ** i18n module configuration
   ** See https://nuxt-community.github.io/nuxt-i18n/options-reference.html
   */
  i18n: {
    // List of locales supported by your app
    // This can either be an array of codes: ['en', 'fr', 'es']
    // Or an array of objects for more complex configurations:
    // [
    //   { code: 'en', iso: 'en-US', file: 'en.js' },
    //   { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
    //   { code: 'es', iso: 'es-ES', file: 'es.js' }
    // ]
    //   `iso` value should have either:
    //   - code of ISO 639-1 (e.g. 'en')
    //   - code of ISO 639-1 and code of ISO 3166-1 alpha-2, with a hyphen (e.g. 'en-US')
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de.js'
      }
    ],

    // The app's default locale.
    // When using 'prefix_except_default' strategy, URLs for this locale won't have a prefix.
    // It's recommended to set this to some locale regardless of chosen strategy, as it will be
    // used as a locale fallback to use when navigating to a non-existent route.
    defaultLocale: 'en',

    // Separator used to generated routes name for each locale, you shouldn't
    // need to change this
    routesNameSeparator: '___',

    // Routes generation strategy, can be set to one of the following:
    // - 'no_prefix': routes won't be prefixed
    // - 'prefix_except_default': add locale prefix for every locale except default
    // - 'prefix': add locale prefix for every locale
    // - 'prefix_and_default': add locale prefix for every locale and default
    strategy: 'prefix',

    // Wether or not the translations should be lazy-loaded, if this is enabled,
    // you MUST configure langDir option, and locales must be an array of objects,
    // each containing a file key
    lazy: true,

    // Directory that contains translations files when lazy-loading messages,
    // this CAN NOT be empty if lazy-loading is enabled
    langDir: 'locales/',

    // Set this to a path to which you want to redirect users accessing root URL (/)
    // Accepts either string or object with statusCode and path properties. E.g
    // {
    //   statusCode: 301,
    //   path: 'about-us'
    // }
    rootRedirect: {
      statusCode: 301,
      path: 'units'
    },

    // If true, SEO metadata is generated for routes that have i18n enabled.
    // Note that performance can suffer with this enabled and there might be compatibility
    // issues with some plugins. Recommended way is to set up SEO as described in:
    // https://nuxt-community.github.io/nuxt-i18n/seo.html#improving-performance
    seo: true,

    // Fallback base URL to use as prefix for alternate URLs in hreflang tags.
    // By default VueRouter's base URL will be used and only if that is not available,
    // fallback URL will be used.
    // Can also be a function that will be passed a Nuxt context as a parameter and
    // should return a string. Useful to make base url dynamic based on request headers.
    baseUrl: ''
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
