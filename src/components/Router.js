import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeComponent from './Home/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      {/* <Route component={Error404} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
