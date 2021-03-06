import React from 'react';

import className from './Servicios.module.css';
import Hero from '../Hero/Hero';
import Image from '../Image/Image';

export default () => (
  <div className={className.servicios}>
    <Hero image="/img/artesia-portrait-42.jpg" target="servicios_t">
      <div>
        <p>Operación de Hotel que</p>
        <p>cubre cualquier necesidad</p>
        <a className="button button-square-white" href="/conocenos/proyecto">
          Conocer más
        </a>
      </div>
    </Hero>
    <section name="servicios_t">
      <div className={`column-limit ${className.firstLimit}`}>
        <div
          className={`${className.column} ${className.columnTextArea} ${
            className.columnToLeft
          }`}
        >
          <div className="wrapper">
            <h3 className="uppercase">Servicios</h3>
            <p>
              Artesia contará con toda una gama de servicios de hotel para
              comodidad de los que aquí vivan:
            </p>
            <ul>
              <li>
                <span name="llaves" />
                <p>Ama de llaves</p>
              </li>
              <li>
                <span name="concierge" />
                <p>Concierge las 24 horas</p>
              </li>
              <li>
                <span name="mantenimiento" />
                <p>Mantenimiento de áreas privadas</p>
              </li>
              <li>
                <span name="carta" />
                <p>Servicios a la carta</p>
              </li>
              <li>
                <span name="room" />
                <p>Room service</p>
              </li>
              <li>
                <span name="valet" />
                <p>Valet parking</p>
              </li>
            </ul>
            <p>
              *&quot;Algunos de estos servicios de hotel estarán integrados
              dentro de la cuota de mantenimiento, mientras que otros serán a la
              carta&quot;
            </p>
          </div>
        </div>
        <div className={`${className.column} ${className.columnToLeft}`}>
          <Image
            images={[
              { path: '/img/artesia-servicios-36@3x.jpg', minWidth: 900 },
              { path: '/img/artesia-servicios-36@2x.jpg', minWidth: 600 },
              { path: '/img/artesia-servicios-36.jpg', minWidth: 300 },
              { path: '/img/artesia-servicios-36.jpg', minWidth: 0 }
            ]}
          />
        </div>
      </div>

      <div className="column-limit">
        <div className={`${className.column} ${className.columnPadding}`}>
          <Image
            images={[
              { path: '/img/artesia-servicios-56@3x.jpg', minWidth: 900 },
              { path: '/img/artesia-servicios-56@2x.jpg', minWidth: 600 },
              { path: '/img/artesia-servicios-56.jpg', minWidth: 300 },
              { path: '/img/artesia-servicios-56.jpg', minWidth: 0 }
            ]}
          />
        </div>
        <div className={`${className.column} ${className.columnPadding}`}>
          <Image
            images={[
              { path: '/img/artesia-servicios-58@3x.jpg', minWidth: 900 },
              { path: '/img/artesia-servicios-58@2x.jpg', minWidth: 600 },
              { path: '/img/artesia-servicios-58.jpg', minWidth: 300 },
              { path: '/img/artesia-servicios-58.jpg', minWidth: 0 }
            ]}
          />
        </div>
      </div>

      <div className="column-limit">
        <div className={`${className.column} ${className.columnToRight}`}>
          <Image
            images={[
              { path: '/img/artesia-servicios-57@3x.jpg', minWidth: 900 },
              { path: '/img/artesia-servicios-57@2x.jpg', minWidth: 600 },
              { path: '/img/artesia-servicios-57.jpg', minWidth: 300 },
              { path: '/img/artesia-servicios-57.jpg', minWidth: 0 }
            ]}
          />
        </div>
        <div
          className={`${className.column} ${className.columnTextArea} ${
            className.columnToRight
          }`}
        >
          <div className="wrapper">
            <h3 className="uppercase">Amenidades</h3>
            <p>
              Espacios cuidadosamente diseñados para combinar lo práctico con el
              confort y la elegancia.
            </p>
            <ul>
              <li>
                <span name="gym" />
                <p>Gym equipado</p>
              </li>
              <li>
                <span name="nado" />
                <p>Carril de nado contra corriente</p>
              </li>
              <li>
                <span name="restaurant" />
                <p>Restaurant / Coffe Bar</p>
              </li>
              <li>
                <span name="business" />
                <p>Business Center</p>
              </li>
              <li>
                <span name="sky" />
                <p>Sky lounge</p>
              </li>
              <li>
                <span name="jacuzzi" />
                <p>Jacuzzi</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`column-limit ${className.columnLimitDistance}`}>
        <div className={`${className.column}`}>
          <Image
            images={[
              { path: '/img/artesia-servicios-37-80@3x.jpg', minWidth: 900 },
              { path: '/img/artesia-servicios-37-80@2x.jpg', minWidth: 600 },
              { path: '/img/artesia-servicios-37-80.jpg', minWidth: 300 },
              { path: '/img/artesia-servicios-37-80.jpg', minWidth: 0 }
            ]}
          />
        </div>
        <div
          className={`${className.column} ${className.columnText} ${
            className.columnFloatLeft
          }`}
        >
          <div className="wrapper">
            <h3 className="remark">Gym</h3>
            <p>
              Gimnasio completamente equipado. Baños con vapor y alberca con
              carril de nado contra corriente.
            </p>
          </div>
        </div>
      </div>

      <div className="column-limit">
        <div className={`${className.column}`}>
          <Image
            images={[
              { path: '/img/artesia-servicios-38-80@3x.jpg', minWidth: 900 },
              { path: '/img/artesia-servicios-38-80@2x.jpg', minWidth: 600 },
              { path: '/img/artesia-servicios-38-80.jpg', minWidth: 300 },
              { path: '/img/artesia-servicios-38-80.jpg', minWidth: 0 }
            ]}
          />
        </div>
        <div className={`${className.column} ${className.columnText}`}>
          <div className="wrapper">
            <h3 className="remark">Sky lounge</h3>
            <p>
              Dos terrazas a 90 metros de altura, una cuenta con jacuzzi.
              Equipadas con todos los servicios.
            </p>
          </div>
        </div>
      </div>

      <div className="column-limit">
        <div className={`${className.column}`}>
          <Image
            images={[
              { path: '/img/artesia-servicios-39-80@3x.jpg', minWidth: 600 },
              { path: '/img/artesia-servicios-39-80.jpg', minWidth: 300 },
              { path: '/img/artesia-servicios-39-80.jpg', minWidth: 0 }
            ]}
          />
        </div>
        <div
          className={`${className.column} ${className.columnText} ${
            className.columnFloatLeft
          }`}
        >
          <div className="wrapper">
            <h3 className="remark">Lobby</h3>
            <p>
              Concierge 24 horas. Valet parking y 7 sotanos de estacionamientos.
            </p>
          </div>
        </div>
      </div>

      <div className="column-limit">
        <div className={`${className.column}`}>
          <Image
            images={[
              { path: '/img/artesia-servicios-40-80@3x.jpg', minWidth: 900 },
              { path: '/img/artesia-servicios-40-80@2x.jpg', minWidth: 600 },
              { path: '/img/artesia-servicios-40-80.jpg', minWidth: 300 },
              { path: '/img/artesia-servicios-40-80.jpg', minWidth: 0 }
            ]}
          />
        </div>
        <div className={`${className.column} ${className.columnText}`}>
          <div className="wrapper">
            <h3 className="remark">Seguridad</h3>
            <p>Acceso con cristal blindado y seguridad las 24 horas.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
