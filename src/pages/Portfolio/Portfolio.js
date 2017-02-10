import React, { Component } from 'react';
import './Portfolio.css';
import ImageList from './ImageList';

class Portfolio extends Component {
 render() {
    return (
      <div className="portfolio">
        <ImageList />
      </div>
    );
  }
}

export default Portfolio;