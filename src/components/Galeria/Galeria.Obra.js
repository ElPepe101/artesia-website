import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import data from './Galeria.Obra.data.json';
import className from './Galeria.module.css';
import Hero from '../Hero/Hero';
import Image from '../Image/Image';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  adaptiveHeight: true
};

class Obra extends React.Component {
  static propTypes;

  render() {
    return (
      <div className={className.galeria}>
        <Hero image="/img/artesia-portrait-43.jpg" target="obra">
          <div>
            <p>Caprichoso diseño que</p>
            <p>transmite una experiencia única,</p>
            <h2>Campos Eliseos.</h2>
            <a
              className="button button-square-white"
              href="/conocenos/proyecto"
            >
              Conocer más
            </a>
          </div>
        </Hero>
        <section name="obra">
          <div>
            <Slider {...sliderSettings}>
              {data.obra1.map(x => (
                <div key={x.path}>
                  <Image
                    images={[
                      {
                        path: `/img/Galeria-Proceso_de_obra-1/${x.path}`,
                        minWidth: x.minWidth
                      }
                    ]}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className={className.level}>
            <div className={`${className.column}`}>
              <div className="wrapper">
                <h3>Torre piedra - Piso 10</h3>
              </div>
            </div>

            <div className={`${className.column}`}>
              <a href="#a">CONOCE LOS PLANOS &gt;</a>
            </div>
          </div>

          <div className="column-limit">
            <div className={className.column}>
              <Image
                images={[
                  { path: '/img/artesia-obra-50@3x.jpg', minWidth: 968 },
                  { path: '/img/artesia-obra-50@2x.jpg', minWidth: 640 },
                  { path: '/img/artesia-obra-50.jpg', minWidth: 300 },
                  { path: '/img/artesia-obra-50.jpg', minWidth: 0 }
                ]}
              />
            </div>

            <div
              className={`${className.column} ${className.sectionTextSmall} ${
                className.columnFloatLeft
              }`}
            >
              <div className={`wrapper ${className.obraDesc}`}>
                <h2 className="remark">Proceso de Obra</h2>
                <p>
                  Terreno de 1,000 m2, 23,000 m2 de construcción, 4 años y medio
                  de obra, edificio con cerrificación ambiental PCES (Programa
                  de Certificación de Edificios Sustentables).
                </p>
                <p>
                  25 niveles de altura, planta de tratamientos de agua. 157
                  cajones de estacionamiento.
                </p>
              </div>
            </div>
          </div>

          <Slider {...sliderSettings}>
            {data.obra2.map(x => (
              <div key={x.path}>
                <Image
                  images={[
                    {
                      path: `/img/Galeria-Proceso_de_obra-2/${x.path}`,
                      minWidth: x.minWidth
                    }
                  ]}
                />
              </div>
            ))}
          </Slider>
        </section>
      </div>
    );
  }
}

export default Obra;
