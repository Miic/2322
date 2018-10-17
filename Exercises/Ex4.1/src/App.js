import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Welcome to Reaction Tracker</h1>
          <p>Trends are kind of our thing</p> 
        </div>
        <div className="container">
          Fun reactions here
        </div>
      </div>
    );
  }
}

export default App;
