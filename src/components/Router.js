import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeComponent from './Home/Home';
import ConocenosProyectoComponent from './Conocenos/Conocenos.Proyecto';
import ConocenosRespaldoComponent from './Conocenos/Conocenos.Respaldo';
import ConocenosInstalacionesComponent from './Conocenos/Conocenos.Instalaciones';
import PisosComponent from './Pisos/Pisos';
import ServiciosComponent from './Servicios/Servicios';

export default () => (
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    <Route path="/conocenos/proyecto" component={ConocenosProyectoComponent} />
    <Route path="/conocenos/respaldo" component={ConocenosRespaldoComponent} />
    <Route
      path="/conocenos/instalaciones"
      component={ConocenosInstalacionesComponent}
    />
    <Route path="/pisos/:search?" component={PisosComponent} />
    <Route path="/servicios" component={ServiciosComponent} />
    {/* <Route component={Error404} /> */}
  </Switch>
);
