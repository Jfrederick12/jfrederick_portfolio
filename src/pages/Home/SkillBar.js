import React, { Component } from 'react';
import './Skills.css';

const SkillBar = (props) => (
  <div>
    <ul>
      <li>
        <div id={props.proficiency}>
          <p className="skill-area">{props.name}</p>
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