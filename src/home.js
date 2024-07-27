import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import firebase from './firebase.js'
import { getDatabase, ref, set } from "firebase/database";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import background from "./bg.jpeg";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      birthdate: new Date(),
      phone:'',
      email:'',
      street:'',
      city:'',
      zip:'',
      jain_center:'',
      diet:'',
      special_needs:'',
      error_message:'',
      error_color: 'green'
    };

    

  }

  render() {
    return (
      <div className="App">
        <header className="App-header"  style={{ backgroundImage: `url(${background})`, backgroundSize:'cover' }}>
        <div className="centered">
          <Link to="/newpost">Create New Post</Link>
          <br></br> <br></br> <br></br>
          <Link to="/allposts">All Posts</Link>
        </div>
          
        </header>

    </div>
    );
  }
}
export default Home;
