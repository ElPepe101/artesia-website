import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-scroll';

import className from './Hero.module.css';
import Image from '../Image/Image';

const Hero = ({ image, target, children }) => {
  const path = image.replace(/\.[a-zA-Z]*$/, '');
  const ext = image.match(/\.[a-zA-Z]*$/);

  return (
    <section name="hero" className={className.hero}>
      <Image
        images={[
          { path: `${path}_horizontal@3x.jpg`, minWidth: 1200 },
          { path: `${path}_horizontal@0.75x.jpg`, minWidth: 968 },
          { path: `${path}@3x${ext}`, minWidth: 640, portrait: true },
          { path: `${path}@2x${ext}`, minWidth: 360, portrait: true },
          {
            path: `${path}_horizontal@0.5x.jpg`,
            minWidth: 300,
            landscape: true
          },
          { path: `${path}${ext}`, minWidth: 300, portrait: true },
          { path: `${path}${ext}`, minWidth: 0 }
        ]}
      />
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
};

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
