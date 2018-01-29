/* eslint-disable
    react/no-array-index-key,
    no-restricted-globals,
    jsx-a11y/no-onchange,
    no-param-reassign,
    no-extend-native
*/
import React from 'react';
import PropType from 'prop-types';

import data from './Galeria.Vistas.data.json';
import Hero from '../Hero/Hero';
import Image from '../Image/Image';
import className from './Galeria.module.css';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

class Vistas extends React.Component {
  static propTypes;

  constructor({ match: { params: { building, level } } }) {
    super();
    this.building = building || 'torre-piedra';
    this.level = level || 'piso-2';
  }

  getBuildingOptions = () =>
    Object.keys(data).map(key => (
      <option key={key} value={key}>
        {capitalize(key.replace('-', ' '))}
      </option>
    ));

  getLevelOptions = () =>
    Object.keys(data[this.building]).map(key => (
      <option key={key} value={key}>
        {capitalize(key.replace('-', ' '))}
      </option>
    ));

  building = '';
  level = '';

  ChangeLevel = event => {
    if (event.target.id === 'building') {
      if (data[event.target.value][this.level]) {
        location.pathname = `/galeria/vistas/${event.target.value}/${
          this.level
        }`;
      } else {
        const firstLevel = Object.keys(data[event.target.value])[0];
        location.pathname = `/galeria/vistas/${
          event.target.value
        }/${firstLevel}`;
      }
    }

    if (event.target.id === 'level') {
      location.pathname = `/galeria/vistas/${this.building}/${
        event.target.value
      }`;
    }
  };

  Images = () => {
    if (data[this.building] && data[this.building][this.level]) {
      return data[this.building][this.level].map((sources, key) => (
        <div key={key}>
          <Image images={[...sources]} />
        </div>
      ));
    }
    return [];
  };

  getLevelOptionsPlain = building =>
    Object.keys(data[building]).map(key => (
      <a key={key} href={key}>
        {capitalize(key.replace('-', ' '))}
      </a>
    ));

  render() {
    return (
      <div className={className.galeria}>
        <Hero image="/img/artesia-portrait-54.jpg" target="vistas">
          <div>
            <p className="color-white">
              <strong>VISTAS</strong>
              <br />
              Selecciona el piso para poder ver su vista
            </p>
            <a className="button button-square-white" href="/pisos">
              Conocer más
            </a>
          </div>
        </Hero>
        <section name="vistas">
          <div className={className.options}>
            <div className="column-limit">
              <div className={className.column}>
                <Image
                  images={[
                    {
                      path: '/img/artesia-vistas-02_horizontal.jpg',
                      minWidth: 0
                    }
                  ]}
                />
              </div>
              <div className={className.column}>
                <Image
                  images={[
                    {
                      path: '/img/artesia-vistas-01_horizontal.jpg',
                      minWidth: 0
                    }
                  ]}
                />
              </div>
            </div>
            <div className="column-limit">
              <div className={className.column}>
                <div className="wrapper">
                  {this.getLevelOptionsPlain('torre-piedra')}
                </div>
              </div>
              <div className={className.column}>
                <div className="wrapper">
                  {this.getLevelOptionsPlain('torre-cristal')}
                </div>
              </div>
            </div>
          </div>
          {this.Images()}

          <div className={className.optionButtons}>
            <div className={className.column}>
              <div className="wrapper">
                <span>
                  {this.building} - {this.level}
                </span>
              </div>
            </div>
            <div className={className.column}>
              <div className="wrapper">
                <a href={data[this.building][this.level].link}>
                  Conoce los planos
                </a>
              </div>
            </div>
          </div>

          <div className="flex-column-end">
            <div>
              <select
                id="building"
                readOnly
                onChange={this.ChangeLevel}
                value={this.building}
              >
                {this.getBuildingOptions()}
              </select>
              <select
                id="level"
                readOnly
                onChange={this.ChangeLevel}
                value={this.level}
              >
                {this.getLevelOptions()}
              </select>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Vistas.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      building: PropType.string,
      level: PropType.string
    })
  }).isRequired
};

export default Vistas;
