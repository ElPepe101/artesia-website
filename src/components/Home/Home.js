import React from 'react';

import Hero from '../Hero/Hero';
import Image from '../Image/Image';
import className from './Home.module.css';
import Pano from '../Pano/Pano';

export default () => (
  <div className={className.home}>
    <h1 className={className.title}>Artesia Polanco</h1>
    <Hero image="/img/artesia-portrait-25.jpg" target="description">
      <div>
        <p>Campos Eliseos, Polanco,</p>
        <p>Ciudad de México</p>
        <h2>Campos Eliseos.</h2>
        <a className="button button-square-white" href="/conocenos/proyecto">
          Conocer más
        </a>
      </div>
    </Hero>
    <section name="description">
      <div className="wrapper columns">
        <div className={`column-2 ${className.column}`}>
          <Image
            images={[{ path: '/img/artesia-home-18.jpg', minWidth: 986 }]}
          />
        </div>
        <div className={`column-2 ${className.column} ${className.bigTitle}`}>
          <p>
            <strong>
              Edificios residenciales{' '}
              <span className="remark">con operación de hotel</span>
            </strong>
          </p>
          <p className="sub">
            Sólo <strong>38 Pisos Residenciales</strong> divididos en dos
            torres, una forrada de granito y la otra cubierta de cristal.
          </p>
          <p className="sub">
            Desde <strong>254.36m2</strong> a <strong>641.32m2</strong>{' '}
            satisfaciendo a los clientes más exigentes y sofisticados.
          </p>
          <a className="button-square" href="/pisos">
            Conozca los pisos
          </a>
        </div>
      </div>
      <Image
        className={className.bottomImage}
        images={[{ path: '/img/artesia-home-15-80.jpg', minWidth: 0 }]}
      />
    </section>

    <Pano pano="artesia-pano-29_03.jpg" portrait="artesia-360-02.jpg" />
  </div>
);
