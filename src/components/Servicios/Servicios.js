import React from 'react';

import className from './Servicios.module.css';
import Hero from '../Hero/Hero';
import Image from '../Image/Image';

export default () => (
  <div className={className.servicios}>
    <Hero image="/img/artesia-portrait-42.jpg" target="servicios" />
    <section name="servicios">
      <div className={`column-limit ${className.firstLimit}`}>
        <div className={`${className.column} ${className.columnToLeft}`}>
          <div className="wrapper">
            <h1>Servicios</h1>
            <p>
              Artesia contará con toda una gama de servicios de hotel para
              comodidad de los que aquí vivan*:
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
        <div className={`${className.column} ${className.columnToRight}`}>
          <div className="wrapper">
            <h1>Amenidades</h1>
            <p>
              Espacios cuidadosamente diseñados para combionar lo práctico con
              el confort y la elegancia.
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
            images={[{ path: '/img/artesia-servicios-37-80.jpg', minWidth: 0 }]}
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
              Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
              salutandi id ius, ius facer laudem id. Lorem tibique sadipscing
              pro id, quod noluisse mei te. In epicuri albucius nec, laudem
              aeterno ad vim, nec et sumo oratio legere. Est eu propriae
              assentior posidonium.
            </p>
          </div>
        </div>
      </div>

      <div className="column-limit">
        <div className={`${className.column}`}>
          <Image
            images={[{ path: '/img/artesia-servicios-38-80.jpg', minWidth: 0 }]}
          />
        </div>
        <div className={`${className.column} ${className.columnText}`}>
          <div className="wrapper">
            <h3 className="remark">Sky lounge</h3>
            <p>
              Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
              salutandi id ius, ius facer laudem id. Lorem tibique sadipscing
              pro id, quod noluisse mei te. In epicuri albucius nec, laudem
              aeterno ad vim, nec et sumo oratio legere. Est eu propriae
              assentior posidonium.
            </p>
          </div>
        </div>
      </div>

      <div className="column-limit">
        <div className={`${className.column}`}>
          <Image
            images={[{ path: '/img/artesia-servicios-39-80.jpg', minWidth: 0 }]}
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
              Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
              salutandi id ius, ius facer laudem id. Lorem tibique sadipscing
              pro id, quod noluisse mei te. In epicuri albucius nec, laudem
              aeterno ad vim, nec et sumo oratio legere. Est eu propriae
              assentior posidonium.
            </p>
          </div>
        </div>
      </div>

      <div className="column-limit">
        <div className={`${className.column}`}>
          <Image
            images={[{ path: '/img/artesia-servicios-40-80.jpg', minWidth: 0 }]}
          />
        </div>
        <div className={`${className.column} ${className.columnText}`}>
          <div className="wrapper">
            <h3 className="remark">Foto nocturna</h3>
            <p>
              Lorem ipsum dolor sit amet, eos no tale posse vocent, partiendo
              salutandi id ius, ius facer laudem id. Lorem tibique sadipscing
              pro id, quod noluisse mei te. In epicuri albucius nec, laudem
              aeterno ad vim, nec et sumo oratio legere. Est eu propriae
              assentior posidonium.
            </p>
          </div>
        </div>
      </div>

      <Image
        className={className.hide}
        images={[{ path: '/img/artesia-servicios-41-80.jpg', minWidth: 0 }]}
      />
    </section>
  </div>
);
