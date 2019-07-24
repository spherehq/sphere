module.exports = {
  // Put your normal webpack config below here
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: require('./webpack.rules'),
  },
}
