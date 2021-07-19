import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Auth from '../utils/auth';
import '../App.css';

const Navigation = () => {
	const loggedStatus = Auth.loggedIn();
	
	return (
		<>
			<Image
				src='TabletopAuctionHouseNew.jpg'
				style={{objectFit: 'cover', width: '2548px', height: '250px'}}
				alt='Tabletop Auction House'
				fluid
			/>
			<Navbar
				collapseOnSelect
				sticky='top'
				expand='sm'
				variant='dark'
				className='mb-3'
				style={{ backgroundColor: '#373737' }}>
				<Navbar.Brand
					className='header-nav px-3'
					style={{ fontSize: '35px', fontFamily: 'Fjalla One, sans-serif', cursor: 'pointer' }}>
					Welcome{loggedStatus && <span onClick={() => document.location.replace('/profile')}>,	{Auth.getProfile().data.username}
					</span>}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav
						className='ms-auto px-3'
						style={{
							fontSize: '24px',
							fontFamily: 'Fjalla One'
						}}>
						<Nav.Link style={{color: 'white'}} href='/'>Home</Nav.Link>
						<Nav.Link style={{color: 'white'}} href='/addItem'>Add Item</Nav.Link>
						<Nav.Link style={{color: 'white'}} href='/shopkeeper'>Shopkeeper</Nav.Link>
						<Nav.Link style={{color: 'white'}}href='/contact'>Contact</Nav.Link>
						{loggedStatus && <Nav.Link style={{color: 'white'}} onClick={Auth.logout}>Logout</Nav.Link>}
						{!loggedStatus && <Nav.Link style={{color: 'white'}} href='/signup'>Sign Up</Nav.Link>}
						{!loggedStatus && <Nav.Link style={{color: 'white'}} href='/login'>Log In</Nav.Link>}
						<a className='skip-link' href='#main' hidden>Skip to main content</a>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
};

export default Navigation;