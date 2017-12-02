import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Guess from './components/guess'
import Hangman from './components/hangman.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hangman</h1>
        </header>
        <p className="App-intro">
          <Guess content="Make a guess" />
          <Hangman />
        </p>
      </div>
    );
  }
}

export default App;
