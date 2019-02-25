const webpack = require('webpack')

module.exports = {
  mode: 'development',
  output: {
    filename: 'Filecoin.js',
    library: 'Filecoin'
  },
  devtool: false,
  plugins: [
    new webpack.SourceMapDevToolPlugin({})
  ]
}
