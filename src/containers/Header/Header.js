import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

import './header.css';

const Header = () => (
  <Navbar fixed="top" className="custom-navbar" expand="md">
    <NavbarBrand className="navbar-brand mx-auto">Technical Exercise</NavbarBrand>
  </Navbar>
);


export default Header;
