import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function helloWorld (nome, sobrenome) {
      return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
    }
    
    const element = helloWorld('Jorge', 'Maravilha');
    const container = <div>{element}</div>;
    return container
  }
}

export default App;
