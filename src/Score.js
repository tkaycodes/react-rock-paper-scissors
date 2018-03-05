import React, {Component} from 'react'

class Score extends Component {

    constructor(props) {
        super(props)

        this.state = {
            points: 0
        }
    }

    render() {
        return (
            <div>
                Score: {this.state.points}
            </div>
        );
    }

}

export default Score;