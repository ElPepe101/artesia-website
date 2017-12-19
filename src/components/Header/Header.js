import React from 'react';

import logo from '../../logo.svg';
import Menu from '../Menu/Menu';
import className from './Header.module.css';

export default () => (
  <header className={className.header}>
    <div className="wrapper">
      <img alt="Artesia logo" src={logo} />
      <Menu />
    </div>
  </header>
);
