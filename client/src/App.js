import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import Store from './pages/store';
import Product from './components/Product';
import AddItem from './pages/addItem';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="impDiv">
          {/* <Header /> */}
            <Navigation />
            <Route exact path="/" component={Product}>
              <Store />
            </Route>
            <Route exact path="/addItem">
              <AddItem />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </div>
          {/* <Footer /> */}
      </Router>
    </ApolloProvider>
  );
}



// function App() {
//   return (
//     <Router>
//       <>
//         <Navigation />
//         <Switch>
//           <Route exact path='/' component={Store} />
//           {/* <Route exact path='/Product' component={Store} /> */}
//           <Route path='/login' component={Login} />
//           <Route path='/signup' component={Signup} />
//           <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
//         </Switch>
//       </>
//     </Router>
//   );

// }

// export default App;
