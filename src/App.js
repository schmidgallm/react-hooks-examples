import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import State from './components/State';
import Effect from './components/Effect';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/state' component={State} />
            <Route exact path='/effect' component={Effect} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
