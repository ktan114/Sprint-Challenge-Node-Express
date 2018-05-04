import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      project: {}
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/projects`)
      .then(response => {
        this.setState({ project: response.data.response })
      })
      .catch(err => console.log(err))
    }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.project.map(response => {
           return <li> { response } </li> 
        })}
      </div>
    );
  }
}

export default App;
