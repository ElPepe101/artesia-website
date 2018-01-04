import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-scroll';

import className from './Hero.module.css';
import Image from '../Image/Image';

const Hero = ({ image, target, children }) => (
  <section name="hero" className={className.hero}>
    <Image images={[{ path: image, minWidth: 0 }]} />
    <div className="wrapper flex-column-end">
      {children}
      <Button
        to={target}
        smooth
        readOnly
        duration={350}
        value=""
        className="button color-white"
      />
    </div>
  </section>
);

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  children: PropTypes.node
};

Hero.defaultProps = {
  children: (
    <p className="color-white">
      Ubicado en la avenida más prestigiada de todo Polanco,{' '}
      <strong>CAMPOS ELISEOS</strong>
    </p>
  )
};

export default Hero;
