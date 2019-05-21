import React, { Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Hosts from './components/Hosts';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route to='/' component={Home}/>
        <Route to='/Hosts' component={Hosts}/>
      </BrowserRouter>
     
    );
  }
}

export default App;