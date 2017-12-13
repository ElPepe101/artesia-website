import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import { slide as MobileMenu } from 'react-burger-menu';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Router from './components/Router';
import Nav from './components/Menu/Menu.Nav';

export default () => (
  <BrowserRouter>
    <div className="app debug">
      <MobileMenu pageWrapId="main">
        <Nav />
      </MobileMenu>
      <Header />
      <main id="main" className="main">
        <div className="wrapper">
          <Router />
        </div>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
