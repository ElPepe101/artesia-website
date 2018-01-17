import React from 'react';
import PropTypes from 'prop-types';
import 'lazysizes';

const Image = ({ images, className, sizes }) => {
  let imagesnum = 0;
  const sources = images
    .filter(img => {
      if (img.minWidth) {
        return true;
      }
      return false;
    })
    .sort((a, b) => b.minWidth - a.minWidth)
    .map(img => {
      let orientation = '';
      if (img.landscape) {
        orientation = ' and (orientation: landscape)';
      } else if (img.portrait) {
        orientation = ' and (orientation: portrait)';
      }
      imagesnum += 1;
      return (
        <source
          key={`picture_source_${className}-${imagesnum}`}
          data-srcset={img.path}
          media={`(min-width: ${img.minWidth}px)${orientation}`}
        />
      );
    });
  // .join(', ');

  return (
    <picture>
      {sources}
      <img
        alt=""
        data-src={!images[0].minWidth ? images[0].path : ''}
        className={`lazyload ${className}`}
      />
    </picture>
  );
};

Image.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      minWidth: PropTypes.number
    })
  ).isRequired,
  className: PropTypes.string,
  sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

Image.defaultProps = {
  className: '',
  sizes: 'auto'
};

export default Image;
