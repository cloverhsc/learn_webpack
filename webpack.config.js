const path = require('path')    // nodejs core module
var webpack = require('webpack')

module.exports = {
	entry: {
    app: ["./app/index.js"],
    vendor: ["./vendors/jquery-3.2.1.min.js"]
  },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'common.js'
    })
  ]

}
