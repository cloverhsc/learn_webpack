const path = require('path')    // nodejs core module
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000,
    inline: true
  },
	entry: {
    app: ["./app/index.js"],
    vendor: ["jquery"]
  },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
    publicPath: 'dist',
	},
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'common.js'
    }),
    new ExtractTextPlugin('style.css'),
  ],
  // css loader and style-loader
  module: {
    rules: [{
      test: /\.css$/,
      // use: ['style-loader', 'css-loader']
      use: ExtractTextPlugin.extract({
        use: 'css-loader',

      })
    }]
  }
}
