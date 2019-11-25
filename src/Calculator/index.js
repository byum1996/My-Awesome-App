import React from 'react';
import Display from './Display';
import Clear from './Clear';
import Operators from './Operators';
import Numbers from './Numbers';
import Calculate from './Calculate';
import './calculator.css';

// Best Practice
// Class componnent
// this is like saying Calculator will inherit a bunch of stuff from React.Component
class Calculator extends React.Component {
  // constructor function
  // is used to initialize internal state, if necessary
  // constructor function is called by React to initialize your react component
  // it has one parameter props
  constructor(props) {
    // when constructor function is used, you must call super(props)
    super(props);
    console.log('constructor::props', props);
    // this is not allowed
    // this.props.sang = 'isNotCool';

    // internal state to manage within the component
    this.state = {
      wasLastClickOperation: false,
      display: '',
      operand1: '',
      operand2: '',
      operation: ''
    };

    this.onNumberClick = this.onNumberClick.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
    this.onOperatorClick = this.onOperatorClick.bind(this);
    this.onCalculateClick = this.onCalculateClick.bind(this);
  }

  // helper functions. This can used by using 'this' keyword
  onNumberClick(number) {
    const { display, wasLastClickOperation } = this.state;
    if (!wasLastClickOperation) {
      this.setState({
        display: display + number,
        operand1: number
      });
    } else {
      this.setState({
        display: display + number,
        operand2: number
      });
    }
  }

  onClearClick() {
    this.setState({
      wasLastClickOperation: false,
      display: '',
      operand1: '',
      operand2: '',
      operation: ''
    });
  }

  onOperatorClick(operation) {
    const { display, wasLastClickOperation } = this.state;
    if (!wasLastClickOperation) {
      this.setState({
        wasLastClickOperation: true,
        display: display + operation,
        operation: operation
      });
    }
  }

  onCalculateClick() {
    // TODO: Perform calculation here and update display
    const { operand1, operand2, operation } = this.state;

    if (operand1 === '' || operand2 === '' || operation === '' ) {
      return;
    }
    
    let operationResult;
    if (operation === '+') {
      operationResult = operand1 + operand2;
    } else if (operation === '-') {
      operationResult = operand1 - operand2;
    } else if (operation === 'x') {
      operationResult = operand1 * operand2;
    } else if (operation === '/') {
      operationResult = operand1 / operand2;
    }

    this.setState({
      display: operationResult
    });
  }

  // React is going to call render function after all the intiailzation is done.
  // render function gets called whenever props or state changes.
  render() {
    console.log('index::render', this.state);
    const { display } = this.state;

    return (
      <div className="calculator">
        <Display display={display} />
        <div className="main">
          <div className="numbers">
            <Clear onClick={this.onClearClick} />
            {/* Calculator component is passing onNumberClick function as a value for onClick prop for Numbers component */}
            <Numbers onClick={this.onNumberClick} />
          </div>
          <div className="operations">
            <Operators onClick={this.onOperatorClick} />
            <Calculate onClick={this.onCalculateClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
