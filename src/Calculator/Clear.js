import React from 'react';
import './calculator.css'

class Clear extends React.Component{
    render(){
        return(
            <button className="number" onClick={this.props.onClick}>
                C
            </button>
        )
    }
}

export default Clear