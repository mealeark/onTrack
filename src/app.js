import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/container/App/App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const routes = (
  <Router>
    <App/>
  </Router>
);

const appRoute = document.getElementById('app');
ReactDOM.render(routes, appRoute);