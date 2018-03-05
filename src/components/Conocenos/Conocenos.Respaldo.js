import React from 'react';

import Hero from '../Hero/Hero';
import Image from '../Image/Image';
import className from './Conocenos.module.css';
import Pano from '../Pano/Pano';

export default () => (
  <div className={className.conocenos}>
    <Hero image="/img/artesia-portrait-19.jpg" target="respaldo">
      <div>
        <p>Diseño que transmite</p>
        <p>comfort y exclusividad</p>
        <a className="button button-square-white" href="/conocenos/proyecto">
          Conocer más
        </a>
      </div>
    </Hero>
    <section name="respaldo">
      <div className="wrapper">
        <h1>Diseñadores</h1>
        <div className={className.column}>
          <div className={className.portrait}>
            <Image
              images={[
                { path: '/img/artesia-conocenos-23-80.jpg', minWidth: 0 }
              ]}
            />
          </div>
          <h5>Grupo Sordo Madaleno</h5>
          <p>
            La firma Sordo Madaleno se remonta a 1937. Actualmente está
            encabezada por el arquitecto y diseñador Javier Sordo Madaleno
            Bringas y cuenta con un equipo de más de 120 profesionales en
            diversas disciplinas.
          </p>
          <a
            className="button-square"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.sordomadaleno.com/"
          >
            Conocer más
          </a>
        </div>
        <div className={className.column}>
          <div className={className.portrait}>
            <Image
              images={[
                { path: '/img/artesia-conocenos-22-80.jpg', minWidth: 0 }
              ]}
            />
          </div>
          <h5>Jan Hendrix</h5>
          <p>
            Es un artista holandés que ha vivido y trabajado en México desde
            1978. Hendrix recibió la Orden Mexicana del Águila Azteca por parte
            del Gobierno mexicano por su trabajo en el arte y la arquitectura.
          </p>
          <a
            className="button-square"
            target="_blank"
            rel="noopener noreferrer"
            href="http://janhendrix.com.mx/2016/es/"
          >
            Conocer más
          </a>
        </div>
        <div className={className.column}>
          <div className={className.portrait}>
            <Image
              images={[{ path: '/img/artesia-grupo-roiboo.png', minWidth: 0 }]}
            />
          </div>
          <h5>Grupo RIOBÓO</h5>
          <p>
            Con una trayectoria de 30 años, comenzó su actividad profesional con
            el objetivo de desarrollar el diseño estrucutral para proyectos de
            construcción de obras de ingeniería civil.
          </p>
          <a
            className="button-square"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.gruporioboo.com/espan.htm"
          >
            Conocer más
          </a>
        </div>
      </div>
    </section>
    <section name="hendrix">
      <div className={className.column2}>
        <Image
          images={[
            {
              path: '/img/artesia-conocenos-24-80.jpg',
              minWidth: 0,
              orientation: 'portrait'
            },
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
              minWidth: 301,
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
        </div>
      </div>
    </section>

    <Pano pano="artesia-pano-25_03.jpg" portrait="artesia-360-04.jpg" />

    <section name="end">
      <div className="wrapper">
        <Image
          images={[
            {
              path: '/img/artesia-disenadores_horizontal.jpg',
              minWidth: 960
            },
            {
              path: '/img/artesia-disenadores_horizontal@0.75x.jpg',
              minWidth: 600
            },
            {
              path: '/img/artesia-disenadores_horizontal@0.5x.jpg',
              minWidth: 300
            },
            {
              path: '/img/artesia-disenadores_horizontal@0.5x.jpg',
              minWidth: 0
            }
          ]}
        />
      </div>
    </section>

    <section name="nosotros">
      <div className="wrapper">
        <div className={className.column}>
          <img alt="nosotros" src="/img/artesia-nosotros-disenadores.jpg" />
        </div>
        <div className={className.column}>
          <h4>Equipo de construcción</h4>
          <p>
            <strong>Dirección:</strong>
            <br />
            Arquitecto Carlos Mier
          </p>

          <p>
            <strong>Diseño:</strong>
            <br />
            Arquitecto Jorge Isaías
          </p>

          <p>
            <strong>Arquitecto:</strong>
            <br />
            Arquitecto Jose Luís Santillan
          </p>

          <p>
            <strong>Diseño de Estructura:</strong>
            <br />
            Ingeniero Eleazar Sainz
          </p>

          <p>
            <strong>Auditoria:</strong>
            <br />
            Arquitecto Ilan Bitterman
          </p>
        </div>
      </div>
    </section>
  </div>
);
