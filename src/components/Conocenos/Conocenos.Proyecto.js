import React from 'react';

import Image from '../Image/Image';
import Hero from '../Hero/Hero';
import className from './Conocenos.module.css';
import Pano from '../Pano/Pano';

export default () => (
  <div className={`${className.conocenos} ${className.proyecto}`}>
    <Hero image="/img/artesia-portrait-30.jpg" target="proyecto" />
    <section name="proyecto">
      <div
        className={`${className.column2} ${className.column2TextLean} ${
          className.column2FloatRight
        }`}
      >
        <div className="wrapper">
          <br />
          <br />
          <h1 className="hidden">Proyecto</h1>
          <h3 className="remark">En el corazón de Polanco...</h3>
          <h3>Ubicado en la avenida más prestigiada de Polanco</h3>
          <p className="light">
            Esta ha sido una de las <strong>calles más emblemáticas</strong> de
            la zona gracias a que representa la puerta de entrada a Polanco y al
            mismo tiempo una <strong>ventana al Bosque de Chapultepec</strong>
          </p>
          <br />
          <button className="button-square">Conozca los pisos</button>
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className={`${className.column2} ${className.column2Padding}`}>
        <Image
          images={[
            { path: '/img/artesia-conocenos-31_horizontal.jpg', minWidth: 900 },
            {
              path: '/img/artesia-conocenos-31_horizontal@0.75x.jpg',
              minWidth: 600
            },
            { path: '/img/artesia-conocenos-28-80.jpg', minWidth: 300 },
            { path: '/img/artesia-conocenos-28-80.jpg', minWidth: 0 }
          ]}
        />
      </div>
    </section>
    <section name="polanco">
      <div className={`${className.column2} ${className.column2Text}`}>
        <div className="wrapper">
          <br />
          <h2 className="remark">Artesia Polanco</h2>
          <p className="light">
            Sólo <strong>38 Pisos Residenciales</strong> divididos en dos
            torres, Piedra y Cristal. <strong>Desde 254.36m2 a 641.35m2</strong>{' '}
            satisfaciendo a los clientes más exigentes y sofisticados.
          </p>
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className={`${className.column2}`}>
        <Image
          images={[
            { path: '/img/artesia-conocenos-33_horizontal.jpg', minWidth: 900 },
            {
              path: '/img/artesia-conocenos-33_horizontal@0.75x.jpg',
              minWidth: 600
            },
            { path: '/img/artesia-conocenos-29-80.jpg', minWidth: 300 },
            { path: '/img/artesia-conocenos-29-80.jpg', minWidth: 0 }
          ]}
        />
      </div>
    </section>

    <section name="certificaciones">
      <div
        className={`${className.column2} ${className.column2Text} ${
          className.column2FloatRight
        }`}
      >
        <div className="wrapper">
          <h2 className="remark">Certificaciones</h2>
          <p className="light">
            El edificio cuenta con <strong>certificado PCE</strong>,
            certificación del Gobierno del Distrito Federal de Edificios
            Sustentables.
          </p>
          <p className="light">
            Este cerficiado se logra gracias a un diseño que{' '}
            <strong>ahorra energía, aprovecha el agua</strong> tanto pluvial
            como residual, y todos los equipos de agua{' '}
            <strong>son de bajo consumo</strong>. Todo el proceso de obra ha
            sido auditado para <strong>minimizar su impacto ambiental.</strong>
          </p>
        </div>
      </div>

      <div className={className.column2}>
        <Image
          images={[
            { path: '/img/artesia-conocenos-32_horizontal.jpg', minWidth: 900 },
            {
              path: '/img/artesia-conocenos-32_horizontal@0.75x.jpg',
              minWidth: 600
            },
            { path: '/img/artesia-conocenos-29-80.jpg', minWidth: 300 },
            { path: '/img/artesia-conocenos-29-80.jpg', minWidth: 0 }
          ]}
        />
      </div>
    </section>

    <Pano />
  </div>
);
