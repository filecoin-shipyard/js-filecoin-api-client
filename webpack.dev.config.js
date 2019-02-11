const webpack = require('webpack')

module.exports = {
  mode: 'development',
  output: {
    filename: 'FilecoinApi.js',
    library: 'FilecoinApi'
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ]
}
