import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';

class Banner extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  mouseOut = () => (
    this.setState({
      close: this.state.close
    })
  )

  render() {
    return (
      <div className="banner shadow">

          <h1 className="shadow" onMouseOver={ () => this.setState({ open: !this.state.open })} onMouseOut={this.mouseOut}>
          JUSTIN FREDERICK
          </h1>

        <Collapse in={this.state.open}>
          <p>Web Developer, Graphic Designer & Illustrator</p>
        </Collapse>
      </div>
    );
  }
}

export default Banner;