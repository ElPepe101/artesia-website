import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import data from './Galeria.Vistas.data.json';
import Hero from '../Hero/Hero';
import Image from '../Image/Image';
import className from './Galeria.module.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

/* eslint-disable react/no-array-index-key */
const images = data.map((sources, key) => (
  <div key={key}>
    <Image images={[...sources]} />
  </div>
));

export default () => (
  <div className={className.galeria}>
    <Hero image="/img/artesia-portrait-54.png" target="vistas">
      <p className="color-white">
        <strong>VISTAS</strong>
        <br />
        Selecciona el piso para poder ver su vista
      </p>
    </Hero>
    <section name="vistas">
      <Slider {...sliderSettings}>{images}</Slider>
    </section>
  </div>
);
