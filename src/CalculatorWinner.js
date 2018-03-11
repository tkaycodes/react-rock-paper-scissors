import React, { Component } from 'react';
import Score from './Score';

// CONVERTS SELECTIONS TO SCORE, DECLARES WINNER, CALLS SCORE COMPONENT
class CalculateWinner extends Component {

    constructor(props) {

        super(props);

        // this.handleClicks = this.handleClicks.bind(this);

        this.state = {
            userScore: 0,
            computerScore: 0,
            winner: null, 
            ismaxScoreReached: false, 
            matchWinner: null
        }

        this.handleResetButtonClick = this.handleResetButtonClick.bind(this)

    }

    componentWillReceiveProps(props) {

        let userSelection = props.userSelection;
        let computerSelection = props.computerSelection;

        if (userSelection !== computerSelection) {
            
            if ((userSelection === 'paper')) {
        
                if  (computerSelection === 'scissors') {
                    
                    if (this.state.computerScore !== 5 && this.state.userScore !== 5) {

                        this.setState({
                            computerScore: this.state.computerScore + 1,
                            winner: 'computer'
                        })

                    }

                    else {

                        if (this.state.computerScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'computer'
                            })
                        }

                        if (this.state.userScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'user'
                            })
                        } 

                    }
      
                }

                else if  (computerSelection === 'rock') {

                    if (this.state.computerScore !== 5 && this.state.userScore !== 5) {

                        this.setState({
                            userScore: this.state.userScore + 1,
                            winner: 'user'
                        })

                    }

                    else {

                        if (this.state.computerScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'computer'
                            })
                        }
    
                        if (this.state.userScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'user'
                            })
                        } 
                        
                    }

                }
           
            }
            else if ((userSelection === 'rock')) {
        
                
                if  (computerSelection === 'scissors') {

                    if (this.state.computerScore !== 5 && this.state.userScore !== 5) {
      
                        this.setState({
                            userScore: this.state.userScore + 1,
                            winner: 'user'
                        })

                    }

                    else {


                        if (this.state.computerScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'computer'
                            })
                        }
    
                        if (this.state.userScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'user'
                            })
                        } 
                        
                    }

                    
    
                }
                
                else if  (computerSelection === 'paper') {

                    if (this.state.computerScore !== 5 && this.state.userScore !== 5) {

                        this.setState({
                            computerScore: this.state.computerScore + 1,
                            winner: 'computer'
                        })

                    }

                    else {

                        if (this.state.computerScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'computer'
                            })
                        }
    
                        if (this.state.userScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'user'
                            })
                        } 
                        
                    }

                }
           
            }
            else if ((userSelection === 'scissors')) {

                if  (computerSelection === 'rock') {

                    if (this.state.computerScore !== 5 && this.state.userScore !== 5) {

                        this.setState({
                            computerScore: this.state.computerScore + 1,
                            winner: 'computer'
                        })

                    }
                    
                    else {

                        if (this.state.computerScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'computer'
                            })
                        }
    
                        if (this.state.userScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'user'
                            })
                        } 
                        
                    }

                }

                else if  (computerSelection === 'paper') {

                    if (this.state.computerScore !== 5 && this.state.userScore !== 5) {

                        this.setState({
                            userScore: this.state.userScore + 1,
                            winner: 'user'
                        })

                    }

                    else {

                        if (this.state.computerScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'computer'
                            })
                        }
    
                        if (this.state.userScore === 5) {
                            this.setState({
                                ismaxScoreReached: true,
                                matchWinner: 'user'
                            })
                        } 
                        
                    }

                }
            }

        }
        else {
            this.setState({
                winner: 'No winner (TIE)'
            })
        }

    }

    handleResetButtonClick() {
        this.setState({
            userScore: 0,
            computerScore: 0,
            winner: null, 
            ismaxScoreReached: false, 
            matchWinner: null
        })
       return  alert('score reset!')
    }

    render() {


        
        return (

            // null

            <div>

                <div style={{backgroundColor: 'red', fontSize: '22px'}}> user picked: {this.props.userSelection} </div>
                <div  style={{backgroundColor: 'red', fontSize: '22px'}}> computer picked: {this.props.computerSelection}</div>

                {
                    !!this.state.winner ?
                    <div style={{backgroundColor: 'red', fontSize: '22px'}}> {this.state.winner} WINS!</div> :
                    null
                }

                {   
                    
                    <Score computerScore = {this.state.computerScore} userScore = {this.state.userScore}  />
                    

                }

                {       
                    !!this.state.ismaxScoreReached ?
                    <div><span>GAME OVER ! : </span> {this.state.matchWinner} <span>Wins the Match!</span></div> :
                    <div>No one has won yet</div>



                }

                <button style={{backgroundColor: 'gray', padding: '5px', border: '1px solid red'}} onClick={this.handleResetButtonClick}>Reset Game</button>
                
            </div> 

        );
    }

}


export default CalculateWinner;

