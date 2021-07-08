import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Store from './pages/store';
import Product from './components/Product';
import Navigation from './components/Navbar';

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Store} />
          {/* <Route exact path='/Product' component={Store} /> */}
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );

}

export default App;
