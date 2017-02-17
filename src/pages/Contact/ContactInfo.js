import React, { Component } from 'react';
import './Contact.css';

const contactDetails = {
  thanks: "Thanks for visiting, if you have any questions or work inquiries please contact my cell or shoot me an email!",
  phone: '630-639-6497',
  email: 'jfrederickdesign@gmail.com'
}

class ContactInfo extends Component {
  render() {
    return(
      <div className="contact-container">
        <p>{contactDetails.thanks}</p>
        <p id="phone">{contactDetails.phone}</p>
        <p id="email">{contactDetails.email}</p>
      </div>
    )
  }
}

export default ContactInfo;