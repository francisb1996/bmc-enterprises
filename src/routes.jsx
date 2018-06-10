import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './HomePage';
import About from './components/About';
import Sample from './components/Sample';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={About}/>
      <Route path="/sample" component={Sample}/>
    </div>
  </Router>
);

export default Routes;
