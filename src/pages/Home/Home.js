import React, { Component } from 'react';
import SkillList from './SkillList';
import { Grid, Row, Col } from 'react-bootstrap';
import './Skills.css'

const homeInfo = {
  info: 'this is stuff here',
  imageUrl: 'https://cdn0.iconfinder.com/data/icons/simple-outlines-1/100/Globe-512.png'
}

class Home extends Component {
 render() {
    return (
      <Grid fluid className="no-gutters-right">
        <Row className="parent">
          <Col className="skill-type" sm={10} md={6}>more stuff</Col>
          <Col fluid className="skill-tray" sm={10} md={10}>< SkillList />
          </Col>
        </Row>
      </Grid>
    );
 }
}
      // <div className="parent">
      //   <div className="left">
      //   </div>
      //   <div className="right">
      //     < SkillList />
      //     <p>stuff</p>
      //     <p>stuff</p>
      //     <p>stuff</p>
      //     <p>stuff</p>
      //     <p>stuff</p>
      //     <p>stuff</p>
      //     <p>stuff</p>
      //     <p>stuff</p>
      //   </div>
      // </div>

export default Home;

// <Col xs={12} md={8} />