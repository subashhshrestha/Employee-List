import React, { Component } from 'react';
import Main from './classComponent/body/main/index'
import './App.css';
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
        <img src={logo} width="90px"/>
          <h4>React JS</h4>
        </div>
        <div className="container-fluid">
        <div className="row">
          <div className="App">
        <Main/>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
