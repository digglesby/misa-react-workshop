/*
* /src/index.js
*
* This is the root of our react app!
* All it does is act as a landing point for our browser bundle and render
* the app component!
*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

ReactDOM.render(<App />, document.getElementById('app') );
