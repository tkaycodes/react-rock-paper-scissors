import React, {Component} from 'react'

class Player extends Component {

    constructor(props) {
        
        super(props);
        this.state = { score: 0 };

    }
  
      
    render(){
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.state.score}</div>
            </div>
        )
    }
}

export default Player;