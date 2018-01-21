import React from 'react';

import className from './Ubicacion.module.css';
import Hero from '../Hero/Hero';
import Image from '../Image/Image';

export default () => (
  <div className={className.ubicacion}>
    <Hero image="/img/artesia-portrait-45.jpg" target="ubicacion">
      <div>
        <p>Comfort y vida urbana</p>
        <p>en una misma área</p>
        <h2>Campos Eliseos.</h2>
        <a className="button button-square-white" href="/conocenos/proyecto">
          Conocer más
        </a>
      </div>
    </Hero>
    <section name="ubicacion">
      <div className="wrapper">
        <br />
        <br />
        <iframe
          title="maps"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.637027123327!2d-99.19436024901586!3d19.42808284579381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201ff040db52f%3A0x47f8c905e893e213!2sArtesia+Campos+Eliseos!5e0!3m2!1sen!2smx!4v1515550417935"
        />
        <br />
      </div>

      <div className="wrapper">
        <br />
        <br />
        <Image
          images={[
            { path: '/img/artesia-ubicacion-52@3x.jpg', minWidth: 968 },
            { path: '/img/artesia-ubicacion-52@2x.jpg', minWidth: 640 },
            { path: '/img/artesia-ubicacion-52.jpg', minWidth: 300 },
            { path: '/img/artesia-ubicacion-52.jpg', minWidth: 0 }
          ]}
        />
        <br />
        <br />
        <br />
      </div>
    </section>
  </div>
);
