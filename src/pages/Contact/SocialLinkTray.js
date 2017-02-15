import React, { Component } from 'react';
import SocialLinks from './SocialLinks';
import './Contact.css';

const socials = [
  { name: 'Behance', link: 'link goes here', img: 'fa fa-behance fa-2x' },
  { name: 'Dribbble', link: 'link goes here', img: 'fa fa-dribbble fa-2x' },
  { name: 'Instagram', link: 'link goes here', img: 'fa fa-instagram fa-2x' },
  { name: 'Github', link: 'link goes here', img: 'fa fa-github fa-2x' },
  { name: 'LinkedIn', link: 'link goes here', img: 'fa fa-linkedin fa-2x' }
]

class SocialLinkTray extends Component {
  render() {
    return(
      <div className="footer-social-icons">
        {socials.map((social) => (
          <ul key={social.name} className="social-icons">
            < SocialLinks {...social} />
          </ul>
        ))}
      </div>
    )
  }
}

export default SocialLinkTray;