import React, {Component} from 'react'
import Score from './Score';

class Player extends Component {

    constructor(props) {
        
        super(props);

        // this.state = {
        //     isWinner = false,
        //     points: 0
        // }

    }


  
      
    render(){
        return (
            <div style={{ border: '1px solid black', padding: '10px' }}>
                {/* <div style={{ fontWeight: 'bold', fontSize: '22px', borderBottom: '1px solid red', marginBottom: '10px'}}>{this.props.name}</div> */}
                {/* <div>Selection:{this.props.selection}</div>     */}
                {/* <Score points={this.state.points}  />             */}
            </div>
        );
    }
}

export default Player;