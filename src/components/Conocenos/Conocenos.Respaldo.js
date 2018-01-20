import React from 'react';

import Hero from '../Hero/Hero';
import Image from '../Image/Image';
import className from './Conocenos.module.css';
import Pano from '../Pano/Pano';

export default () => (
  <div className={className.conocenos}>
    <Hero image="/img/artesia-portrait-19.jpg" target="respaldo" />
    <section name="respaldo">
      <div className="wrapper">
        <h1>El Respaldo</h1>
        <div className={className.column}>
          <Image
            images={[{ path: '/img/artesia-conocenos-23-80.jpg', minWidth: 0 }]}
          />
          <h2>Grupo Sordo Madaleno</h2>
          <p>
            La firma Sordo Madaleno se remonta a 1937. Actualmente está
            encabezada por el arquitecto y diseñador Javier Sordo Madaleno
            Bringas y cuenta con un equipo de más de 120 profesionales en
            diversas disciplinas.
          </p>
          <button className="button-square">Conocer más</button>
        </div>
        <div className={className.column}>
          <Image
            images={[{ path: '/img/artesia-conocenos-22-80.jpg', minWidth: 0 }]}
          />
          <h2>Jan Hendrix</h2>
          <p>
            Es un artista holandés que ha vivido y trabajado en México desde
            1978. Hendrix recibió la Orden Mexicana del Águila Azteca por parte
            del Gobierno mexicano por su trabajo en el arte y la arquitectura.
          </p>
          <button className="button-square">Conocer más</button>
        </div>
        <div className={className.column} />
      </div>
    </section>
    <section name="hendrix">
      <div className={className.column2}>
        <Image
          images={[
            {
              path: '/img/artesia-conocenos-24_horizontal@3x.jpg',
              minWidth: 900,
              orientation: 'landscape'
            },
            {
              path: '/img/artesia-conocenos-24_horizontal@0.75x.jpg',
              minWidth: 600,
              orientation: 'landscape'
            },
            {
              path: '/img/artesia-conocenos-24_horizontal@0.5x.jpg',
              minWidth: 300,
              orientation: 'landscape'
            },
            {
              path: '/img/artesia-conocenos-24-80.jpg',
              minWidth: 300,
              orientation: 'portrait'
            },
            {
              path: '/img/artesia-conocenos-24-80.jpg',
              minWidth: 0,
              orientation: 'portrait'
            }
          ]}
        />
      </div>
      <div className={`${className.column2} ${className.column2Text}`}>
        <div className="wrapper">
          <h3 className="remark">Jan Hendrix</h3>
          <p>
            Es un artista holandés que ha vivido y trabajado en México desde
            1978. Hendrix recibió la Orden Mexicana del Águila Azteca por parte
            del Gobierno mexicano por su trabajo en el arte y la arquitectura.
          </p>
          <p>
            El 25% del predio se destinó para área libre donde Jan Hendrix{' '}
            incorporó algunas de sus monumentales y únicas instalaciones creadas{' '}
            para estos espacios de manera permanente.
          </p>
          <br />
          <br />
        </div>
      </div>
    </section>
    <Pano />
    <section name="end">
      <div className="wrapper">
        <Image
          images={[
            {
              path: '/img/artesia-conocenos-20_horizontal@0.75x.jpg',
              minWidth: 960
            },
            {
              path: '/img/artesia-conocenos-20_horizontal@0.5x.jpg',
              minWidth: 600
            },
            { path: '/img/artesia-conocenos-20-80.jpg', minWidth: 300 },
            { path: '/img/artesia-conocenos-20-80.jpg', minWidth: 0 }
          ]}
        />
      </div>
    </section>
  </div>
);
