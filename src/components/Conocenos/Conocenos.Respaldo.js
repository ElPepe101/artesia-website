import React from 'react';
import { Picture } from 'react-responsive-picture';
import VisibilitySensor from 'react-visibility-sensor';

import Hero from '../Hero/Hero';
import className from './Conocenos.module.css';

export default () => (
  <div className={className.conocenos}>
    <Hero image="/img/artesia-conocenos-19-80.jpg" target="respaldo" />
    <section name="respaldo">
      <div className="wrapper">
        <br />
        <h1>El Respaldo</h1>
        <br />
        <br />
        <VisibilitySensor>
          <Picture sources={[{ srcSet: '/img/artesia-conocenos-23-80.png' }]} />
        </VisibilitySensor>
        <br />
        <br />
        <br />
        <h2>Grupo Sordo Madaleno</h2>
        <p>
          La firma Sordo Madaleno se remonta a 1937. Actualmente está encabezada
          por el arquitecto y diseñador Javier Sordo Madaleno Bringas y cuenta
          con un equipo de más de 120 profesionales en diversas disciplinas.
        </p>
        <br />
        <button className="button-square">Conocer más</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <VisibilitySensor>
          <Picture sources={[{ srcSet: '/img/artesia-conocenos-22-80.jpg' }]} />
        </VisibilitySensor>
        <br />
        <h2>Jan Hendrix</h2>
        <p>
          Es un artista holandés que ha vivido y trabajado en México desde 1978.
          Hendrix recibió la Orden Mexicana del Águila Azteca por parte del
          Gobierno mexicano por su trabajo en el arte y la arquitectura.
        </p>
        <br />
        <button className="button-square">Conocer más</button>
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
    <section name="hendrix">
      <VisibilitySensor>
        <Picture sources={[{ srcSet: '/img/artesia-conocenos-24-80.jpg' }]} />
      </VisibilitySensor>
      <div className="wrapper">
        <h3 className="remark">Jan Hendrix</h3>
        <p>
          Es un artista holandés que ha vivido y trabajado en México desde 1978.
          Hendrix recibió la Orden Mexicana del Águila Azteca por parte del
          Gobierno mexicano por su trabajo en el arte y la arquitectura.
        </p>
        <p>
          El 25% del predio se destinó para área libre donde Jan Hendrix{' '}
          incorporó algunas de sus monumentales y únicas instalaciones creadas{' '}
          para estos espacios de manera permanente.
        </p>
        <br />
        <br />
      </div>
    </section>
    <section name="_360">
      <VisibilitySensor>
        <Picture sources={[{ srcSet: '/img/artesia-conocenos-21-80.jpg' }]} />
      </VisibilitySensor>
      <div className="wrapper">
        <br />
        <br />
        <VisibilitySensor>
          <Picture sources={[{ srcSet: '/img/artesia-conocenos-20-80.jpg' }]} />
        </VisibilitySensor>
        <br />
        <br />
      </div>
    </section>
  </div>
);
