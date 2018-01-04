import React from 'react';
import PropTypes from 'prop-types';
import 'lazysizes';

const Image = ({ images, className }) => {
  const ImageSizes = images
    .map(img => {
      const width = img.minWidth ? ` ${img.minWidth}w` : '';
      return `${img.path}${width}`;
    })
    .join(', ');

  return (
    <img
      alt=""
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
