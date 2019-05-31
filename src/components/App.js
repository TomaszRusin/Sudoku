
import React from 'react';
import Board from './Board';

const sudoku = require('sudoku-umd');

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            initialBoard: sudoku.generate("easy"),
            board: ''
          }
    }
    
    render() {
        return (
            <div className="app">
                <h1>Sudoku</h1>
                <Board sudokuString={this.state.initialBoard}/>
                <div className="buttons">
                    <button>Check</button>
                    <button>New Game</button>
                    <button>Solve</button>
                    <button>Restart</button>
                </div>
            </div>
        )
    }
}

export default App