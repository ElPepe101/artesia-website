import React from 'react';
import { Picture } from 'react-responsive-picture';
import VisibilitySensor from 'react-visibility-sensor';

import Hero from '../Hero/Hero';
import className from './Home.module.css';

export default () => (
  <div className={className.home}>
    <h1 className={className.title}>Artesia Polanco</h1>
    <Hero image="/img/artesia-home-17-80.jpg" target="description" />
    <section name="description">
      <div className="wrapper">
        <p>
          <strong>
            Artesia Polanco. Satisfaciendo a los clientes{' '}
            <span className="remark">
              más exigentes y sofisticados de México.
            </span>
          </strong>
        </p>
        <p>
          Ubicado en la avenida más prestigiada de Polanco, Campos Eliseos. Sólo{' '}
          <strong>38 Pisos Residenciales</strong> divididos en dos torres,
          piedra y cristal.
        </p>
        <p>
          Desde <strong>254.36m2</strong> a <strong>641.32m2</strong>{' '}
          satisfaciendo a los clientes más exigentes y sofisticados.
        </p>
        <button className="button-square">Conozca los pisos</button>
      </div>
    </section>
    <section name="_360">
      <VisibilitySensor>
        <div>
          <Picture
            sources={[
              {
                srcSet: '/img/artesia-home-15-80.jpg'
              }
            ]}
          />
          <Picture
            sources={[
              {
                srcSet: '/img/artesia-home-16-80.jpg'
              }
            ]}
          />
        </div>
      </VisibilitySensor>
    </section>
  </div>
);

/*
<h2>Artesia Polanco</h2>
      <p>
        Sólo <strong>38 Pisos Residenciales</strong> divididos en dos torres,{' '}
        Piedra y Cristal. <strong>Desde 25436m2 a 641.35m2</strong> satisfaciendo
        a los clientes más exigentes y sofisticados.
      </p>
*/
