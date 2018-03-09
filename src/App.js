import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './Player.js';
import rock from './assets/rock.png';
import paper from './assets/paper.jpg';
import scissors from './assets/scissors.png';
import CalculateWinner from './CalculatorWinner';


class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      userSelection: null, 
      computerSelection: null,
    };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {

    let userSelection = e.target.className;
    let computerSelectionArray = ['rock', 'paper', 'scissors'];

    this.setState({
      userSelection: userSelection, 
      computerSelection: computerSelectionArray[Math.floor(Math.random() * computerSelectionArray.length)],
    })

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

        <Player name="Player" selection={this.state.userSelection} score={this.state.userScore}  />
        <Player name="Computer" selection={this.state.computerSelection} score={this.state.computerSelection} />

        {
          
          // https://stackoverflow.com/questions/33840150/onclick-doesnt-render-new-react-component
          // !!this.state.userSelection && !!this.state.computerSelection ? 
          <CalculateWinner player1={this.state.userSelection} player2={this.state.computerSelection} /> 
          // null

        }
        

      </div>
    );

  }
}

export default App;
