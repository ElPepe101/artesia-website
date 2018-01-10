import React from 'react';

import className from './Galeria.module.css';
import Hero from '../Hero/Hero';
import Image from '../Image/Image';

export default () => (
  <div className={className.galeria}>
    <Hero image="/img/artesia-portrait-43.png" target="obra" />
    <section name="obra">
      <Image
        images={[
          { path: '/img/artesia-obra-49@3x.png', minWidth: 900 },
          { path: '/img/artesia-obra-49@2x.png', minWidth: 600 },
          { path: '/img/artesia-obra-49.png', minWidth: 400 }
        ]}
      />

      <div className={className.level}>
        <div className="wrapper">
          <h3>Torre piedra - Piso 10</h3>
        </div>
        <a href="#a">CONOCE LOS PLANOS &gt;</a>
      </div>

      <Image
        images={[
          { path: '/img/artesia-obra-50@3x.png', minWidth: 900 },
          { path: '/img/artesia-obra-50@2x.png', minWidth: 600 },
          { path: '/img/artesia-obra-50.png', minWidth: 400 }
        ]}
      />

      <div className={`wrapper ${className.obraDesc}`}>
        <h2 className="remark">Proceso de Obra</h2>
        <p>
          Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
          salutandi id ius, ius facer laudem id. Lorem tibique sadipscing pro
          id, quod noluisse mei te. In epicuri albucius nec, laudem aeterno ad
          vim, nec et sumo oratio legere. Est eu propriae assentior posidonium.
        </p>
      </div>

      <Image
        images={[
          { path: '/img/artesia-obra-51@3x.png', minWidth: 900 },
          { path: '/img/artesia-obra-51@2x.png', minWidth: 600 },
          { path: '/img/artesia-obra-51.png', minWidth: 400 }
        ]}
      />
    </section>
  </div>
);
