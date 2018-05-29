import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavbarBrand} from 'react-bootstrap';
import './Nav.css';
import './content.css';
import './About.js';
import { Rout, Link } from 'react-router-dom'
import Group from './pic/Group.png'
import Scroll from 'react-scroll-to-element';


class Headers extends Component {
  
    render() {
      return (
      <div className="home">

      <div class="navbar"> 
        <nav className="my-app navone">
        <div className="navbar-header fixed-top text-center" role="navigation" aria-label="main navigation">
            <div className="container">
              <div className="container navbar-item d">

                <a className="pad2" href="#about" >about me</a>
                <a className="pad" href="#place">place</a>

                         <a className="pad1" href=""> <img src={Group} alt="LOGO" width="18%" height="18%" /></a>
                
                <a className="pad1" href="#shop" >shop</a>
                <a className="pad" href="#contact" >contact</a>
            </div>
          </div>
        </div>
      </nav>
      </div>
      

      
      <div class="container">
      <p class="fonthome">JOURNEY</p>
      <p class="ff">we help you to find amazing places to camping</p>
      </div>
      </div>
      
        );
    }
}
export default Headers;
