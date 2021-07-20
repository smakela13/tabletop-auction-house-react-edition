import React, {useEffect} from 'react';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Product from './pages/store';
import Shopkeeper from './components/Shopkeeper';
import AddItem from './pages/addItem';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './pages/profile';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import { keepTheme } from './components/themes';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('id_token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default function App() {
	useEffect(() => {
		keepTheme();
	})
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className='impDiv'>
					{/* <Header /> */}
					<Navigation />
					<Route exact path='/profile'>
						<Profile />
					</Route>
					<Route exact path='/'>
						<Product />
					</Route>
					<Route exact path='/addItem'>
						<AddItem />
					</Route>
					<Route exact path='/shopkeeper'>
						<Shopkeeper />
					</Route>
					<Route exact path='/contact'>
						<Contact />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
					<Route exact path='/:productId'>
						<SingleProduct />
					</Route>
					<Footer />
				</div>
			</Router>
		</ApolloProvider>
	);
}
