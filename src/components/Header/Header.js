import React from 'react';
import { Picture } from 'react-responsive-picture';
import { NavLink } from 'react-router-dom';
import MenuMobile from 'react-burger-menu/lib/menus/slide';

import Menu from '../Menu/Menu';
import Nav from '../Menu/Menu.Nav';
import className from './Header.module.css';

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
      <NavLink exact to="/">
        <Picture
          alt="Artesia logo"
          sources={[{ srcSet: '/img/artesia-logo.jpg' }]}
          className="logo"
        />
      </NavLink>
      <Menu />
    </div>
  </header>
);
