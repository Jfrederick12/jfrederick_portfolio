import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import WorkTray from './WorkTray.js';
import ImageList from './ImageList';
import './Portfolio.css';

class Portfolio extends Component {
 render() {
    return (
    <div id="work">
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