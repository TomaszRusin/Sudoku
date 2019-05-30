
import React from 'react';
import Tile from './Tile'

class Board extends React.Component {
    render() {
        return (
            <div className="board">
                <Tile />
            </div>
        )
    }
}

export default Board;