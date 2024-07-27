import React from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './home.js'
import NewPost from './newpost.js'
import AllPosts from './allposts.js'
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
          <Route path='/newpost' element={<NewPost/>} />
          <Route path='/allposts' element={<AllPosts/>} />
      </Routes>
      </Router>
    );
  }
}


export default App;
