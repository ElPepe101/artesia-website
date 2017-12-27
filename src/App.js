import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';

import './media/font/gotham-light.css';
import './media/font/gotham-book.css';
import './media/font/gotham-medium.css';
import './media/font/gotham-black.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './components/Router';

export default () => (
  <BrowserRouter>
    <div id="app" className="app debug">
      <Header />
      <main id="main" className="main">
        <Router />
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
