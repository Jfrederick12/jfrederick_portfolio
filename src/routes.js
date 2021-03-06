import React from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import About from './pages/Home/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import NotFound from './pages/NotFound/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;