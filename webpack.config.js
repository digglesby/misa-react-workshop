/*
* webpack.config.js
*
* This is the config file for the webpack bundler.
*
* -----------------------------------------------------------------------------
*
* Webpack bundles together node require() calls into one browser runnable js
* file so you can use "npm install" for a component and use it in browsers!
*
* You will also notice under loaders a thing called 'babel-loader' this is used
* to transpile different formats of JS code to one that can be run by browsers.
*
* This lets us use things like ES2015 syntax and JSX for React!
*
* See .babelrc for it's config
*/

const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        test: /\.js$/
      }
    ]
  }
};

module.exports = config;
