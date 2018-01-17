/* eslint-disable no-restricted-globals, jsx-a11y/no-onchange */
import React from 'react';
import queryString from 'query-string';
import PropType from 'prop-types';

import Image from '../Image/Image';
import levels from './Pisos.data.json';
import className from './Pisos.module.css';
import Hero from '../Hero/Hero';

class Pisos extends React.Component {
  static propTypes;

  constructor({ location }) {
    super();
    this.search = queryString.parse(location.search || '?lvl=1');
  }

  search = '';

  GetOptions = () =>
    levels.map(option => (
      <option key={option.value} value={option.value}>
        {option.building} - {option.level}
      </option>
    ));

  ChangeLevel = event => {
    location.search = `?lvl=${event.target.value}`;
  };

  GetLevel = () =>
    levels.find(level => Number(level.value) === Number(this.search.lvl));

  DrawLevel = ({ images }) => (
    <div className={className.column}>
      <div className={className.images}>
        <Image images={[{ path: `/img/levels/${images[1]}`, minWidth: 0 }]} />
      </div>
    </div>
  );

  DrawDescription = ({
    building,
    level,
    description,
    features,
    number,
    squares,
    bedrooms
  }) => (
    <div className={className.column}>
      <div className={`wrapper ${className.description}`}>
        <h2>Información del departamento</h2>
        <h3>
          <span>{building}</span>
          <br />
          {level}
        </h3>
        {/* <p>{description}</p> */}
        <ul>{features.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <h4>Características</h4>
        <div className={className.features}>
          <p>
            <span /> {number}
          </p>
          <p>
            <span /> {squares} m2
          </p>
          <p>
            <span /> {bedrooms}
          </p>
        </div>
      </div>
      <div className="wrapper">
        <button className={`button-square ${className.btnPrint}`}>
          <span />
          Imprimir
        </button>
        <button className={`button-square ${className.btnDownload}`}>
          <span />
          Descargar
        </button>
      </div>
    </div>
  );

  render() {
    const level = this.GetLevel();
    return (
      <div className={className.pisos}>
        <Hero image="/img/artesia-portrait-32.png" target="select" />
        <section name="select">
          <div className={className.column}>
            <div className="wrapper">
              <h1>Selecciona la planta</h1>
              <select
                readOnly
                onChange={this.ChangeLevel}
                value={this.search.lvl}
              >
                {this.GetOptions()}
              </select>
              <div className={className.images}>
                <Image
                  images={[{ path: '/img/levels/lvl1-front.jpg', minWidth: 0 }]}
                />
              </div>
            </div>
          </div>
          {this.DrawLevel(level)}
          {this.DrawDescription(level)}
        </section>
      </div>
    );
  }
}

Pisos.propTypes = {
  location: PropType.shape({
    search: PropType.string
  }).isRequired
};

export default Pisos;
