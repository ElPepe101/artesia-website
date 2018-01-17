import React from 'react';

import Hero from '../Hero/Hero';
import Image from '../Image/Image';
import className from './Home.module.css';
import Pano from '../Pano/Pano';

export default () => (
  <div className={className.home}>
    <h1 className={className.title}>Artesia Polanco</h1>
    <Hero image="/img/artesia-portrait-25.png" target="description" />
    <section name="description">
      <div className="wrapper columns">
        <div className={`column-2 ${className.column}`}>
          <Image
            images={[{ path: '/img/artesia-home-18.png', minWidth: 986 }]}
          />
        </div>
        <div className={`column-2 ${className.column}`}>
          <p>
            <strong>
              Artesia Polanco. Satisfaciendo a los clientes{' '}
              <span className="remark">
                más exigentes y sofisticados de México.
              </span>
            </strong>
          </p>
          <p>
            Ubicado en la avenida más prestigiada de Polanco, Campos Eliseos.
            Sólo <strong>38 Pisos Residenciales</strong> divididos en dos
            torres, piedra y cristal.
          </p>
          <p>
            Desde <strong>254.36m2</strong> a <strong>641.32m2</strong>{' '}
            satisfaciendo a los clientes más exigentes y sofisticados.
          </p>
          <button className="button-square">Conozca los pisos</button>
        </div>
      </div>
      <Image
        className={className.bottomImage}
        images={[{ path: '/img/artesia-home-15-80.jpg', minWidth: 0 }]}
      />
    </section>
    <Pano />
  </div>
);
