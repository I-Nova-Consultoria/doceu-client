import React, { Component } from 'react';
import LoginForm from './components/LoginForm'
import './App.css';
import {
  BrowserRouter as Router,  
} from "react-router-dom";


class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">      
       <LoginForm />
      </div>
      </Router>
    );
  }
}

export default App;
