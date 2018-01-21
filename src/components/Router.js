import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import HomeComponent from './Home/Home';
import ConocenosProyectoComponent from './Conocenos/Conocenos.Proyecto';
import ConocenosRespaldoComponent from './Conocenos/Conocenos.Respaldo';
import ConocenosInstalacionesComponent from './Conocenos/Conocenos.Instalaciones';
import PisosComponent from './Pisos/Pisos';
import ServiciosComponent from './Servicios/Servicios';
import GaleriaVistasComponent from './Galeria/Galeria.Vistas';
import GaleriaProyectosComponent from './Galeria/Galeria.Proyectos';
import GaleriaObraComponent from './Galeria/Galeria.Obra';
import UbicacionComponent from './Ubicacion/Ubicacion';
import ContactoComponent from './Contacto/Contacto';

export default () => (
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    <Route path="/conocenos/proyecto" component={ConocenosProyectoComponent} />
    <Route
      path="/conocenos/disenadores"
      component={ConocenosRespaldoComponent}
    />
    <Route
      exact
      path="/conocenos/instalaciones"
      component={ConocenosInstalacionesComponent}
    />
    <Route path="/pisos/:search?" component={PisosComponent} />
    <Route path="/servicios" component={ServiciosComponent} />
    <Route
      exact
      path="/galeria/vistas/:building?/:level?"
      component={GaleriaVistasComponent}
    />
    <Route
      exact
      path="/galeria/interiores"
      component={GaleriaProyectosComponent}
    />
    <Route exact path="/galeria/obra" component={GaleriaObraComponent} />
    <Route path="/ubicacion" component={UbicacionComponent} />

    <Route path="/contacto" component={ContactoComponent} />
    {/* <Route component={Error404} /> */}
  </Switch>
);
