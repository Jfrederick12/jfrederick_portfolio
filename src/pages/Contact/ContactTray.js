import React from 'react';
import SocialLinkTray from './SocialLinkTray';
import PageNav from '../../PageNav';
import './Contact.css';


const ContactTray = () => (
      <div className="contact-tray-container">
        <span id="image-header"><img src="https://github.com/Jfrederick12/React_Web_Portfolio/blob/buildout-1/public/images/thanks.png?raw=true" alt="thanks" width="60%"/></span>
        < PageNav />
        < SocialLinkTray />
        <div className="social-container">
        </div>
      </div>
)

export default ContactTray;