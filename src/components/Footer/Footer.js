import React from 'react';
// import { Link } from 'react-router-dom';

import className from './Footer.module.css';
import Image from '../Image/Image';
import Nav from '../Menu/Menu.Nav';

export default () => (
  <footer className={className.footer}>
    <div className="wrapper">
      <div className={className.contact}>
        <Image
          className={`logo ${className.logo}`}
          images={[{ path: '/img/artesia-logo-transp2.png', minWidth: 0 }]}
        />
        <p>Campos Elseos No. 200, Polanco. Ciudad de México</p>
        <p>ventas@artesia.mx</p>
        <a href="tel:01525552804764">01 52 55 5280 4764</a>
        <hr />
        <p>Copyright Artesia 2017. Todos los derechos reservados</p>
        <p className={className.twitter}>
          <a
            href="https://twitter.com/artesiapolanco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="no-resize"
              src="/img/twitter-01.png"
              alt="twitter"
            />
          </a>
        </p>
      </div>

      <div className={className.nav}>
        <Nav
          list={className.list}
          wideSubmenu={className.wideSubmenu}
          rounded={className.rounded}
        />
      </div>
    </div>
  </footer>
);
