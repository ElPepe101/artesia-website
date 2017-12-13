import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <ul>
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>
  </ul>
);
