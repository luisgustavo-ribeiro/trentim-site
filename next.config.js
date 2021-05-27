const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  /**Site estático */
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': {page: '/'}
    };
  }
})
