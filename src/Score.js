import React, {Component} from 'react'

// BASED ON EACH WIN, INCREMENTS SCORE
class Score extends Component {

    // constructor(props) {
    //     super(props)
        
    //     this.state = {
    //         isMaxScoreReached: false, 
    //         matchWinner: null
    //     }

        // this.isMaxScoreReached = this.isMaxScoreReached.bind(this)

    // }

    // componentWillReceiveProps(props) {

    //     let computerScore = this.props.computerScore;
    //     let userScore = this.props.computerScore;

    //     console.log(userScore);
    //     console.log(computerScore);
        
    //     // console.log(computerScore + 'is' + computerScore === MAX_SCORE);
    //     // console.log(userScore + 'is' + userScore === MAX_SCORE);

    //    if (computerScore === 5 ||userScore === 5  ) {

    //         debugger;

    //         this.setState({
    //             isMaxScoreReached: true
    //         });

    //         if (computerScore === 5) {

    //             this.setState({
    //                 matchWinner: 'computer'
    //             });
    //         }

    //         if (userScore === 5) {
                
    //             this.setState({
    //                 matchWinner: 'user'
    //             });
    //         }

    //     }


    // }

    // componentDidUpdate() {

        
    //     console.log(this.state.isMaxScoreReached)

    // }


    render() {
        return (
            <div>
                <div style={{borderBottom: '2px solid black', marginBottom: '5px'}}><strong>SCORE BOARD:</strong></div>
                <div>Computer: {this.props.computerScore}</div>
                <div>User: {this.props.userScore}</div>
            </div>
        );
    }

}

export default Score;