import React, { Component } from 'react';
import SocialLinks from './SocialLinks';
import './Contact.css';

const socials = [
  { name: 'Behance', link: 'https://www.behance.net/JFrederick', img: 'fa fa-behance fa-2x' },
  { name: 'Dribbble', link: 'https://dribbble.com/jfrederickdesign', img: 'fa fa-dribbble fa-2x' },
  { name: 'Instagram', link: 'https://www.instagram.com/ferdgram/', img: 'fa fa-instagram fa-2x' },
  { name: 'Github', link: 'https://github.com/Jfrederick12', img: 'fa fa-github fa-2x' },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/jfrederick12', img: 'fa fa-linkedin fa-2x' }
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