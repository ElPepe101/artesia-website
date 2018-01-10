import React from 'react';

import className from './Contacto.module.css';
import Hero from '../Hero/Hero';

export default () => (
  <div className={className.contacto}>
    <Hero image="/img/artesia-portrait-45.png" target="contacto" />
    <section name="contacto">
      <div className="wrapper">
        <form method="get" action="">
          <submit value="Enviar" />
        </form>
        <div>
          <p>
            <span name="phone" />
            Teléfono<br />
            (55) 5280 4764
          </p>
          <p>
            Correo electrónico<br />
            ventas@artesia.mx
          </p>
          <p>
            <span name="marker" />
            Dirección<br />
            Campos Eliseso No. 200, Polanco, Ciudad de México.
          </p>
        </div>
      </div>
      <iframe
        title="maps"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.637027123327!2d-99.19436024901586!3d19.42808284579381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201ff040db52f%3A0x47f8c905e893e213!2sArtesia+Campos+Eliseos!5e0!3m2!1sen!2smx!4v1515550417935"
      />
    </section>
  </div>
);
