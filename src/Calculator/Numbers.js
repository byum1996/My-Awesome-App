import React from 'react';
import Number from './Number'

class Numbers extends React.Component {
    renderNumber(i){
        return(
            <Number 
                value={i}
                onClick={(e) => console.log(e)}
            />
        )
    }
    
    render(){
        return(
            <div>
                <div className="board-row">
                    {this.renderNumber(7)}
                    {this.renderNumber(8)}
                    {this.renderNumber(9)}
                </div>
                <div className="board-row">
                    {this.renderNumber(4)}
                    {this.renderNumber(5)}
                    {this.renderNumber(6)}
                </div>
                <div className="board-row">
                    {this.renderNumber(1)}
                    {this.renderNumber(2)}
                    {this.renderNumber(3)}
                </div>
                <div className="board-row">
                    {this.renderNumber(0)}
                </div>
            </div>
            
        )
    }
}

export default Numbers