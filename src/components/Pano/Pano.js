import React from 'react';
import PropTypes from 'prop-types';
import { Pannellum } from '360-react-pannellum';

import className from './Pano.module.css';
import Image from '../Image/Image';

let instanceNumber = 0;

class PanoWrapper extends React.Component {
  static defaultProps;

  constructor() {
    super();
    this.guid = `pano-id-${instanceNumber++}`;
  }

  state = {
    viewer: false
  };

  ToggleViewer = () => {
    this.setState({
      viewer: !this.state.viewer
    });

    if (!this.state.viewer) {
      setTimeout(() => {
        const target = document.querySelector(`.${className.pano}.${this.guid}`)
          .offsetTop;
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
            closeButtonTitle=" "
            showZoomCtrl={false}
            showFullscreenCtrl={false}
            autoLoad
          />
        </div>
      );
    }

    const path = `/img/pano/portraits/${this.props.portrait.replace(
      /\.[a-zA-Z]*$/,
      ''
    )}`;
    const ext = this.props.portrait.match(/\.[a-zA-Z]*$/);

    return (
      <button onClick={() => this.ToggleViewer()}>
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
      </button>
    );
  }

  render() {
    return (
      <section className={`${className.pano} ${this.guid}`} name="_360">
        {this.SetContent()}
      </section>
    );
  }
}

PanoWrapper.propTypes = {
  pano: PropTypes.string,
  portrait: PropTypes.string
};

PanoWrapper.defaultProps = {
  pano: 'artesia-pano-25_03.jpg',
  portrait: '/img/artesia-home-16-80.jpg'
};

export default PanoWrapper;
