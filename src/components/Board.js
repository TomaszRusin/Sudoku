
import React from 'react';
import Tile from './Tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sudoku : this.props.sudokuString.split('')
        }
    }

    render() {
        console.log(this.state.sudoku)
        return (
            <div className="board">
                {this.state.sudoku.map((i) => <Tile value={i} editable={i != '.' ? false : true}/>)}
            </div>
        )
    }
}

export default Board;