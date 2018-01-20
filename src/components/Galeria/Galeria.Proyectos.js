import React from 'react';

import className from './Galeria.module.css';
import Hero from '../Hero/Hero';
import Pano from '../Pano/Pano';
import Image from '../Image/Image';

export default () => (
  <div className={className.galeria}>
    <Hero image="/img/artesia-portrait-43.jpg" target="proyectos">
      <p className="color-white">
        <strong>VISTAS</strong>
        <br />
        Selecciona el piso para poder ver su vista
      </p>
    </Hero>
    <Pano />
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
            <h2 className="remark">Sala comedor</h2>
            <p>
              Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
              salutandi id ius, ius facer laudem id. Lorem tibique sadipscing
              pro id, quod noluisse mei te. In epicuri albucius nec, laudem
              aeterno ad vim, nec et sumo oratio legere. Est eu propriae
              assentior posidonium.
            </p>
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
            <h2 className="remark">Cocina</h2>
            <p>
              Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
              salutandi id ius, ius facer laudem id. Lorem tibique sadipscing
              pro id, quod noluisse mei te. In epicuri albucius nec, laudem
              aeterno ad vim, nec et sumo oratio legere. Est eu propriae
              assentior posidonium.
            </p>
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
            <h2 className="remark">Vestidor</h2>
            <p>
              Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
              salutandi id ius, ius facer laudem id. Lorem tibique sadipscing
              pro id, quod noluisse mei te. In epicuri albucius nec, laudem
              aeterno ad vim, nec et sumo oratio legere. Est eu propriae
              assentior posidonium.
            </p>
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
            <h2 className="remark">Recámara</h2>
            <p>
              Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
              salutandi id ius, ius facer laudem id. Lorem tibique sadipscing
              pro id, quod noluisse mei te. In epicuri albucius nec, laudem
              aeterno ad vim, nec et sumo oratio legere. Est eu propriae
              assentior posidonium.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
