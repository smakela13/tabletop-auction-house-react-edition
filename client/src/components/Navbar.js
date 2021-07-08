import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
	return (
		<>
			<Navbar
				collapseOnSelect
				sticky='top'
				expand='sm'
				bg='dark'
				variant='dark'
				className='header'>
				<Navbar.Brand className='header-nav'>
					Tabletop Auction House
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/contact-me'>Add Item</Nav.Link>
						<Nav.Link href='/contact-me'>Contact</Nav.Link>
						<Nav.Link href='/portfolio'>Log In</Nav.Link>
						<Nav.Link href='/resume'>Sign Up</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigation;
