import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './Skills.css';

const containerStyle = {
  backgroundColor: '#c0dfd9',
  height: 1025
}

const AboutTray = () => (
  <div>

        <h1>ABOUT</h1>

        <h4>I am a Web Developer and Graphic Designer, Chicago transplant living in Austin, TX</h4>
        <span>Coming from a place of design and illustration, I approach coding with a creative lens, always thinking about how I can lend my skills towards meaningful work. I’m incredibly determined and thoughtful about the projects I involve myself with and my intention is to create something that others will value. If i’ve learned anything by Roxette’s 1995 single, “Don’t Bore Us, Get to the Chorus!”, less is more.</span>

  </div>
)

export default AboutTray;
    // <StickyContainer style={containerStyle}>
    //   <Sticky topOffset={-40} stickyStyle={{ marginTop: 40 }}>
    //     <h1>ABOUT</h1>
    //   </Sticky>
    // </StickyContainer>

    //   <div style={{height: 50}}></div>
    // <StickyContainer style={containerStyle}>
    //   <Sticky topOffset={-40} stickyStyle={{ marginTop: 40 }}>
    //     <h1>ABOUT</h1>
    //   </Sticky>
    //   <div style={{height: "300px"}}></div>
    // </StickyContainer>