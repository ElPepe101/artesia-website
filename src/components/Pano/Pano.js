import React from 'react';
import { Picture } from 'react-responsive-picture';
import VisibilitySensor from 'react-visibility-sensor';

import className from './Pano.module.css';

const Pano = () => (
  <section className={className.pano} name="_360">
    <VisibilitySensor>
      <div>
        <Picture sources={[{ srcSet: '/img/artesia-home-16-80.jpg' }]} />
      </div>
    </VisibilitySensor>
  </section>
);

export default Pano;
