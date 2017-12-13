import React from 'react';

import logo from '../../logo.svg';
import Menu from '../Menu/Menu';

export default () => (
  <header className="header">
    <div className="wrapper">
      <img alt="Artesia logo" src={logo} />
      <Menu />
    </div>
  </header>
);
