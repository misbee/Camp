import React, { Component } from 'react';
import Scroll from 'react-scroll-to-element';
import { Route,Switch,Link } from 'react-router-dom'
import P1 from './P1'
import Place from './Place';



class PP extends Component{
    render(){
        return(
            <main>
                <Switch>
                    <Route path='./p1' component={P1}/>
                </Switch>
            </main>
        );
    }
}

export default PP;