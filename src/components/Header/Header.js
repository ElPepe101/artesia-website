import React from 'react';
import { Picture } from 'react-responsive-picture';
import { NavLink } from 'react-router-dom';
import MenuMobile from 'react-burger-menu/lib/menus/slide';

import Menu from '../Menu/Menu';
import Nav from '../Menu/Menu.Nav';
import className from './Header.module.css';

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
  }
}
