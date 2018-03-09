import React, {Component} from 'react'

class Score extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         points: 0
    //     }

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