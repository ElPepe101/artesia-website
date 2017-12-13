import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="menu">
    <ul>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
    </ul>
  </div>
);
