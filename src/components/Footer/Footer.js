import React from 'react';
import { Picture } from 'react-responsive-picture';
import VisibilitySensor from 'react-visibility-sensor';
// import { Link } from 'react-router-dom';

import className from './Footer.module.css';

export default () => (
  <footer className={className.footer}>
    <div className="wrapper">
      <VisibilitySensor>
        <Picture
          className={className.logo}
          sources={[{ srcSet: '/img/artesia-logo.jpg' }]}
        />
      </VisibilitySensor>
      <p>Campos Elseos No. 200, Polanco. Ciudad de México</p>
      <p>ventas@artesia.mx</p>
      <p>+52 (044) 55 5280 4764</p>
      <hr />
      <p>Copyright Artesia 2017. Todos los derechos reservados</p>
    </div>
  </footer>
);
