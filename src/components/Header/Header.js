import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuMobile from 'react-burger-menu/lib/menus/slide';

import Menu from '../Menu/Menu';
import Nav from '../Menu/Menu.Nav';
import className from './Header.module.css';
import Image from '../Image/Image';

export default class extends React.Component {
  state = {
    menuOpen: false
  };

  handleMenuClick = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <header className={className.header}>
        <MenuMobile
          isOpen={this.state.menuOpen}
          pageWrapId="main"
          outerContainerId="app"
          bodyClassName="open-drawer"
          disableOverlayClick
        >
          <Nav {...this.handleMenuClick} />
        </MenuMobile>
        <div className="wrapper">
          <NavLink className={className.homeLink} exact to="/">
            <Image
              sizes={false}
              className="logo"
              alt="Artesia logo"
              images={[
                { path: '/img/artesia-logo-transp.png', minWidth: 1280 },
                { path: '/img/artesia-logo.jpg', minWidth: 900 },
                { path: '/img/artesia-logo.jpg', minWidth: 600 },
                { path: '/img/artesia-logo.jpg', minWidth: 300 },
                { path: '/img/artesia-logo.jpg', minWidth: 0 }
              ]}
            />
          </NavLink>
          <Menu />
        </div>
      </header>
    );
  }
}
