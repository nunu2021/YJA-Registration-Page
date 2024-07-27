import logo from './logo.svg';
import './index.css';
import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import firebase from './firebase.js'
import { getDatabase, ref, set } from "firebase/database";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import background from "./bg.jpeg";

function isValidUrl(str) {
  const pattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}([\/\w\.-]*)*\/?$/;
  return pattern.test(str);
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description:'',
      link:'',
      error_message:'',
      error_color: 'green'
    };

    
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, state_val) {
    this.setState({[state_val]: event.target.value});
  }

  handleChangeDate(value) {
    
    this.setState({birthdate:value});
  }

  

  handleSubmit(event) {

    const db = getDatabase();

    if( this.state.description == ""|| this.state.title == "" || this.state.link == "" || !isValidUrl(this.state.link)){
      this.setState({["error_color"]: "red"});
      this.setState({["error_message"]: "Link is not formatted"});
      return
    }

    

    set(ref(db, 'posts/'+ getRandomInt(0, 500000000).toString()), {
      description: this.state.description,
      link: this.state.link,
      title: this.state.title,
      
    });
    

    this.setState({["error_color"]: "green"});
    this.setState({["error_message"]: "New Post Added!"});
  

   
  }

  render() {
    return (
      <div className="App">
        
      <header className="App-header"  style={{ backgroundImage: `url(${background})`, backgroundSize:'cover' }}>

        
        <div style={{padding:'0px', fontSize:'40px'}}>
          <h >Make A New YJA Post</h>

          
          </div>
          <div class=" gx-5" style={{padding:'3ch',backgroundColor:'rgba(255,255,255,0.5)',  borderRadius:'5px'}}>

            <label>
                <p style={{fontWeight:'normal', margin:'0'}}>Title:</p>
                <input style={{}} type="text" value={this.state.title} onChange={event => this.handleChange(event, "title")} />
              </label>
              
              <br/><br/><br/>
              
             
              <label>
                <p style={{fontWeight:'normal', margin:'0'}}>Link:</p>
                <input type="text" value={this.state.link} onChange={event => this.handleChange(event, "link")} />
              </label>

              <br/><br/><br/>

              <label>
                <p style={{fontWeight:'normal', margin:'0'}}>Description:</p>
                <textarea style={{height:'200px', width:'300px', fontSize:'15px'}} type="text" value={this.state.description} onChange={event => this.handleChange(event, "description")} />
              </label>
              <br></br><br></br>
              <p style={{color:this.state.error_color, fontWeight:'normal', textAlign:'center', fontSize:'15px'}}>{this.state.error_message}</p>
                <button style={{ borderRadius:'5px', width:'100%', backgroundColor:'darkgreen', color:'white'}} onClick={this.handleSubmit}>Submit</button>
            <br/>


            </div>

      </header>
    </div>
    );
  }
}
export default Register;


 