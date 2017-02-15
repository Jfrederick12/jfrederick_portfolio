import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import PageNav from '../../PageNav';
import './Skills.css';

const containerStyle = {
  backgroundColor: '#fae596',
  height: 800
}

const AboutTray = () => (
  <StickyContainer style={containerStyle}>
    <Sticky bottomOffset={1} topOffset={-40} stickyStyle={{ marginTop: 40 }}>
    <div className="about-tray-container">
      <span id="image-header"><img src="https://github.com/Jfrederick12/React_Web_Portfolio/blob/portfolio-overhaul/public/images/about.png?raw=true" alt="about" width="60%"/></span>
    <h4>Web Developer, Graphic Designer and Chicago transplant living in Austin, TX</h4>
    < PageNav />
    </div>
    </Sticky>
  </StickyContainer>
)

export default AboutTray;