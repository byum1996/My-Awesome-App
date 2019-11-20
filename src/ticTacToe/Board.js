import React from 'react'
import Square from './Square'
import './game.css'

// This is a class react component
// Class react component has to have at lease "render" function implemented
// alwasy extends from React.Component
// props in class react component is available under 'this' keyword
// you can access it by "this.props"
class Board extends React.Component {

  // helper function created to make this code more readable
  renderSquare(i) {
    return (
        // this like invoking Square component with two parameters
        // onclick and value
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
      // render function must return a JSX
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board