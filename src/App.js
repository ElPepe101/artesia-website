import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';

import './media/font/gotham.css';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './components/Router';
import RestoreScroll from './components/RestoreScroll/RestoreScroll';

export default () => (
  <BrowserRouter>
    <RestoreScroll>
      <div id="app" className="app">
        <Header />
        <main id="main" className="main">
          <Router />
        </main>
        <Footer />
      </div>
    </RestoreScroll>
  </BrowserRouter>
);
