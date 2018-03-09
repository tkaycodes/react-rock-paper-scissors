import React, { Component } from 'react';
import Score from './Score';

class CalculateWinner extends Component {

    constructor(props) {

        super(props);

        // this.handleClicks = this.handleClicks.bind(this);

        this.state = {
            userScore: 0,
            computerScore: 0,
            winner: null
        }

    }

    componentWillReceiveProps(props) {

        let userSelection = props.player1;
        let computerSelection = props.player2;

        if (userSelection !== computerSelection) {
            
            if ((userSelection === 'paper')) {
        
                if  (computerSelection === 'scissors') {

                    this.setState({
                        computerScore: this.state.computerScore + 1,
                        winner: 'computer'
                    })
                       
                }

                else if  (computerSelection === 'rock') {

                    this.setState({
                        userScore: this.state.userScore + 1,
                        winner: 'user'
                    })

                }
           
            }
            else if ((userSelection === 'rock')) {
        
                if  (computerSelection === 'scissors') {
                       
                    this.setState({
                        userScore: this.state.userScore + 1,
                        winner: 'user'
                    })
       
                }
                else if  (computerSelection === 'paper') {

                    this.setState({
                        computerScore: this.state.computerScore + 1,
                        winner: 'computer'
                    })

                }
           
            }
            else if ((userSelection === 'scissors')) {

                if  (computerSelection === 'rock') {

                    this.setState({
                        computerScore: this.state.computerScore + 1,
                        winner: 'computer'
                    })          

                }

                else if  (computerSelection === 'paper') {

                    this.setState({
                        userScore: this.state.userScore + 1,
                        winner: 'user'
                    })

                }
            }

        }
        else {
            this.setState({
                winner: 'No winner (TIE)'
            })
        }

    }

    componentWillMount() {
        console.log(this.props);
    }

    componentDidMount() {
        console.log('mounted');
    }

    handleClicks() {

        console.log('handle click');

        this.setState({
            userScore: this.state.userScore +1, 
            computerScore: this.state.computerScore +1
        }); 
    //     alert('hi');

    }

    

    render() {


        
        return (

            // null
            <div>

                <div onClick={this.handleClicks} style={{backgroundColor: 'red', fontSize: '22px'}}> user picked: {this.props.player1} </div>
                <div onClick={this.handleClicks} style={{backgroundColor: 'red', fontSize: '22px'}}> computer picked: {this.props.player2}</div>

                {
                    !!this.state.winner ?
                    <div onClick={this.handleClicks} style={{backgroundColor: 'red', fontSize: '22px'}}> {this.state.winner} WINS!</div> :
                    null
                }

                <Score computerScore = {this.state.computerScore} userScore = {this.state.userScore}  />
                
            </div> 

        );
    }

}


export default CalculateWinner;

