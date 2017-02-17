'use strict'
const pkg = require('../package')

module.exports = {
  port: 3000,
  title: 'starter',
  // when you use electron please set to relative path like ./
  // otherwise only set to absolute path when you're using history mode
  publicPath: process.env.NODE_ENV === 'production'?'/':'/',
  // add these dependencies to a standalone vendor bundle
  vendor: [
    'vue',
    'vuex',
    'vue-router',
    'vuex-router-sync',
    'promise-polyfill'
  ],
  // disable babelrc by default
  babel: {
    babelrc: false,
    presets: ['vue-app'],
  },
  postcss: [
    // add prefix via postcss since it's faster
    require('autoprefixer')({
      // Vue does not support ie 8 and below
      browsers: ['last 2 versions', 'ie > 8']
    }),
    require('postcss-nested')
  ],
  cssModules: false,
}
