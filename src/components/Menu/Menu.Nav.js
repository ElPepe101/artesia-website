import React from 'react';
import { NavLink } from 'react-router-dom';

import className from './Menu.Nav.module.css';

export default ({ list, wideSubmenu, rounded }) => (
  <ul className={list || className.list}>
    <li name="submenu-3">
      <span>Conócenos</span>
      <ul>
        <li name="conocenos-proyecto">
          <NavLink
            exact
            to="/conocenos/proyecto"
            className="menu-item"
            activeClassName="active"
          >
            Proyecto
          </NavLink>
        </li>
        <li name="conocenos-instalaciones">
          <NavLink
            exact
            to="/conocenos/instalaciones"
            className="menu-item"
            activeClassName="active"
          >
            Instalaciones
          </NavLink>
        </li>
        <li name="conocenos-respaldo">
          <NavLink
            exact
            to="/conocenos/disenadores"
            className="menu-item"
            activeClassName="active"
          >
            Diseñadores
          </NavLink>
        </li>
      </ul>
    </li>
    <li name="pisos">
      <NavLink exact to="/pisos" className="menu-item" activeClassName="active">
        Pisos residenciales
      </NavLink>
    </li>
    <li name="servicios">
      <NavLink
        exact
        to="/servicios"
        className="menu-item"
        activeClassName="active"
      >
        Servicios
      </NavLink>
    </li>
    <li name="submenu-3">
      <span>Galería</span>
      <ul className={wideSubmenu || className.wideSubmenu}>
        <li name="galeria-vistas">
          <NavLink
            exact
            to="/galeria/vistas"
            className="menu-item"
            activeClassName="active"
          >
            Vistas
          </NavLink>
        </li>
        <li name="galeria-proyectos">
          <NavLink
            exact
            to="/galeria/interiores"
            className="menu-item"
            activeClassName="active"
          >
            Interiores
          </NavLink>
        </li>
        <li name="galeria-obra">
          <NavLink
            exact
            to="/galeria/obra"
            className="menu-item no-wrap"
            activeClassName="active"
          >
            Proceso de obra
          </NavLink>
        </li>
      </ul>
    </li>
    <li name="ubicacion">
      <NavLink
        exact
        to="/ubicacion"
        className="menu-item"
        activeClassName="active"
      >
        Ubicación
      </NavLink>
    </li>
    <li name="contacto">
      <NavLink
        exact
        to="/contacto"
        className="menu-item"
        activeClassName="active"
      >
        <span className={rounded || className.rounded}>Contáctanos</span>
      </NavLink>
    </li>
  </ul>
);
