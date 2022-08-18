import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import firebase from './firebase.js'
import { getDatabase, ref, set } from "firebase/database";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
     
    </div>
    );
  }
}
export default Home;
