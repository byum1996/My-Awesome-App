import React from 'react';
import PropTypes from 'prop-types';
import './calculator.css';

const Operator = ({ value, onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="number" onClick={() => onClick(value)}>
    {value}
  </button>
);

Operator.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Operator;
