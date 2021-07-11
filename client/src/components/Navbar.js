import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Auth from '../utils/auth';

const Navigation = () => {
	return (
		<>
			<Image src='TabletopAuctionHouseNew.jpg' style={{objectFit: 'cover'}} fluid />
			<Navbar
				collapseOnSelect
				sticky='top'
				expand='sm'
				variant='dark'
				className='header mb-3'
				style={{ backgroundColor: '#373737' }}>
				<Navbar.Brand
					className='header-nav px-3'
					style={{ fontSize: '35px', fontFamily: 'Roboto' }}>
					Welcome
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav
						className='ms-auto px-2'
						style={{ fontSize: '20px', fontFamily: 'Roboto' }}>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/addItem'>Add Item</Nav.Link>
						<Nav.Link href='/contact'>Contact</Nav.Link>
						<Nav.Link href='/login'>Log In</Nav.Link>
						<Nav.Link href='/signup'>Sign Up</Nav.Link>
						<Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigation;
