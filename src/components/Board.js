
import React from 'react';
import Tile from './Tile';



class Board extends React.Component {
    
    constructor(props) {
        super(props);
        // this.state = {
        // }     
    }

    handleTileChange(event) {
        event.persist()
        if (event.target.value.length > 1) {
            event.target.value = event.target.value.slice(0,1); 
        }
        this.props.boardUpdate(event.target.id, event.nativeEvent.data ? event.nativeEvent.data : '.')
    }

    render() {
        return (
            <div className="board">
                {this.props.board.board.map((item, index) =>
                        <Tile
                            key={index} 
                            id={index} 
                            value={item} 
                            editable={this.props.board.initialBoard[index] != '.' ? false : true}
                            handler={this.handleTileChange.bind(this)}
                        />
                     )}
            </div>
        )
    }
}

export default Board;