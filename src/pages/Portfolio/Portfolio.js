import React, { Component } from 'react';
import './Portfolio.css';
import WorkTray from './WorkTray.js'
import { Grid, Row, Col } from 'react-bootstrap';
import ImageList from './ImageList';

class Portfolio extends Component {
 render() {
    return (
    <div>
      <Grid fluid className="no-gutters-right">
        <Row className="portfolio-row-container">
            <Col className="work-tray" sm={6} md={6}>
              < WorkTray />
            </Col>
          <Col className="image-tray" sm={6} md={6}>
            <ImageList />
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default Portfolio;