import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ContactTray from './ContactTray';
import ContactInfo from './ContactInfo';
import './Contact.css';

class Contact extends Component {
 render() {
   return (
    <div id="contact">
      <Grid fluid className="no-gutters-right">
        <Row className="contact-row-container">
          <Col className="contact-tray-container" sm={6} md={6}>
            < ContactTray />
          </Col>
          <Col className="contact-info" sm={6} md={6}>
            < ContactInfo />
          </Col>
        </Row>
      </Grid>
    </div>
   );
 }
}
export default Contact;