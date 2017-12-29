import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeComponent from './Home/Home';
import ConocenosProyectoComponent from './Conocenos/Conocenos.Proyecto';
import ConocenosRespaldoComponent from './Conocenos/Conocenos.Respaldo';
import ConocenosInstalacionesComponent from './Conocenos/Conocenos.Instalaciones';

export default () => (
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    <Route path="/conocenos/proyecto" component={ConocenosProyectoComponent} />
    <Route path="/conocenos/respaldo" component={ConocenosRespaldoComponent} />
    <Route
      path="/conocenos/instalaciones"
      component={ConocenosInstalacionesComponent}
    />
    {/* <Route component={Error404} /> */}
  </Switch>
);
