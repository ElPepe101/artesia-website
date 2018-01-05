import React from 'react';
import PropTypes from 'prop-types';
import 'lazysizes';

const Image = ({ images, className }) => {
  const ImageSizes = images
    .filter(img => {
      if (img.minWidth) {
        return true;
      }
      return false;
    })
    .map(img => `${img.path} ${img.minWidth}w`)
    .join(', ');

  return (
    <img
      alt=""
      data-src={!images[0].minWidth ? images[0].path : ''}
      data-sizes="auto"
      data-srcset={ImageSizes}
      className={`lazyload ${className}`}
    />
  );
};

Image.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      minWidth: PropTypes.number
    })
  ).isRequired,
  className: PropTypes.string
};

Image.defaultProps = {
  className: ''
};

export default Image;
