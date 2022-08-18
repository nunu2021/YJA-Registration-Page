import React from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './home.js'
import Register from './register.js'
import Logs from './logs.js'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    return (
      <Router>
      <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/logs' element={<Logs/>} />
      </Routes>
      </Router>
    );
  }
}


export default App;
