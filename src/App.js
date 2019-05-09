import React, { Component } from 'react';
import logo from './img/kawai-burguer.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> BURGUER QUEEN</h2>
        </div>
        <main> </main>
      </div>
    );
  }
}

export default App;