
import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        // console.log(props)
        super(props);
        this.state = {
            value: ''
        };
    }

    
    
    

    render() {
        const editable = this.props.editable;

        const tileStyle = {
            backgroundColor: editable ? 'white' : '#f7d171',
          };
        return (
            <div className="tile">
                <input 
                    id={this.props.id}
                    type="number" 
                    min="1" 
                    max="9" 
                    value={this.props.value}
                    onChange={editable ? this.props.handler : () => {}}
                    style={tileStyle}
                />
            </div>
            
        );
    }
}

export default Tile