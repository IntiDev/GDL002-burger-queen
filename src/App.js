import React, { Component, Fragment } from 'react';
//import Home from './components/Home';
import Hosts from './components/Hosts';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <Home/> */}
        <Hosts/>
      </Fragment>
     
    );
  }
}

export default App;