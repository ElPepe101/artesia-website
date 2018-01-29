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

  componentDidMount() {
    if (location.search) {
      setTimeout(() => {
        const target = document.querySelector(`.${className.column}`).offsetTop;
        document.scrollingElement.scrollTop = target;
      }, 300);
    }
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

  DrawFronLevel = ({ images }) => (
    <div className={className.images}>
      <Image images={[{ path: `/img/levels/${images[0]}`, minWidth: 0 }]} />
    </div>
  );

  DrawDescription = ({
    building,
    level,
    description,
    features,
    number,
    squares,
    bedrooms,
    pdf
  }) => (
    <div className={className.column}>
      <div className={`wrapper ${className.description}`}>
        <h5>Información del departamento</h5>
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
        <br />
        <p>
          Los departamentos se entregan en obra negra para tener la oportunidad
          de generar el proyecto que más le satisfaga.
        </p>
      </div>
      <div className="wrapper">
        <a
          href={`/pdf/${pdf}`}
          target="_blank"
          className={`button button-square ${className.pdf} ${
            className.btnPrint
          }`}
        >
          <span />
          Imprimir
        </a>
        <a
          href={`/pdf/${pdf}`}
          target="_blank"
          className={`button button-square ${className.pdf} ${
            className.btnDownload
          }`}
        >
          <span />
          Descargar
        </a>
      </div>
    </div>
  );

  render() {
    const level = this.GetLevel();
    return (
      <div className={className.pisos}>
        <Hero image="/img/artesia-portrait-32.jpg" target="select">
          <div>
            <p>Ubicado en la avenida más</p>
            <p>prestigiada de todo Polanco,</p>
            <h2>Campos Eliseos.</h2>
            <a
              className="button button-square-white"
              href="/conocenos/proyecto"
            >
              Conocer más
            </a>
          </div>
        </Hero>
        <section name="select">
          <div className={className.column}>
            <div className="wrapper">
              <h5>Selecciona la planta</h5>
              <select
                readOnly
                onChange={this.ChangeLevel}
                value={this.search.lvl}
              >
                {this.GetOptions()}
              </select>
              {this.DrawFronLevel(level)}
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
