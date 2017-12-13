import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeComponent from './Home/Home';

export default () => (
  <Switch>
    <Route exact path="/" component={HomeComponent} />
    {/* <Route component={Error404} /> */}
  </Switch>
);
