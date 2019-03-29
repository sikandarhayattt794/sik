import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './header';
import Footer from './footer';
import footercss from './footer-distributed-with-address-and-phones';
import * as serviceWorker from './serviceWorker';
import Home from './home';
import Products from './products';
import Company from './company';
import Contact from './contact';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<footercss />, document.getElementById('footercss'));
ReactDOM.render(<Header />, document.getElementById('Header'));
ReactDOM.render(<Footer />, document.getElementById('Footer'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Products />, document.getElementById('products'));
ReactDOM.render(<Company />, document.getElementById('company'));
ReactDOM.render(<Contact />, document.getElementById('contact'));


serviceWorker.unregister();
