import React from 'react';
import './calculator.css'

class Calculate extends React.Component{
    render(){
        return(
            <button className="number" onClick={() => this.props.onClick('=')}>
                =
            </button>
        )
    }
}

export default Calculate