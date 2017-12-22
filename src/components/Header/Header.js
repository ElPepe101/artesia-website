import React from 'react';
import Image from 'react-imgpro';

import Menu from '../Menu/Menu';
import className from './Header.module.css';

export default () => (
  <header className={className.header}>
    <div className="wrapper">
      {/* <img alt="Artesia logo" src={logo} /> */}
      <Image
        alt="Artesia logo"
        image="http://365.unsplash.com/assets/paul-jarvis-9530891001e7f4ccfcef9f3d7a2afecd.jpg"
        resize={{ width: 100, height: 50 }}
      />
      <Menu />
    </div>
  </header>
);
