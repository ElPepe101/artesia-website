/* eslint-disable no-restricted-globals, jsx-a11y/no-onchange */
import React from 'react';
import queryString from 'query-string';
import PropType from 'prop-types';
import { Picture } from 'react-responsive-picture';
import VisibilitySensor from 'react-visibility-sensor';

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

  DrawLevel = ({
    building,
    level,
    images,
    description,
    features,
    number,
    squares,
    bedrooms
  }) => (
    <div>
      <div className={`wrapper ${className.images}`}>
        <VisibilitySensor>
          <Picture sources={[{ srcSet: `/img/levels/${images[0]}` }]} />
        </VisibilitySensor>
      </div>
      <div className={className.images}>
        <VisibilitySensor>
          <Picture sources={[{ srcSet: `/img/levels/${images[1]}` }]} />
        </VisibilitySensor>
      </div>
      <div className={`wrapper ${className.description}`}>
        <h2>Información del departamento</h2>
        <h3>
          <span>{building}</span>
          <br />
          {level}
        </h3>
        <p>{description}</p>
        <ul>{features.map(feature => <li key={feature}>{feature}</li>)}</ul>
        <h4>Características</h4>
        <div>
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
    return (
      <div className={className.pisos}>
        <Hero image="/img/artesia-pisos-32-80.jpg " target="select" />
        <section name="select">
          <div className="wrapper">
            <h1>Selecciona la planta</h1>
            <select
              readOnly
              onChange={this.ChangeLevel}
              value={this.search.lvl}
            >
              {this.GetOptions()}
            </select>
          </div>
        </section>
        <section name="images">{this.DrawLevel(this.GetLevel())}</section>
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
