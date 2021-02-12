import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';
import React from 'react';

const NavBar = () =>(
<Navbar inverse>
  <Nav pullRight>
    <NavItem eventKey={1} href="#">
      <Link to="/">Home</Link>
    </NavItem>
    <NavItem eventKey={2} href="#">
      <Link to="/about">About</Link>
    </NavItem>
    <NavItem eventKey={3} href="#">
      <Link to="/map"> Map </Link>
    </NavItem>
    <NavItem eventKey={4} href="#">
      <Link to="/store"> Delis </Link>
    </NavItem>
    <NavItem eventKey={5} href="#">
    <Link to="/user"> Profile </Link>
    </NavItem>
  </Nav>
</Navbar>);

export default NavBar;
