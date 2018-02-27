var webpack = require('webpack')

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: `${__dirname}/public/script`,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    },
  },
  // babel
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              'modules': false
            }]
          ]
        }
      }]
    }]
  },
  // sass
  module: {
    rules: [{
      test: /\.scss/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false,
          },
        },
        'sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }
      ]
    }]
  },
}