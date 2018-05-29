import React, { Component } from 'react';
import './Nav.css';
import { Route } from 'react-router-dom'
import about from './pic/about.png'

class About extends Component {
    render() {
      return (
      
      <div>
        <section id="about">
        <div className="container">
          <div>
             <p class="text-center abtext">about me</p>
             <div class="row">
             <div class="col-12 offset-1">
             <img class="picabout" src={about}/>
             </div>

             <p class="abdetail" >
             Welcome to oue website. If you love adventure activities and living with nature,then you fall in love with camping. 
             Our website can help you are easy to find the place for camping. We suggest the famous place around the world and helping 
             the people who don’t have anytime to buy camping gear. Because we aren't only suggestion the place for camping but also sale the camping gear.
             </p>
    
             </div>
        </div>
      </div>
      </section>
      </div>
      
        );
    }
}
export default About;
