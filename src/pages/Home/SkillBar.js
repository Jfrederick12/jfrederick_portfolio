import React, { Component } from 'react';
import './Skills.css';

const SkillBar = (props) => (
  <div>
    <ul>
      <li>
        <div id={props.proficiency}>
          <span className="Skill-Area">{props.name}</span>
          <span className="PercentText fadeIn fadeIn-3s fadeIn-Delay-3sfadeIn fadeIn-3s fadeIn-Delay-3s"></span>
        </div>
      </li>
    </ul>
  </div>
)

const { string } = React.PropTypes

SkillBar.propTypes = {
  name: string.isRequired,
  proficiency: string.isRequired
}

export default SkillBar;