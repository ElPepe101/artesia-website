import React from 'react';

import className from './Galeria.module.css';
import Hero from '../Hero/Hero';
import Pano from '../Pano/Pano';
import Image from '../Image/Image';

export default () => (
  <div className={className.galeria}>
    <Hero image="/img/artesia-portrait-instalaciones.jpg" target="proyectos">
      <div>
        <p>38 Departamentos de</p>
        <p>254 m2 hasta 700m2</p>
        <a className="button button-square-white" href="/conocenos/proyecto">
          Conocer más
        </a>
      </div>
    </Hero>

    <Pano pano="artesia-pano-37_03.jpg" portrait="artesia-360-06.jpg" />

    <section name="proyectos">
      <div className="column-limit">
        <div className={className.column}>
          <Image
            images={[
              { path: '/img/artesia-proyectos-55@3x.jpg', minWidth: 968 },
              { path: '/img/artesia-proyectos-55@2x.jpg', minWidth: 640 },
              { path: '/img/artesia-proyectos-55.jpg', minWidth: 300 },
              { path: '/img/artesia-proyectos-55.jpg', minWidth: 0 }
            ]}
          />
        </div>
        <div className={`${className.column} ${className.columnFloatLeft}`}>
          <div className={`wrapper ${className.sectionText}`}>
            <h2 className="remark">
              Amplias áreas para el diseño de su estilo de vida, social y
              privada.
            </h2>
          </div>
        </div>
      </div>

      <div className="column-limit">
        <div className={className.column}>
          <Image
            images={[
              { path: '/img/artesia-proyectos-46@3x.jpg', minWidth: 968 },
              { path: '/img/artesia-proyectos-46@2x.jpg', minWidth: 640 },
              { path: '/img/artesia-proyectos-46.jpg', minWidth: 300 },
              { path: '/img/artesia-proyectos-46.jpg', minWidth: 0 }
            ]}
          />
        </div>
        <div className={className.column}>
          <div className={`wrapper ${className.sectionText}`}>
            <h2 className="remark">Generosos espacios para sus servicios</h2>
          </div>
        </div>
      </div>

      <div className="column-limit">
        <div className={className.column}>
          <Image
            images={[
              { path: '/img/artesia-proyectos-47@3x.jpg', minWidth: 968 },
              { path: '/img/artesia-proyectos-47@2x.jpg', minWidth: 640 },
              { path: '/img/artesia-proyectos-47.jpg', minWidth: 300 },
              { path: '/img/artesia-proyectos-47.jpg', minWidth: 0 }
            ]}
          />
        </div>
        <div className={`${className.column} ${className.columnFloatLeft}`}>
          <div className={`wrapper ${className.sectionText}`}>
            <h2 className="remark">Su deseo listo para hacerse realidad</h2>
          </div>
        </div>
      </div>

      <div className="column-limit">
        <div className={className.column}>
          <Image
            images={[
              { path: '/img/artesia-proyectos-48@3x.jpg', minWidth: 968 },
              { path: '/img/artesia-proyectos-48@2x.jpg', minWidth: 640 },
              { path: '/img/artesia-proyectos-48.jpg', minWidth: 300 },
              { path: '/img/artesia-proyectos-48.jpg', minWidth: 0 }
            ]}
          />
        </div>
        <div className={className.column}>
          <div className={`wrapper ${className.sectionText}`}>
            <h2 className="remark">
              Inspiradoras vistas que se complementan con diseño
            </h2>
          </div>
        </div>
      </div>
    </section>

    <Pano pano="artesia-pano-80_03.jpg" portrait="artesia-360-01.jpg" />
    <Pano pano="artesia-pano-33_03.jpg" portrait="artesia-360-07.jpg" />
  </div>
);
