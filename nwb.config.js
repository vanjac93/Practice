var path = require('path')

module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    aliases: {
      '~': path.resolve('src'),
      'assets': path.resolve('public/assets')
    },
    extra: {
      devtool: 'source-map'
    }
  }
}