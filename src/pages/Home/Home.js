import React, { Component } from 'react';
import AboutDetails from './AboutDetails';
import AboutTray from './AboutTray';
import Portfolio from '../Portfolio/Portfolio';
import { StickyContainer, Sticky } from 'react-sticky';
import { Grid, Row, Col } from 'react-bootstrap';
import './Skills.css'

// var Sticky = require('react-stickynode');
// <Sticky top='#header' bottomBoundary='#content'>
//     <YourComponent/>
// </Sticky>

const containerStyle = {
  backgroundColor: '#dddfd4',
  height: '910px'
}

class Home extends Component {
 render() {
    return (
    <div>
      <Grid fluid className="no-gutters-right">
        <Row className="row-container">
            <Col className="skill-type" sm={6} md={6}>
              < AboutTray />
            </Col>
          <Col className="skill-tray" sm={6} md={6}>
            <AboutDetails />
          </Col>
        </Row>
      </Grid>
    </div>
    );
 }
}


export default Home;
