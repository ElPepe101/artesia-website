import React from 'react';

import className from './Pano.module.css';
import Image from '../Image/Image';

const Pano = () => (
  <section className={className.pano} name="_360">
    <Image
      images={[
        { path: '/img/artesia-home-16_horizontal@3x.jpg', minWidth: 968 },
        { path: '/img/artesia-home-16_horizontal@0.75x.jpg', minWidth: 640 },
        { path: '/img/artesia-home-16_horizontal@0.5x.jpg', minWidth: 300 },
        { path: '/img/artesia-home-16-80.jpg', minWidth: 0 }
      ]}
    />
  </section>
);

export default Pano;
