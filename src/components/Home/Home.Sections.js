import React from 'react';
import PropTypes from 'prop-types';

import className from './Home.module.css';

const HomeSections = ({ scrollTo }) => (
  <div className={className.home}>
    <h1 className={className.title}>Artesia Polanco</h1>
    <section id="hero">
      <div className="wrapper">
        <p>
          Ubicado en la avenida más prestigiada de todo Polanco,
          <strong>CAMPOS ELISEOS</strong>.
        </p>
        <button
          type="button"
          onClick={scrollTo('description')}
          name="description"
        >
          Go to description
        </button>
      </div>
    </section>
    <section id="description">
      <div className="wrapper">
        <p>
          <strong>
            Artesia Polanco. Satisfaciendo a los clientes
            <span className="remark">
              más exigentes y sofisticados de México.
            </span>
          </strong>
        </p>
        <p>
          Ubicado en la avenida más prestigiada de Polanco, Campos Eliseos. Sólo{' '}
          <strong>38 Pisos Residenciales</strong>
          divididos en dos torres, piedra y cristal.
        </p>
        <p>
          Desde <strong>254.36m2</strong> a <strong>641.32m2</strong>
          satisfaciendo a los clientes más exigentes y sofisticados.
        </p>
      </div>
    </section>
  </div>
);

HomeSections.propTypes = {
  scrollTo: PropTypes.func.isRequired
};

export default HomeSections;
