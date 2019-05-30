
import React from 'react';
import Board from './Board';

class App extends React.Component {
    
    render() {
        return (
            <div className="app">
                <h1>Sudoku</h1>
                <Board />
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