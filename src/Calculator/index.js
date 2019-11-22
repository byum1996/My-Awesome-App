import React from 'react';
import Display from './Display';
import Clear from './Clear';
import Operators from './Operators';
import Numbers from './Numbers';
import Calculate from './Calculate';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wasLastClickOperation: false,
      calculation: ''
    };

    this.onNumberClick = this.onNumberClick.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
    this.onOperatorClick = this.onOperatorClick.bind(this);
    this.onCalculateClick = this.onCalculateClick.bind(this);
  }

  onNumberClick(value) {
    const { calculation } = this.state;
    this.setState({
      calculation: calculation + value
    });
  }

  onClearClick() {
    this.setState({
      calculation: ''
    });
  }

  onOperatorClick(value) {
    const { calculation, wasLastClickOperation } = this.state;
    if (!wasLastClickOperation) {
      this.setState({
        wasLastClickOperation: true,
        calculation: calculation + value
      });
    }
  }

  onCalculateClick() {
    // TODO: Perform calculation here and update display
    this.setState({
      calculation: 'Calculate!!!!'
    });
  }

  render() {
    const { calculation } = this.state;

    return (
      <div className="calculator">
        <Display calculation={calculation} />
        <div className="main">
          <div className="numbers">
            <Clear onClick={this.onClearClick} />
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
