import React, { Component } from 'react';

class Banner extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    return (
      <div className="banner shadow">
        <p className="shadow" id="title">JUSTIN FREDERICK</p>
      </div>
    );
  }
}

export default Banner;

       // <p id="title"className="shadow">JUSTIN FREDERICK</p>
       //  <p id="subtitle">Web Developer, Graphic Designer & Illustrator</p>