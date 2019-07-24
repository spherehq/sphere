module.exports = {
  entry: './src/main/index.ts',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: require('./webpack.rules'),
  },
}
