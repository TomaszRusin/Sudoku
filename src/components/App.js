
import React from 'react';
import Board from './Board';
import Difficulty from './Difficulty'

const sudoku = require('sudoku-umd');

class App extends React.Component {
    constructor(props) {
        super(props)
        let sudokuRaw = sudoku.generate('easy').split('')
        const sudokuArr = sudokuRaw.map(digit  => {
            if(digit == '.'){
                return ' '
            }else {
                return digit
            }
        })
        this.state = {
             difficulty: 'easy',
             initialBoard: sudokuArr,
             board: sudokuArr
        }
    }

    setDifficulty(e) {
        this.setState({difficulty: e.target.id})
    }

    generateNewBoard() {
        let sudokuRaw = sudoku.generate('easy').split('')
        const sudokuArr = sudokuRaw.map(digit  => {
            if(digit == '.'){
                return ' '
            }else {
                return digit
            }
        })
        
        this.setState({
            initialBoard: sudokuArr,
            board: sudokuArr
        })
        
    }
    
    render() {
        return (
            <div className="app">
                <h1>Sudoku</h1>
                <Board board={this.state} />
                <div className="buttons">
                    <button>Check</button>
                    <button onClick={this.generateNewBoard.bind(this)}>New Game</button>
                    <button onClick={() => {console.log(this.state)}}>Solve</button>
                    <button>Restart</button>
                </div>

                <Difficulty newDifficulty={this.setDifficulty.bind(this)} />
            </div>
        )
    }
}

export default App