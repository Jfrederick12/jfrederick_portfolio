import React from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import NotFound from './pages/NotFound/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;