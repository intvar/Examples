module.exports = {
  entry: './src/index.js',
  output: {
    filename:'bundle.js',
  },
  mode:'none',
  devServer: {
    contentBase: './dist',
  }
};