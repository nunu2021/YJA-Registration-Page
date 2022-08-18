import logo from './logo.svg';
import './App.css';
import React from 'react';
import { getDatabase, ref, set, onValue } from "firebase/database";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



class Logs extends React.Component {
  constructor(props) {
    super(props);
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
    this.state = {
        data_s : data
    }
    console.log(this.state.data_s)

    });
    

    
  }

  
   

 

  render() {

    


    return (
      <div className="App">
      
      <body>


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
            console.log(this.state.data_s.length)
        

        return (
 
            <tr key= {key}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{street}</td>
                <td>{city}</td>
                <td>{zip}</td>
                <td>{jain_center}</td>
                <td>{diet}</td>

                {/* <td>{this.state.data_s[key]["email"]}</td>
                <td>{this.state.data_s[key]["phone"]}</td>
                <td>{this.state.data_s[key]["street"]}</td>
                <td>{this.state.data_s[key]["city"]}</td>
                <td>{this.state.data_s[key]["zip"]}</td>
                <td>{this.state.data_s[key]["jain_center"]}</td>
                <td>{this.state.data_s[key]["diet"]}</td> */}
                </tr>
              
           )




      })
   }
        </tbody>
        </Table>

      </body>

      
    </div>
    );
  }
}
export default Logs;
