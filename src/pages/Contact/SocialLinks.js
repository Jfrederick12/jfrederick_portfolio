import React, { Component } from 'react';
import './Contact.css';

const SocialLinks = (props) => (
  <li>
    <a href={props.link} className="social-icon"> <i className={props.img}></i></a>
  </li>
)

const { string } = React.PropTypes

SocialLinks.propTypes = {
  name: string.isRequired,
  link: string.isRequired,
  img: string.isRequired
}


export default SocialLinks;