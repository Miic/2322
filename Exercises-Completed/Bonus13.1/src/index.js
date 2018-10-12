require('bootstrap/dist/css/bootstrap.css');
require("../assets/app.css");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Perf from 'react-addons-perf';
window.Perf = Perf;

ReactDOM.render(
    <App />,
    document.getElementById("react-app"));