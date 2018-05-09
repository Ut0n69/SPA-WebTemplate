module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`,
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('autoprefixer')()],
          autoprefixer: false,
          js: 'babel-loader?presets=es2015'    
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015',
      },
      {
        test: /\.(css|sass|scss)$/,
        loader: 'sass-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    }
  }
}