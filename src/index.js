import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript-copy/javascript-copy.js');
require('codemirror/mode/javascript/javascript.js');
require('bootstrap-css-only');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
