import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import  Headers  from './Headers'
import  About  from './About'
import  Place  from './Place'
import  Shop  from './Shop'
import  Contact  from './Contact'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="background">
       
      <div><Headers/></div>
      <div><About/></div>
      <div><Place/></div>
      <div><Shop/></div>
      <div><Contact/></div>

      </div>
      
    )
  }
}

export default App