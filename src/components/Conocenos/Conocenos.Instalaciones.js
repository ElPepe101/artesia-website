import React from 'react';

import Hero from '../Hero/Hero';
import className from './Conocenos.module.css';
import Pano from '../Pano/Pano';

export default () => (
  <div className={className.conocenos}>
    <Hero image="/img/artesia-portrait-27.jpg" target="instalaciones">
      <div>
        <p>Operación que lo acompaña</p>
        <p>en su vida social y privada</p>
        <a className="button button-square-white" href="/conocenos/proyecto">
          Conocer más
        </a>
      </div>
    </Hero>
    <section name="instalaciones">
      <div className="wrapper">
        <br />
        <h1>Instalaciones</h1>
        <p>
          El edificio ha sido cuidadosamente diseñado por expertos para ofrecer
          tecnología de punta en seguridad, telecomunicaciones e instalaciones
          como son:
        </p>
        <div className={className.icons}>
          <ul>
            <li>
              <span name="acceso" />
              <p>Acceso</p>
              <p>Accesos controlados con tarjetas y biométricos</p>
            </li>
            <li>
              <span name="circuito" />
              <p>Circuito</p>
              <p>Circuito cerrado de TV en áreas públicas</p>
            </li>
            <li>
              <span name="elevadores" />
              <p>Elevadores</p>
              <p>Elevadores de alta velocidad</p>
            </li>
            <li>
              <span name="montacargas" />
              <p>Montacargas</p>
              <p>Servicio de montacargas</p>
            </li>
            <li>
              <span name="acondicionado" />
              <p>Seguridad</p>
              <p>Vigilancia y operación las 24 horas</p>
            </li>
            <li>
              <span name="aire" />
              <p>Aire limpio</p>
              <p>Detección y extracción de aire en los estacionamientos</p>
            </li>
            <li>
              <span name="agua" />
              <p>Tratamiento de agua</p>
              <p>
                Pozos de infiltración para aguas pluviales y planta de
                tratamiento de aguas negras
              </p>
            </li>
            <li>
              <span name="reciclado" />
              <p>Reciclado de agua</p>
              <p>Sistema de reciclado de agua residual y pluvial</p>
            </li>
            <li>
              <span name="energetica" />
              <p>Eficiencia energética</p>
              <p>El proyecto atiende estándares de eficicencia energética</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <Pano pano="artesia-pano-61_03.jpg" portrait="artesia-360-05.jpg" />
    <Pano pano="artesia-pano-52_03.jpg" portrait="artesia-360-08.jpg" />
  </div>
);
