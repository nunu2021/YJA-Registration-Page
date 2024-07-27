import logo from './logo.svg';
import './index.css';
import React from 'react';
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { CSVDownload, CSVLink } from 'react-csv';
import background from "./bg.jpeg";



class Logs extends React.Component {
  constructor() {
    super();
    this.state = {
        data_s: []
    }

    


  }

  handleDelete(key){
    const db = getDatabase();
    const starCountRef = ref(db, `posts/`+key );


// Delete the data at the specified location
  remove(starCountRef)
      .then(() => {
          console.log('Data deleted successfully');
      })
      .catch((error) => {
          console.error('Error deleting data:', error);
      });
    }

  componentDidMount(){
   
    
    const db = getDatabase();
    const starCountRef = ref(db, `posts/` );
    onValue(starCountRef, (snapshot) => {
    let data =[];

    snapshot.forEach(cs =>{
        data[cs.key]={"title":cs.val()["title"], "link":cs.val()["link"], "description": cs.val()["description"]}
    })
    this.setState ({
        data_s : data
    })

    });
  }

 




    render() {
      return (
        <div className="App">
          
        <header className="App-header"  style={{ backgroundImage: `url(${background})`, backgroundSize:'cover' }}>
  
          
          <div style={{padding:'10px', fontSize:'40px'}}>
            <h >All Posts</h>
  
            
            </div>
            {Object.entries(this.state.data_s).map(([key, value]) => (
                 <div  style={{padding:'7ch',backgroundColor:'rgba(255,255,255,0.5)',  borderRadius:'5px'}}>
                 <p style={{fontWeight:'normal', margin:'0'}} > {value.title}</p>
       
                 <p style={{fontWeight:'normal', margin:'0', fontSize:'15px'}} >Link: <p style={{color:'blue'}}>{value.link}</p></p>

                 <p style={{fontWeight:'normal', margin:'0', fontSize:'15px'}} >{value.description}</p>
                 <button style={{ borderRadius:'1px', width:'100%', backgroundColor:'darkred', color:'white', fontSize:'15px'}} onClick={() => this.handleDelete(key)}>Delete</button>
                 <br/>
                </div>
            ))}
           
  
        </header>
      </div>
      );
    }
  }
export default Logs;
