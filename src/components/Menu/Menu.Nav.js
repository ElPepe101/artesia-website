import React from 'react';
import { NavLink } from 'react-router-dom';

import className from './Menu.Nav.module.css';

export default () => (
  <ul className={className.list}>
    <li>
      <NavLink exact to="/" activeClassName="active">
        Conócenos
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/" activeClassName="active">
        Pisos residenciales
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/" activeClassName="active">
        Servicios
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/" activeClassName="active">
        Galería
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/" activeClassName="active">
        Ubicación
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/" activeClassName="active">
        Contáctanos
      </NavLink>
    </li>
  </ul>
);
