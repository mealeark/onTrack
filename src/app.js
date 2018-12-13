import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/container/App/App.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appRoute = document.getElementById('app');
const routes = (
  <Router>
    <App/>
  </Router>
);
ReactDOM.render(routes, appRoute);