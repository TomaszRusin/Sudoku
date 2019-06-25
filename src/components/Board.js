
import React from 'react';
import Tile from './Tile';



class Board extends React.Component {
    
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
        }
          
    }

    

    render() {  
        return (
            <div className="board">
                {this.props.board.board.map((item, index) => <Tile key={index} value={item} editable={item != '' ? false : true}/>)}
            </div>
        )
    }
}

export default Board;