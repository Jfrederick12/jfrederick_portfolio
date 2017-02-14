import React, { Component } from 'react';
import './Portfolio.css';
import { Grid, Row, Col } from 'react-bootstrap';
import ImageList from './ImageList';

class Portfolio extends Component {
 render() {
    return (
    <div>
      <Grid fluid className="no-gutters-right">
        <Row className="parent">
        <Col className="skill-type">
        </Col>
        <Col className="skill-tray">
          <ImageList />
        </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default Portfolio;