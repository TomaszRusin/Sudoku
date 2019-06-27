
import React from 'react';
import Board from './Board';
import Difficulty from './Difficulty'

const sudoku = require('sudoku-umd');

class App extends React.Component {
    constructor(props) {
        super(props)
        let sudokuArr = sudoku.generate('easy').split('')
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
        let sudokuArr = sudoku.generate(this.state.difficulty).split('')
        this.setState({
            initialBoard: sudokuArr,
            board: sudokuArr
        })
    }

    restartBoard() {
        this.setState({
            board: this.state.initialBoard
        })
    }

    solveBoard() {
        const boardString = this.state.board.join('')
        if(sudoku.solve(boardString) === false) {
            alert('There is a mistake somewhere! It is now impossible to solve the puzzle.')
        }else {
            this.setState({
                board: sudoku.solve(boardString).split('')
            })
        }
    }

    checkBoard() {
        const boardString = this.state.board.join('')
        if(sudoku.solve(boardString) === false) {
            alert('There is a mistake somewhere! It is now impossible to solve the puzzle.')
        }else {
            alert('All good chief. Keep up the good work!')
        }
    }
    

    boardUpdate(tileId, newValue) {
        this.setState({
            board: Object.assign([], this.state.board, {[tileId]: newValue})
        })
    }
    
    render() {
        return (
            <div className="app">
                <h1>Sudoku</h1>
                <Board board={this.state} boardUpdate={this.boardUpdate.bind(this)} />
                <div className="buttons">
                    <button onClick={this.generateNewBoard.bind(this)}>New Game</button>
                    <button onClick={this.checkBoard.bind(this)}>Check</button>
                    <button onClick={this.solveBoard.bind(this)}>Solve</button>
                    <button onClick={this.restartBoard.bind(this)}>Restart</button>
                </div>
                <Difficulty newDifficulty={this.setDifficulty.bind(this)} />
            </div>
        )
    }
}

export default App