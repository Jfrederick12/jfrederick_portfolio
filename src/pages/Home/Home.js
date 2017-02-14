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
  backgroundColor: '#c0dfd9',
  height: '100vh'
}

class Home extends Component {
 render() {
    return (

      <Grid fluid className="no-gutters-right">
        <Row>
          <StickyContainer style={containerStyle}>
            <Sticky topOffset={-40} stickyStyle={{ marginTop: 40 }}>
            <Col className="skill-type" sm={6} md={6}>
              < AboutTray />
            </Col>
            </Sticky>
          </StickyContainer>
          <Col className="skill-tray" sm={6} md={6}>
            <AboutDetails />
          </Col>
        </Row>
      </Grid>

    );
 }
}


export default Home;
