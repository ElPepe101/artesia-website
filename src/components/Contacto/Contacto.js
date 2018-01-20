import React from 'react';

import className from './Contacto.module.css';
import Hero from '../Hero/Hero';

export default () => (
  <div className={className.contacto}>
    <Hero image="/img/artesia-portrait-53.jpg" target="contacto" />
    <section name="contacto">
      <div className="wrapper">
        <div className="column-limit">
          <form id="form1" name="datos" method="post" action="enviar.php">
            <div className={`${className.column}`}>
              <input
                name="Nombre"
                type="text"
                className="Estilo5"
                id="Nombre"
                size="40"
                placeholder="Nombre"
              />
              <input
                name="E-mail"
                type="text"
                className="Estilo5"
                id="E-mail"
                size="40"
                placeholder="Correo electrónico"
              />
              <input
                name="telefono"
                type="phone"
                className="Estilo5"
                id="telefono"
                size="40"
                placeholder="Teléfono"
              />
            </div>
            <div className={`${className.column}`}>
              <textarea
                name="Comentarios"
                cols="34"
                rows="8"
                wrap="virtual"
                className="Estilo5"
                id="Comentarios"
                placeholder="Mensaje"
              />
              <input
                alt=""
                name="submit"
                onClick="MM_validateForm('Nombre','','R','E-mail','','RisEmail','Teléfono:','','RisNum','Comentarios','','R');return document.MM_returnValue"
                src="contacto/enviar.jpg"
                width="70"
                height="31"
                value="Enviar"
              />
            </div>
            <div className={`${className.column}`}>
              <div className={className.info}>
                <p>
                  <span name="phone" />
                  <strong>Teléfono:</strong>
                  <br />
                  (55) 5280 4764
                </p>
                <p>
                  <span name="mail" />
                  <strong>Correo electrónico:</strong>
                  <br />
                  ventas@artesia.mx
                </p>
                <p>
                  <span name="marker" />
                  <strong>Dirección:</strong>
                  <br />
                  Campos Eliseso No. 200, Polanco, Ciudad de México.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <iframe
        title="maps"
        frameBorder="0"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.637027123327!2d-99.19436024901586!3d19.42808284579381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201ff040db52f%3A0x47f8c905e893e213!2sArtesia+Campos+Eliseos!5e0!3m2!1sen!2smx!4v1515550417935"
      />
    </section>
  </div>
);
