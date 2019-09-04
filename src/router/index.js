
import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Login from "../views/login"
import Home from '../views/home';
class Routes extends Component {
  render() {
    return (
        <BrowserRouter>
        <Switch>
         <Route path="/login" component={ Login}></Route>
         <Route path="/home" component={ Home}></Route>
       </Switch>
        </BrowserRouter>
   
    );
  }
}

export default Routes;