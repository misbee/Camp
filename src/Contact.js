import React, { Component } from 'react';
import './content.css';
import { Route } from 'react-router-dom'
import hr from './pic/hr.png'
import bee from './pic/bee.png'
import mug from './pic/mug.png'
import nat from './pic/nat.png'
import amm from './pic/amm.png'


class Contact extends Component {
    render() {
      return (
      <div>
        <section id="contact">
        <div class="last">
        <div className="container">
          <div>
             <p class="text-center abtext">contact</p>
             <p class="con" >
             Thank you for coming into part of us.
             <p>We will happy to be of sevice to you. If you want to start your trip, please don’t forget “life camping”.</p>
             </p>
             <img className="a" src={hr}/>

             <div class="row">

             <div class="col-2 offset-2">
             <a target="_blank" href="https://www.facebook.com/bee.cheunprapanusorn">
             <img className="picme p1" src={bee}/>
             <p class="rt" >bee</p>
             </a>
             </div>

             <div class="col-2">
             <a target="_blank" href="https://www.facebook.com/Mug.Hippo">
             <img className="picme" src={mug}/>
             <p class="rt">mug</p>
             </a>
             </div>

             <div class="col-2">
             <a target="_blank" href="https://www.facebook.com/ttanctk">
             <img className="picme" src={nat}/>
             <p class="rt">nat</p>
             </a>
             </div>
             <div class="col-2">
             <a target="_blank" href="https://www.facebook.com/oomamm.angng">
             <img className="picme" src={amm}/>
             <p class="rt">amm</p>
             </a>
             </div>
            </div>
        </div>
      </div>
      </div>
      </section>


      </div>
      
        );
    }
}
export default Contact;
