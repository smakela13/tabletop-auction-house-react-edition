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
				className='header mb-4'>
				<Navbar.Brand className='header-nav'>
					Tabletop Auction House
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ml-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/additem'>Add Item</Nav.Link>
						<Nav.Link href='/contact'>Contact</Nav.Link>
						<Nav.Link href='/login'>Log In</Nav.Link>
						<Nav.Link href='/signup'>Sign Up</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigation;
