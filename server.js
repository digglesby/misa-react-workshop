/*
* server.js
*
* This is the main file of our project and uses the express webserver to serve
* all of the files for our webapp.
*/
const express = require('express');
const webpack = require('webpack');
const path = require('path');
const WebpackDevServerMiddleware = require('webpack-dev-middleware');

const webpack_config = require('./webpack.config.js');

const app = express();

// Setting up the webpack dev server, see 'webpack.config.js' for a more
// in-depth explination of webpack
const webpack_bundler = webpack(webpack_config);
const webpack_dev_server = new WebpackDevServerMiddleware(webpack_bundler, {
  noInfo: false,
  publicPath: '/static',
  quiet: false,
  hot: true
});

// Express middlewares
app.use(express.static('static'));
app.use(webpack_dev_server);

app.get('/', function (req, res) {

  // This responds with the index.html file when you visit the homepage
  res.sendFile( path.join(__dirname, 'index.html') );
  
});

app.listen(8080);
