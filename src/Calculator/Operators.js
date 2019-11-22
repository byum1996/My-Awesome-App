import React from 'react';
import PropTypes from 'prop-types';
import Operator from './Operator';
import './calculator.css';

const Operators = ({ onClick }) => (
  <div className="operators">
    <Operator value="+" onClick={onClick} />
    <Operator value="x" onClick={onClick} />
    <Operator value="-" onClick={onClick} />
    <Operator value="/" onClick={onClick} />
  </div>
);

Operators.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Operators;
