import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';
import React from 'react';

const NavBar = () => (
	<Navbar inverse>
		<Nav pullRight>
			<NavItem eventKey={1}>
				<Link to="/">Home</Link>
			</NavItem>
			<NavItem eventKey={2}>
				<Link to="/about">About</Link>
			</NavItem>
			<NavItem eventKey={3}>
				<Link to="/map"> Map </Link>
			</NavItem>
			<NavItem eventKey={4}>Comments</NavItem>
			<NavDropdown eventKey={5} title="Ratings" id="basic-nav-dropdown">
				<MenuItem eventKey={5.1}>Reviews</MenuItem>
				<MenuItem eventKey={5.2}>Menu Items</MenuItem>
			</NavDropdown>
		</Nav>
	</Navbar>
);

export default NavBar;
