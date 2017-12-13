import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './components/Router';

export default () => (
  <BrowserRouter>
    <div className="app debug">
      <Header />
      <main className="main">
        <div className="wrapper">
          <Router />
        </div>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
