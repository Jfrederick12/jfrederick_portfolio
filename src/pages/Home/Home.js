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

const homeInfo = {
  info: 'this is stuff here',
  imageUrl: 'https://cdn0.iconfinder.com/data/icons/simple-outlines-1/100/Globe-512.png'
}

class Home extends Component {
 render() {
    return (
      <div>
        <StickyContainer style={{zIndex: 2}}>
          <Sticky>
          <Grid fluid className="no-gutters-right">
            <Row className="parent">
              <Col className="skill-type" sm={10} md={6}>
                < AboutTray />
              </Col>
              <Col className="skill-tray" sm={10} md={6}>< AboutDetails />
              </Col>
            </Row>
          </Grid>
          </Sticky>
        </StickyContainer >
      </div>
    );
 }
}


export default Home;

// <Col xs={12} md={8} />