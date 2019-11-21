import React from 'react';

class Display extends React.Component {
    render() {

        return(
            <h1>
                {this.props.calculation}
            </h1>
        )
        
    }
}

export default Display