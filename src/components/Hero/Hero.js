import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-scroll';
import { Picture } from 'react-responsive-picture';
import VisibilitySensor from 'react-visibility-sensor';

import className from './Hero.module.css';

const Hero = ({ image, target, children }) => (
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
