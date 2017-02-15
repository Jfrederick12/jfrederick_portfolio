import React, { Component } from 'react';
import AboutDetails from './AboutDetails';
import AboutTray from './AboutTray';
import { Grid, Row, Col } from 'react-bootstrap';
import './Skills.css'

class About extends Component {
 render() {
    return (
    <div id="about">
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


export default About;
