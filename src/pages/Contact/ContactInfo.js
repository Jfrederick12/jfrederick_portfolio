import React, { Component } from 'react';
import SocialLinks from './SocialLinks';
import './Contact.css';

const socials = [
  { name: 'Behance', link: 'link goes here', img: 'fa fa-behance' },
  { name: 'Dribbble', link: 'link goes here', img: 'fa fa-dribbble' },
  { name: 'Instagram', link: 'link goes here', img: 'fa fa-instagram' },
  { name: 'Github', link: 'link goes here', img: 'fa fa-github' },
  { name: 'LinkedIn', link: 'link goes here', img: 'fa fa-linkedin' }
]

const contactDetails = {
  thanks: "Thanks for visiting, if you have any questions or work inquiries please contact me through my cell or shoot me an email!",
  phone: '630-639-6497',
  email: 'jfrederickdesign@gmail.com'
}

class ContactInfo extends Component {
  render() {
    return(
      <div className="about-container">
        <div className="footer-social-icons">
          {socials.map((social) => (
            <ul>
              < SocialLinks {...social} />
            </ul>
          ))}
        </div>
      </div>
    )
  }
}

export default ContactInfo;