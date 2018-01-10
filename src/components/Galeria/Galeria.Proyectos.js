import React from 'react';

import className from './Galeria.module.css';
import Hero from '../Hero/Hero';
import Pano from '../Pano/Pano';
import Image from '../Image/Image';

export default () => (
  <div className={className.galeria}>
    <Hero image="/img/artesia-portrait-43.png" target="proyectos">
      <p className="color-white">
        <strong>VISTAS</strong>
        <br />
        Selecciona el piso para poder ver su vista
      </p>
    </Hero>
    <Pano />
    <section name="proyectos">
      <Image
        images={[
          { path: '/img/artesia-proyectos-55@3x.png', minWidth: 900 },
          { path: '/img/artesia-proyectos-55@2x.png', minWidth: 600 },
          { path: '/img/artesia-proyectos-55.png', minWidth: 400 }
        ]}
      />
      <div className={`wrapper ${className.sectionText}`}>
        <h2 className="remark">Sala comedor</h2>
        <p>
          Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
          salutandi id ius, ius facer laudem id. Lorem tibique sadipscing pro
          id, quod noluisse mei te. In epicuri albucius nec, laudem aeterno ad
          vim, nec et sumo oratio legere. Est eu propriae assentior posidonium.
        </p>
      </div>

      <Image
        images={[
          { path: '/img/artesia-proyectos-46@3x.png', minWidth: 900 },
          { path: '/img/artesia-proyectos-46@2x.png', minWidth: 600 },
          { path: '/img/artesia-proyectos-46.png', minWidth: 400 }
        ]}
      />
      <div className={`wrapper ${className.sectionText}`}>
        <h2 className="remark">Cocina</h2>
        <p>
          Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
          salutandi id ius, ius facer laudem id. Lorem tibique sadipscing pro
          id, quod noluisse mei te. In epicuri albucius nec, laudem aeterno ad
          vim, nec et sumo oratio legere. Est eu propriae assentior posidonium.
        </p>
      </div>

      <Image
        images={[
          { path: '/img/artesia-proyectos-47@3x.png', minWidth: 900 },
          { path: '/img/artesia-proyectos-47@2x.png', minWidth: 600 },
          { path: '/img/artesia-proyectos-47.png', minWidth: 400 }
        ]}
      />
      <div className={`wrapper ${className.sectionText}`}>
        <h2 className="remark">Vestidor</h2>
        <p>
          Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
          salutandi id ius, ius facer laudem id. Lorem tibique sadipscing pro
          id, quod noluisse mei te. In epicuri albucius nec, laudem aeterno ad
          vim, nec et sumo oratio legere. Est eu propriae assentior posidonium.
        </p>
      </div>

      <Image
        images={[
          { path: '/img/artesia-proyectos-48@3x.png', minWidth: 900 },
          { path: '/img/artesia-proyectos-48@2x.png', minWidth: 600 },
          { path: '/img/artesia-proyectos-48.png', minWidth: 400 }
        ]}
      />
      <div className={`wrapper ${className.sectionText}`}>
        <h2 className="remark">Recámara</h2>
        <p>
          Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
          salutandi id ius, ius facer laudem id. Lorem tibique sadipscing pro
          id, quod noluisse mei te. In epicuri albucius nec, laudem aeterno ad
          vim, nec et sumo oratio legere. Est eu propriae assentior posidonium.
        </p>
      </div>
    </section>
  </div>
);