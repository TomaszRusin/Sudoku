
import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            editable: this.props.editable
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        if (event.target.value.length > 1) {
            event.target.value = event.target.value.slice(0,1); 
        }
        this.setState({value: event.target.value});
        // console.log(this.state.value) // zrobić tak żeby vaule od state była od razu dostępna
    }

    render() {
        const editable = this.state.editable;

        const tileStyle = {
            backgroundColor: editable ? 'white' : '#f7d171'
          };
        return (
            <div className="tile">
                <input 
                    type="number" 
                    min="1" 
                    max="9" 
                    value={this.state.value} 
                    onChange={editable ? this.handleChange : () => {}}
                    style={tileStyle}
                />
            </div>
            
        );
    }
}

export default Tile