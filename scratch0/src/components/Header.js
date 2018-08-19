import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../static/images/logo.png';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    className="p1 mx2 text-decoration-none rounded"
    exact
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header className="flex items-center justify-between px4">
    <div>
      <img src={Logo} alt="Logo Orange" />
    </div>
    <h1 className="h1">
      <span role="img">&#x1F372;</span> My Recipes
    </h1>
    <nav>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/favorites">Favorites</HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};
export default Header;
