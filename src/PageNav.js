import React from 'react';
import './App.css';
import Scrollchor from 'react-scrollchor';

const PageNav = () => (
  <div className="page-nav">
    <span><Scrollchor to="#about" animate={{offset: 0, duration: 600}}>about</Scrollchor></span>
    <span><Scrollchor to="#work" animate={{offset: 0, duration: 600}}>work</Scrollchor></span>
    <span><Scrollchor to="#contact" animate={{offset: 0, duration: 600}}>contact</Scrollchor></span>
  </div>
)

export default PageNav;