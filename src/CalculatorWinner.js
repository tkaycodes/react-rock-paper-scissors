import React, { Component } from 'react';

function Calculator(props) {

    let userSelection = props.player1;
    let computerSelection = props.player2;

    if (userSelection === computerSelection) {
        console.log('tie')
        // this.setState({winner: "tie"})
        return <div>hi</div>;

        }
        else if ((userSelection === 'paper')) {
    
            if  (computerSelection === 'scissors') {

                console.log( 'computer wins (SCISSORS > PAPER)')
                //  this.setState({winner: "computer"})

                return <div>hi</div>;
                    
                // this.setState({
                //     computerScore: 1
                // });
    
            }
            if  (computerSelection === 'rock') {

                console.log( 'user wins (PAPER > ROCK)')
                //  this.setState({winner: "user"})
                // this.setState({
                //     computeScore: 1
                // });
                return <div>hi</div>;

        
            }
        
        }
        else if ((userSelection === 'rock')) {
    
            if  (computerSelection === 'scissors') {
            console.log( 'user wins (ROCK > SCISSORS)')
            //  this.setState({winner: "user"})

            return <div>hi</div>;

        
            }
            if  (computerSelection === 'paper') {
                console.log( 'computer wins (PAPER > ROCK)')
                // this.setState({winner: "computer"})

                return <div>hi</div>;

        
            }
    
        }
        else if ((userSelection === 'scissors')) {
            if  (computerSelection === 'rock') {
            console.log( 'computer wins (ROCK > SCISSORS)')
            //  this.setState({winner: "computer"})

            return <div>hi</div>;

        
            }
            if  (computerSelection === 'paper') {
            console.log( 'user wins (SCISSORS > PAPER)')
            //  this.setState({winner: "user"})
            return <div>hi</div>;

        
            }
        }

}


class CalculateWinner extends Component {

    constructor(props) {

        super(props);
        // let userSelection = this.props.player1;
        // let computerSelection = this.props.player2;

        this.state = {
            computerScore: 0,
            userScore: 0
        }

    }

    render() {
    
       return <Calculator player1={this.props.player1} player2={this.props.player2}/> 

    }

}

export default CalculateWinner;

// function CalculateWinner(props) {
  
  
//     return null;
  
//   }
  