import React, { Component } from 'react';
import './content.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import Popup from "reactjs-popup";
import $ from "jquery";

import pp from './pic/pp.png'
import pl1 from './pic/pl1.png'
import pl2 from './pic/pl2.png'
import pl3 from './pic/pl3.png'
import pl4 from './pic/pl4.png'
import pl5 from './pic/pl5.png'

import fa from './pic/fa.png'




class Place extends Component {
    render() {
      return (
      
      <div>
        <section id="place">
        
        <div className="place">
        <div class="col-3">
        <img className="line" src={pp}/>
        </div>

         <div class="row">


            <Popup
              trigger={<a class="col-2 z offset-1">
              <img className="pl" src={pl1}/>
              <div class="overlay">
                  <div class="textani">CLICK</div>
              </div>
              </a>}
              modal
              closeOnDocumentClick>
              <p class="modal1">
              <p id="fra" class="container-fluid flex-top"></p>
              </p>
            </Popup>


            <Popup
              trigger={<a class="col-2 z">
              <img className="pl" src={pl2}/>
              <div class="overlay">
                  <div class="textani">CLICK</div>
              </div>
              </a>}
              modal
              closeOnDocumentClick>
              <p class="modal1">
              <p id="spa" class="container-fluid"></p>
              </p>
            </Popup>
          

               <Popup
              trigger={<a class="col-2 z">
              <img className="pl" src={pl3}/>
              <div class="overlay">
                  <div class="textani">CLICK</div>
              </div>
              </a>}
              modal
              closeOnDocumentClick>
              <p class="modal1">
              <p id="ita" class="container-fluid"></p>
              </p>
            </Popup>
          
            
            <Popup
              trigger={<a class="col-2 z">
              <img className="pl" src={pl4}/>
              <div class="overlay">
                  <div class="textani">CLICK</div>
              </div>
              </a>}
              modal
              closeOnDocumentClick>
              <p class="modal1">
              <p id="nor" class="container-fluid"></p>
              </p>
            </Popup>
          


               <Popup
              trigger={<a class="col-2 z">
              <img className="pl" src={pl5}/>
              <div class="overlay">
                  <div class="textani">CLICK</div>
              </div>
              </a>}
              modal
              closeOnDocumentClick>
              <p class="modal1">
              <p id="ger" class="container-fluid"></p>
              </p>
            </Popup>
          

        </div>  
      </div>

      </section>
      </div>
      
        );
    }
}
export default Place;
