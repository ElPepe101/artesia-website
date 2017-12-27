import React from 'react';
import Image from 'react-image';
import MenuMobile from 'react-burger-menu/lib/menus/slide';

import Menu from '../Menu/Menu';
import Nav from '../Menu/Menu.Nav';
import className from './Header.module.css';

const error = err => console.log('err: ', err);
const load = msg => console.log('msg: ', msg);

export default () => (
  <header className={className.header}>
    <MenuMobile
      pageWrapId="main"
      outerContainerId="app"
      bodyClassName="open-drawer"
      disableOverlayClick
    >
      <Nav />
    </MenuMobile>
    <div className="wrapper">
      <Image
        alt="Artesia logo"
        src={['/img/artesia-logo.jpg']}
        className="logo"
        onLoad={load}
        onError={error}
      />
      <Menu />
    </div>
  </header>
);
