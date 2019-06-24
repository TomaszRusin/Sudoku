
import React from 'react';
import Tile from './Tile';



class Board extends React.Component {
    
    constructor(props) {
        // console.log(props.board.initialBoard)
        super(props);
        this.state = {
            initialBoard: props.board.initialBoard,
        }
          
    }

    

    render() {  
        return (
            <div className="board">
                {this.state.initialBoard.map((item, index) => <Tile key={index} value={item} editable={item != '.' ? false : true}/>)}
            </div>
        )
    }
}

export default Board;