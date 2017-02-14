import React, { Component } from 'react';
import SkillBar from './SkillBar';
import './Skills.css';
import skills from './Skills';

class SkillsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <h4>Qualifications</h4>
      {skills.map((skill) => (
        <div>
          <SkillBar {...skill} />
        </div>
      ))}
    </div>
    )
  }
}

export default SkillsList;