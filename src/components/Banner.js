import React, { Component } from 'react';

class Banner extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    return (
      <div className="banner shadow">
        <p id="title"className="shadow">JUSTIN FREDERICK</p>
        <p id="subtitle">Web Developer, Graphic Designer & Illustrator</p>
      </div>
    );
  }
}

export default Banner;