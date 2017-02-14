import React, { Component } from 'react';

import Banner from './components/Banner';
import Home from './pages/Home/Home';
import Navigation from './Navigation';
import Portfolio from './pages/Portfolio/Portfolio'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation />
        <Banner />
          <main>
            {this.props.children}
          </main>
      </div>
    );
  }
}

export default App;
