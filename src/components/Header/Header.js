import React from 'react';
import Image from 'react-imgpro';

import Menu from '../Menu/Menu';
import className from './Header.module.css';

export default () => (
  <header className={className.header}>
    <div className="wrapper">
      {/* resize={{ width: 100, height: 50 }} */}
      <Image alt="Artesia logo" image="/img/artesia-logo.jpg" />
      <Menu />
    </div>
  </header>
);
