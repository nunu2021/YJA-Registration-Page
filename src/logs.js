import logo from './logo.svg';
import './index.css';
import React from 'react';
import { getDatabase, ref, set, onValue } from "firebase/database";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { CSVDownload, CSVLink } from 'react-csv';



class Logs extends React.Component {
  constructor() {
    super();
    this.state = {
        data_s: []
    }

    


  }

  componentDidMount(){
   
    
    const db = getDatabase();
    const starCountRef = ref(db, `users/` );
    onValue(starCountRef, (snapshot) => {
    let data =[];

    snapshot.forEach(cs =>{
        data.push({"name":cs.key, "email":cs.val()["email"], "phone": cs.val()["phone"], "street":cs.val()["street"], "city": cs.val()["city"], "zip": cs.val()["zip"], "jain_center": cs.val()["jain_center"], "diet":cs.val()["diet"]})
    })
    this.setState ({
        data_s : data
    })

    });
  }

 

  render() {


    return (
      <div className="App">
      
      <body>
      <br/><br/>
        <h className="header_logs">Registered Users</h>
        <br/><br/>


      <Table style={{margin:'5px'}} striped bordered hover>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Street</th>
            <th>City</th>
            <th>Zip</th>
            <th>Jain Center</th>
            <th>Diet</th>
            </tr>
        </thead>
        <tbody>
        {
        this.state.data_s.map((key, index)=>{

            const {name, email, phone, street, city, zip, jain_center, diet} = key;
        

        return (
 
            <tr key= {index}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{street}</td>
                <td>{city}</td>
                <td>{zip}</td>
                <td>{jain_center}</td>
                <td>{diet}</td>
                </tr>
              
           )




      })
   }
        </tbody>
        </Table>
        <br/>

        <CSVLink data={this.state.data_s}>Download CSV</CSVLink>

      </body>

      
    </div>
    );
  }
}
export default Logs;
