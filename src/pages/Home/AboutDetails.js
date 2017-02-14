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
        < SkillList />
      </div>
    )
  }
}

export default AboutDetails;