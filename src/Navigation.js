import React, { Component } from 'react';
import { Link } from 'react-router';
import { MenuItem, Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
 render() {
   return (
    <div className="nav-bar">
      <Navbar className="navigation-style shadow" fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Jfrederick</a>
          </Navbar.Brand>
        </Navbar.Header>
        <nav className="custom-nav">
          <Link to="/home">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
        </nav>
      </Navbar>
    </div>
   );
 }
}

export default Navigation;
