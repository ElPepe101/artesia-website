import React from 'react';

import className from './Ubicacion.module.css';
import Hero from '../Hero/Hero';
// import Image from '../Image/Image';

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
        <iframe
          title="maps"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.637027123327!2d-99.19436024901586!3d19.42808284579381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201ff040db52f%3A0x47f8c905e893e213!2sArtesia+Campos+Eliseos!5e0!3m2!1sen!2smx!4v1515550417935"
        />
        <br />
      </div>

      <div className="wrapper">
        <iframe
          title="streetview"
          width="924"
          height="611"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com.mx/maps?q=artesia&amp;ie=UTF8&amp;client=safari&amp;oe=UTF-8&amp;fb=1&amp;gl=mx&amp;hq=artesia&amp;hnear=0x85ce0026db097507:0x54061076265ee841,Ciudad+de+M%C3%A9xico,+D.F.&amp;cid=0,0,5186115998131151379&amp;t=m&amp;ll=19.429403,-99.192016&amp;spn=0.0103,0.01929&amp;layer=c&amp;cbll=19.428223,-99.192066&amp;panoid=55qsxvrLSy6xLCi0Y9Uc7g&amp;cbp=12,157.66,,0,11.9&amp;source=embed&amp;output=svembed"
        />
      </div>
    </section>
  </div>
);
