import React from 'react';
import { NavLink } from 'react-router-dom';

import className from './Menu.Nav.module.css';

export default () => (
  <ul className={className.list}>
    <li>
      <NavLink
        exact
        to="/conocenos/proyecto"
        className="menu-item"
        activeClassName="active"
      >
        Proyecto
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/conocenos/instalaciones"
        className="menu-item"
        activeClassName="active"
      >
        Instalaciones
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/conocenos/respaldo"
        className="menu-item"
        activeClassName="active"
      >
        Respaldo
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/pisos" className="menu-item" activeClassName="active">
        Pisos residenciales
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/servicios"
        className="menu-item"
        activeClassName="active"
      >
        Servicios
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/galeria/vistas"
        className="menu-item"
        activeClassName="active"
      >
        Vistas
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/galeria/proyectos"
        className="menu-item"
        activeClassName="active"
      >
        Proyectos
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to="/galeria/obra"
        className="menu-item"
        activeClassName="active"
      >
        Obra
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/" className="menu-item" activeClassName="active">
        Ubicación
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/" className="menu-item" activeClassName="active">
        Contáctanos
      </NavLink>
    </li>
  </ul>
);
