import React from 'react';
import { Navbar, Nav, Image, Container } from 'react-bootstrap';

const Navigation = () => {
	return (
		<>
			<Container style={{ width: '100%',  whiteSpace: 'nowrap'}}>
				<Image
					src='TabletopAuctionHouseNew.jpg'
					style={{ objectFit: 'cover', margin: '0' }}
					fluid
				/>
				<Navbar
					collapseOnSelect
					sticky='top'
					expand='sm'
					variant='dark'
					className='header mb-3'
					style={{ backgroundColor: '#373737', margin: '0' }}>
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
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	);
};

export default Navigation;
