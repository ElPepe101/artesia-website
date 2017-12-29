import React from 'react';

import Hero from '../Hero/Hero';
import className from './Conocenos.module.css';
import Pano from '../Pano/Pano';

export default () => (
  <div className={className.conocenos}>
    <Hero image="/img/artesia-conocenos-27.png" target="instalaciones" />
    <section name="instalaciones">
      <div className="wrapper">
        <br />
        <h1>Instalaciones</h1>
        <p>
          El edificio ha sido cuidadosamente diseñado por experto para ofrecer
          tecnología de punta en seguridad, telecomunicaciones, instalaciones
          como son:
        </p>
        <div className={className.icons}>
          <ul>
            <li>
              <span name="acceso" />
              <p>Acceso</p>
              <p>Accesos controlados con tarjetas</p>
            </li>
            <li>
              <span name="circuito" />
              <p>Circuito</p>
              <p>Circuito cerra de TV en áreas públicas</p>
            </li>
            <li>
              <span name="elevadores" />
              <p>Elevadores</p>
              <p>Elevadores de alta velocidad</p>
            </li>
            <li>
              <span name="acondicionado" />
              <p>AC</p>
              <p>Instalaciones de aire acondicionado</p>
            </li>
            <li>
              <span name="montacargas" />
              <p>Montacargas</p>
              <p>Servicio de montaccargas</p>
            </li>
            <li>
              <span name="aire" />
              <p>Aire limpio</p>
              <p>Detección y extracción aire en los estacionamientos</p>
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
    <Pano />
  </div>
);
