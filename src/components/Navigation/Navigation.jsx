import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

function Navigation() {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'pink',
  };

  return (
    <nav className={css.navi}>
      <NavLink exact="true" to="/" style={activeStyle}>
        HOME
      </NavLink>{' '}
      |{' '}
      <NavLink to="/movies" style={activeStyle}>
        MOVIES
      </NavLink>
    </nav>
  );
}

export default Navigation;