import React from 'react';
import Operator from './Operator'
import './calculator.css'

class Operators extends React.Component{
    render(){
        return(
            <div className="operators">
                <Operator value="+" onClick={this.props.onClick} />
                <Operator value="x" onClick={this.props.onClick} />
                <Operator value="-" onClick={this.props.onClick} />
                <Operator value="/" onClick={this.props.onClick} />
            </div>
        )
    }
}

export default Operators