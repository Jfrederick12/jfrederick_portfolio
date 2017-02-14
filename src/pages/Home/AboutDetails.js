import React, { Component } from 'react';
import './Skills.css';
import SkillList from './SkillList';

class AboutDetails extends Component {
  render() {
    return(
      <div className="about-container">
        <h4>I am a Web Developer and Graphic Designer, Chicago transplant living in Austin, TX</h4>
        <span>Coming from a place of design and illustration, I approach coding with a creative lens, always thinking about how I can lend my skills towards meaningful work. I’m incredibly determined and thoughtful about the projects I involve myself with and my intention is to create something that others will value. If i’ve learned anything by Roxette’s 1995 single, “Don’t Bore Us, Get to the Chorus!”, less is more.</span>
        < SkillList />
        <span id="thing">Coming from a place of design and illustration, I approach coding with a creative lens, always thinking about how I can lend my skills towards meaningful work. I’m incredibly determined and thoughtful about the projects I involve myself with and my intention is to create something that others will value. If i’ve learned anything by Roxette’s 1995 single, “Don’t Bore Us, Get to the Chorus!”, less is more.</span>
      </div>
    )
  }
}

export default AboutDetails;