import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import firebase from './firebase.js'
import { getDatabase, ref, set } from "firebase/database";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Register extends React.Component {
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

    if(!this.state.email.includes("@") || 
    !(this.state.email.includes(".com") || this.state.email.includes(".org") || this.state.email.includes(".edu")) ||
    this.state.email.includes("#") ||
    this.state.email.indexOf("_") == this.state.email.indexOf("@") - 1 ||
    this.state.email.indexOf(".") == this.state.email.indexOf("@") - 1 ||
    this.state.email.length == 0){
      this.setState({["error_color"]: "red"});
      this.setState({["error_message"]: "Please enter a valid email address."});
    }else if(/^[0-9]+$/.test(this.state.phone) == false){
      this.setState({["error_color"]: "red"});
      this.setState({["error_message"]: "Please enter a valid phone number."});
    }else if(/^[0-9]+$/.test(this.state.zip) == false){
      this.setState({["error_color"]: "red"});
      this.setState({["error_message"]: "Please enter a valid zip code."});
    }else if(this.state.special_needs.length > 200){
      this.setState({["error_color"]: "red"});
      this.setState({["error_message"]: "Please write special needs in less than 200 characters."});
    }else{ // if the data entered is valid, then go ahead and save in database
      alert("its working???")
      this.setState({["error_color"]: "green"});
      this.setState({["error_message"]: "Thank you for registering!"});

      set(ref(db, 'users/' + this.state.name), {
        email: this.state.email,
        birthdate: this.state.birthdate,
        phone : this.state.phone,
        street:this.state.street,
        city:this.state.city,
        zip: this.state.zip,
        jain_center: this.state.jain_center,
        diet: this.state.diet,
        special_needs: this.state.special_needs
  
      });

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
        error_message:this.state.error_message,
        error_color: 'green'
      };
  
    }

   
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">

        <div style={{backgroundColor:'lightblue', paddingleft:'15%', paddingRight:'15%'}}>

          <div style={{paddingLeft:'50%',paddingRight:'40%', fontWeight:'lighter', fontSize:'70%'}}>

          <div style={{padding:'20px',  fontWeight:'bold', fontSize:'40px'}}>
          <h >YJA Registration Form</h>

          
          </div>
          
          
            <div style={{textAlign:'left'}}>
            
              <label>
                <p style={{fontWeight:'normal', margin:'0'}}>Name:</p>
                <input style={{}} type="text" value={this.state.name} onChange={event => this.handleChange(event, "name")} />
              </label>
              
              <br/><br/>
              
              <p style={{fontWeight:'normal', margin:'0'}}>BirthDate:</p>
              <DatePicker className='class1' onChange={this.handleChangeDate} value={this.state.birthdate} />

              <br/><br/>

              <label>
                <p style={{fontWeight:'normal', margin:'0'}}>Phone:</p>
                <input type="text" value={this.state.phone} onChange={event => this.handleChange(event, "phone")} />
              </label>

              <br/><br/>

              <label>
                <p style={{fontWeight:'normal', margin:'0'}}>Email:</p>
                <input type="text" value={this.state.email} onChange={event => this.handleChange(event, "email")} />
              </label>

              <br/><br/>

              <label>
                <p style={{fontWeight:'normal', margin:'0'}}>Address:</p>
                <p style={{margin:'0'}}>Street:</p>
                <input type="text" value={this.state.street} onChange={event => this.handleChange(event, "street")} />
                <br/> <p style={{margin:'0'}}>City:</p>
                <input type="text" value={this.state.city} onChange={event => this.handleChange(event, "city")} />
                <br/><p style={{margin:'0'}}>Zip:</p>
                <input type="text" value={this.state.zip} onChange={event => this.handleChange(event, "zip")} />
              </label>

              <br/><br/>

              <label>
                <p style={{fontWeight:'normal', margin:'0'}}>Jain Center:</p>
                <input type="text" value={this.state.jain_center} onChange={event => this.handleChange(event, "jain_center")} />
              </label>

              <br/><br/>
              <label>
                <p style={{fontWeight:'normal', margin:'0'}}>Dietary Preferences:</p>
                  <div style={{textAlign:'left'}} onChange={event => this.handleChange(event, "diet")}>
                    <input type="radio" value="Jain" name="diet" /> Jain
                    <br/>
                    <input type="radio" value="Vegan" name="diet" /> Vegan
                    <br/>
                    <input type="radio" value="Vegetarian" name="diet" /> Vegetarian
                  </div>
                </label>
                <br/><br/>
                <label>
                  <p style={{fontWeight:'normal', margin:'0'}}>Any Special Needs?:</p>
                  <input style={{}} type="text" value={this.state.special_needs} onChange={event => this.handleChange(event, "special_needs")} />
                </label>
                <br/>
              </div>
              <br/><br/>
              <p style={{color:this.state.error_color, fontWeight:'bold'}}>{this.state.error_message}</p>
          
              <button style={{ borderRadius:'5px', padding:'8px'}} onClick={this.handleSubmit}>Submit</button>
         
            <br/>
          </div>
        </div>
      </header>
    </div>
    );
  }
}
export default Register;
