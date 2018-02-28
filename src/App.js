import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player.js';
import rock from './assets/rock.png';
import paper from './assets/paper.jpg';
import scissors from './assets/scissors.png';
// import Image from './Image.js';

class App extends Component {

  handleClick(e) {

    let userSelection = e.target.className;
    let computerSelection = ['rock', 'paper', 'scissors'];

    console.log(userSelection);
    // google html attributes (like data-name) in jsx ? 

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Rock, Paper, Scissors</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <img className="rock" src={rock} style={{ width: 100, height: 100 }} onClick={this.handleClick} />
        <img className="paper" src={paper} style={{ width: 100, height: 100 }} onClick={this.handleClick} />
        <img className="scissors" src={scissors} style={{ width: 100, height: 100 }} onClick={this.handleClick} />

        <Player name="Player" />
        <Player name="Computer" />

      </div>
    );

  }
}

export default App;
