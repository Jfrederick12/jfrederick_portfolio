import React, { Component } from 'react';

class Banner extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    return (
      <div className="banner shadow">
      <ul>
        <li>
          <p className="shadow" id="title">JUSTIN FREDERICK</p>
        </li>
        <li>
          <p className="subtitle">Web Developer, Graphic Designer & Illustrator </p>
        </li>
      </ul>
      </div>
    );
  }
}

export default Banner;

       // <p id="title"className="shadow">JUSTIN FREDERICK</p>
       //  <p id="subtitle">Web Developer, Graphic Designer & Illustrator</p>