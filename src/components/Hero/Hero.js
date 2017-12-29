import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-scroll';
import { Picture } from 'react-responsive-picture';
import VisibilitySensor from 'react-visibility-sensor';

import className from './Hero.module.css';

const Hero = ({ image, target }) => (
  <section name="hero" className={className.hero}>
    <VisibilitySensor>
      <Picture
        sources={[
          /* {
            srcSet: ', /img/artesia-home-16-80.jpg',
            media: '(min-width: 375px)',
          }, */
          {
            srcSet: image
          }
        ]}
      />
    </VisibilitySensor>
    <div className="wrapper flex-column-end">
      <p className="color-white">
        Ubicado en la avenida más prestigiada de todo Polanco,{' '}
        <strong>CAMPOS ELISEOS</strong>.
      </p>
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
  target: PropTypes.string.isRequired
};

export default Hero;
