import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import PageNav from '../../PageNav';
import './Portfolio.css';

const containerStyle = {
  backgroundColor: '#173e43',
  height: 3600
}

const WorkTray = () => (
  <StickyContainer style={containerStyle}>
    <Sticky bottomOffset={1} topOffset={-40} stickyStyle={{ marginTop: 40 }}>
    <div className="work-tray-container">
      <span id="image-header"><img src="https://github.com/Jfrederick12/React_Web_Portfolio/blob/buildout-1/public/images/work.png?raw=true" alt="work" width="60%"/></span>
      <h4>Recent Projects</h4>
      < PageNav />
    </div>
    </Sticky>
  </StickyContainer>
)

export default WorkTray;