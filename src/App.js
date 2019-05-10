import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize'
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
        <main> 
        </main>
        <Button
          node="a"
          waves="light"
          large
          style={{marginRight: '5px'}}
        >
        Enviar
        </Button>
        {/* <Button node="a" waves="light" large>
        Button
        <Icon right>
        cloud
        </Icon>
        </Button> */}
    </div> //App 
    );
  }
}

export default App;