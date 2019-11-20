import React from 'react'

class Number extends React.Component{
    render(){
        return(
            <button className="number" onClick={() => this.props.onClick(this.props.value)}>
                {this.props.value}
            </button>
        )
    }
}

export default Number