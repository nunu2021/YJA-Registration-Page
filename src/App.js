import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import firebase from './firebase.js'
import { getDatabase, ref, set } from "firebase/database";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class App extends React.Component {
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
    special_needs:''};

    
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
    alert(this.state.birthdate);
    const db = getDatabase();
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
          <form  onSubmit={this.handleSubmit}>
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
              <input style={{ borderRadius:'5px', padding:'8px'}} type="submit" value="Submit" />
            </form>
            <br/>
          </div>
        </div>
      </header>
    </div>
    );
  }
}


export default App;
