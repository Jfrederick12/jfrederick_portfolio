import React, { Component } from 'react';
import './Skills.css';
import SkillList from './SkillList';

const containerStyle = {
  backgroundColor: '#e9ece5',
}

class AboutDetails extends Component {

  render() {
    return(
      <div className="about-container" style={containerStyle}>
        <span>
          Coming from a place of design and illustration, I approach coding through a creative lens, always thinking about how I can lend my skills towards meaningful work. I’m incredibly determined and thoughtful about the projects I involve myself with and my intention is to create something that others will value. If i’ve learned anything from Roxette’s 1995 single, “Don’t Bore Us, Get to the Chorus!”, less is more.
        </span>
        < SkillList />
      </div>
    )
  }
}

export default AboutDetails;