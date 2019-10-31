const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
  space: '6uhqwaauq1lc',
  accessToken: 'aQJyOdbDk-3AHy5NVxLW7ZgP3u9kO9Xt67QU4e8qwGA'
}

// export `createClient` to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}
