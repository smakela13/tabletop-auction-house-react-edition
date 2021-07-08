import React from 'react';
import './App.css';
import Navigation from './components/Navbar';

import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<div className='supDiv'>
				<Navigation />
				
				
			</div>
		</Router>
	);
}

export default App;
