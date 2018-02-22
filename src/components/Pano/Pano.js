import React from 'react';
import PropTypes from 'prop-types';
import { Pannellum } from '360-react-pannellum';

import className from './Pano.module.css';
import Image from '../Image/Image';

class PanoWrapper extends React.Component {
  static defaultProps;

  state = {
    viewer: false
  };

  ToggleViewer = () => {
    this.setState({
      viewer: !this.state.viewer
    });

    if (!this.state.viewer) {
      setTimeout(() => {
        const target = document.querySelector(`.${className.pano}`).offsetTop;
        document.scrollingElement.scrollTop = target;
      }, 100);
    }
  };

  SetContent() {
    if (this.state.viewer) {
      return (
        <div className={className.panoWrapper}>
          <Pannellum
            width="100%"
            height="100%"
            imagePath={`/img/pano/${this.props.pano}`}
            isDisplayCloseButton
            closeHandler={this.ToggleViewer}
            closeButtonTitle="X"
            showZoomCtrl={false}
            showFullscreenCtrl={false}
            autoLoad
          />
        </div>
      );
    }

    return (
      <button onClick={() => this.ToggleViewer()}>
        <Image images={this.props.portrait} />
      </button>
    );
  }

  render() {
    return (
      <section className={className.pano} name="_360">
        {this.SetContent()}
      </section>
    );
  }
}

PanoWrapper.propTypes = {
  pano: PropTypes.string,
  portrait: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      minWidth: PropTypes.number
    })
  )
};

PanoWrapper.defaultProps = {
  pano: 'artesia-pano-25_03.jpg',
  portrait: [
    { path: '/img/artesia-home-16_horizontal@3x.jpg', minWidth: 968 },
    { path: '/img/artesia-home-16_horizontal@0.75x.jpg', minWidth: 640 },
    { path: '/img/artesia-home-16_horizontal@0.5x.jpg', minWidth: 300 },
    { path: '/img/artesia-home-16-80.jpg', minWidth: 0 }
  ]
};

export default PanoWrapper;
