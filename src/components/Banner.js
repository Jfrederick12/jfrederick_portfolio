import React, { Component } from 'react';

class Banner extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    return (
      <div className="banner shadow">
        <h1 className="shadow">JUSTIN FREDERICK</h1>
        <p>Web Developer, Graphic Designer & Illustrator</p>
      </div>
    );
  }
}

export default Banner;