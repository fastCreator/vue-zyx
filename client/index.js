import './promise-polyfill'
import { app } from './app'

// enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}
require('../mock')
app.$mount('#app')
