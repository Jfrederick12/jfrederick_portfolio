import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './Portfolio.css';

const containerStyle = {
  backgroundColor: '#fae596',
  height: '1050'
}

const WorkTray = () => (
  <StickyContainer style={containerStyle}>
    <Sticky bottomOffset={1} topOffset={-40} stickyStyle={{ marginTop: 40 }}>
    <div className="work-tray-container">
      <span id="image-header"><img src="https://github.com/Jfrederick12/React_Web_Portfolio/blob/portfolio-overhaul/public/images/about.png?raw=true" width="60%"/></span>
      <h4>Web Developer, Graphic Designer and Chicago transplant living in Austin, TX</h4>
    </div>
    </Sticky>
  </StickyContainer>
)

export default WorkTray;