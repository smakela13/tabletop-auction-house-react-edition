import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
	return (
		<>
			<Navbar
				collapseOnSelect
				sticky='top'
				expand='sm'
				variant='dark'
				className='header mb-3'
				style={{ backgroundColor: '#373737' }}>
				<Navbar.Brand
					className='header-nav px-3'
					style={{ fontSize: '43px', fontFamily: 'Roboto' }}>
					Tabletop Auction House
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav
						className='ms-auto px-2'
						style={{ fontSize: '20px', fontFamily: 'Roboto' }}>
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
