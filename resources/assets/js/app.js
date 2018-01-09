import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./bootstrap');
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Settings from './components/Settings'
import Logout from './components/Logout'



export default class Nav extends Component{
  render(){
    return(
      <div>
      <BrowserRouter>
              <div>
                <Navbar/>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/settings" component={Settings} />
                <Route path="/logout" component={Logout} />
              </div>
      </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(<Nav/>,document.getElementById('example'));
