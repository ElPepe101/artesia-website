import React from 'react';
// import { Link } from 'react-router-dom';

import className from './Footer.module.css';
import Image from '../Image/Image';

export default () => (
  <footer className={className.footer}>
    <div className="wrapper">
      <Image
        className={className.logo}
        images={[{ path: '/img/artesia-logo.jpg', minWidth: 0 }]}
      />
      <p>Campos Elseos No. 200, Polanco. Ciudad de México</p>
      <p>ventas@artesia.mx</p>
      <p>+52 (044) 55 5280 4764</p>
      <hr />
      <p>Copyright Artesia 2017. Todos los derechos reservados</p>
    </div>
  </footer>
);
