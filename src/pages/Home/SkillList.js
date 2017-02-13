import React, { Component } from 'react';
import SkillBar from './SkillBar';
import './Skills.css';

const skills = [
  {
    name: 'HTML',
    proficiency: 'Skill-100'
  },
  {
    name: 'CSS',
    proficiency: 'Skill-75'
  },
  {
    name: 'JavaScript',
    proficiency: 'Skill-100'
  },
  {
    name: 'Ruby',
    proficiency: 'Skill-100'
  }
]

class SkillsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
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