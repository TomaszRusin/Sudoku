
import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        console.log(props)
        // console.log(state)
        super(props);
        this.state = {
            value: this.props.value,
            editable: this.props.editable
        };
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const editable = this.state.editable;
        var input;

        var mutable = {
            backgroundColor: 'white',
        }

        var immutable = {
            backgroundColor: 'red',
        }
    
        if (editable) {
            input = <input style={mutable} type="number" max="9" min="1" value={this.state.value} onChange={this.handleChange}/>;
        } else {
            input = <input style={immutable} type="number" max="9" min="1" value={this.state.value}/>;
        }
    
        return (
            <div className="tile">
                {input}
            </div>
            
        );
    }
}

export default Tile