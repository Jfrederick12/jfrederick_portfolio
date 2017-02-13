import React, { Component } from 'react';
import AboutDetails from './AboutDetails';
import AboutTray from './AboutTray';
import { Grid, Row, Col } from 'react-bootstrap';
import './Skills.css'

const homeInfo = {
  info: 'this is stuff here',
  imageUrl: 'https://cdn0.iconfinder.com/data/icons/simple-outlines-1/100/Globe-512.png'
}

class Home extends Component {
 render() {
    return (
      <div>
        <Grid fluid className="no-gutters-right">
          <Row className="parent">
            <Col className="skill-type" sm={10} md={6}>
              < AboutTray />
            </Col>
            <Col fluid className="skill-tray" sm={10} md={6}>< AboutDetails />
            </Col>
          </Row>
        </Grid>
      </div>
    );
 }
}


export default Home;

// <Col xs={12} md={8} />