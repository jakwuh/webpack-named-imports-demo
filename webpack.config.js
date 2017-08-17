const {join} = require('path');
const cleanDir = require('clean-dir');

cleanDir(join(__dirname, 'dist'));

module.exports = {
  context: __dirname,
  entry: {
    index: [
      join(__dirname, './src/index.js')
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\//,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['syntax-dynamic-import', 'webpack-named-dynamic-imports']
          }
        }
      }
    ]
  }
}
