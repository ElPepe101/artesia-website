import React from 'react';

import className from './Pano.module.css';
import Image from '../Image/Image';

const Pano = () => (
  <section className={className.pano} name="_360">
    <Image images={[{ path: '/img/artesia-home-16-80.jpg', minWidth: 0 }]} />
  </section>
);

export default Pano;
