import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";



export default class Navbar extends Component {
  render(){
  return (
    <div>
    <nav className="navBar navbar navbar-toggleable-md navbar-light bg-faded">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/"><span className="fa fa-car"> </span> HOME</Link>
        <ul className=" ulContent navbar-nav mr-auto mt-2 mt-lg-0">

          <li className="link">
             <Link className="txtLink " to="/profile"><span className="fa fa-user faSize"> </span> </Link>
          </li>

          <li className="link">
            <Link className="txtLink" to="/settings"> <span className="fa fa-cog faSize"> </span>  </Link>
          </li>

          <li className="link">
            <Link className="txtLink" to="/logout"> <span className="fa fa-sign-out faSize"> </span>  </Link>
          </li>
        </ul>

      </div>
    </nav>

    </div>
  )
  }
}
