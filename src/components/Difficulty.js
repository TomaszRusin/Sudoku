import React from 'react';

class Difficulty extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <button id="easy" onClick={this.props.newDifficulty}>easy</button>
                <button id="medium" onClick={this.props.newDifficulty}>medium</button>
                <button id="hard" onClick={this.props.newDifficulty}>hard</button>
            </div>
        )
    }
}

export default Difficulty