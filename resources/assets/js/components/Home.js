import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
var Spinner = require('react-spinkit');

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidMount(){
    var self = this;

    if (!firebase.apps.length) {
      var config = {
         apiKey: "AIzaSyBv6WR5DjXJ83PTCYXap1XJ81SEhcQWMcM",
         databaseURL: "https://unityfirebase-f5eeb.firebaseio.com/"
       };
       firebase.initializeApp(config);
    }

     firebase.database().ref('Users').once('value').then(function(snapshot) {
       self.setState({
         users:snapshot.val()
       }, function() {
         console.log(self.state.users)
       })
     });
  }

  componentWillMount(){
  }

  render(){
    var obj=[];
    for (var key in this.state.users){
        if (this.state.users.hasOwnProperty(key)) {
             console.log( this.state.users[key].name );
             obj.push( <div key={key} className="card card-1" ><h1> {this.state.users[key].name} </h1><h5 className="text-center description">{ this.state.users[key].surname}</h5> </div>);
        }
    }

    return(
      <div className="container ">
        <div className="card card-1">
          <div className="titles">
            <div className="row"> <span className="fa fa-car car tit"> </span> <p>TEXT </p> </div>
            <div className="row"> <span className="fa fa-car car tit"> </span> <p>TEXT </p> </div>
            <div className="row"> <span className="fa fa-car car tit"> </span> <p>TEXT </p> </div>
          </div>
        </div>
      </div>
    )
  }
}
