import React, { Component } from 'react';
import './content.css';
import { Route, Link } from 'react-router-dom'
import './Camera';
import ss from './pic/ss.png'

import s1 from './pic/s1.png'
import s2 from './pic/s2.png'
import s3 from './pic/s3.png'
import s4 from './pic/s4.png'

import c1 from './pic/c1.png'
import c2 from './pic/c2.png'
import c3 from './pic/c3.png'
import c4 from './pic/c4.png'
import c5 from './pic/c5.png'
import c6 from './pic/c6.png'
import c7 from './pic/c7.png'
import c8 from './pic/c8.png'
import c9 from './pic/c9.png'
import c10 from './pic/c10.png'
import c11 from './pic/c11.png'
import c12 from './pic/c12.png'

class Shop extends Component {
    render() {
      return (
      <div>
      <section id="shop">
        <div>
        <div class="col-3">
        <img className="line" src={ss}/>
        </div>

    <div class="container">
    <div class="row">
      <div class="offset-2">
            <div>
                <a class="container" target="_blank" href="https://www.binoculars.com/">
                <img class="shim" src={s1}/>
                <p class="textic" >binocular</p>
                </a>
            </div>
     </div>
     <div class="offset-1">
            <div>
            <a class="container" target="_blank" href="https://www.backcountrygear.com/tent-sale.html">
                <img class="shim" src={s2}/>
                <p class="textic offset-3" >tent</p>
            </a>
            </div>
     </div>
     <div class="offset-1">
            <div>
            <a class="container" target="_blank" href="https://www.backpacks.com/backpacks-on-sale">
                <img class="shim" src={s3} />
                <p class="textic1" >backpack</p>
            </a>
            </div>
     </div>
     <div class="offset-1">
            <div>
            <a class="container" target="_blank" href="https://www.cabelas.com/catalog/browse/camp-cooking-dining/_/N-1116226/Ns-CATEGORY_SEQ_581015880">
                <img class="shim" src={s4}/>
                <p class="textic" >equipment</p>
            </a>
            </div>
     </div>
     </div>


    <div class="container">
        <div class="row">
        <div class="col-2 offset-1">
        <img class="cc" src={c1}/>
        </div>
        <div class="col-2 offset-1">
        <img class="cc" src={c2}/>
        </div>
        <div class="col-2 offset-1">
        <img class="cc" src={c3}/>
        </div>
        </div> 

        <div class="row">
        <div class="col-2 offset-1">
        <img class="cc" src={c4}/>
        </div>
        <div class="col-2 offset-1">
        <img class="cc" src={c5}/>
        </div>
        <div class="col-2 offset-1">
        <img class="cc" src={c6}/>
        </div>
        </div>

        <div class="row">
        <div class="col-2 offset-1">
        <img class="cc" src={c7}/>
        </div>
        <div class="col-2 offset-1">
        <img class="cc" src={c8}/>
        </div>
        <div class="col-2 offset-1">
        <img class="cc" src={c9}/>
        </div>
        </div>

        <div class="row">
        <div class="col-2 offset-1">
        <img class="cc" src={c10}/>
        </div>
        <div class="col-2 offset-1">
        <img class="cc" src={c11}/>
        </div>
        <div class="col-2 offset-1">
        <img class="cc" src={c12}/>
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
export default Shop;
