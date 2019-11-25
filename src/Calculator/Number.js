import React from 'react';
import PropTypes from 'prop-types';
import './calculator.css';

const Number = ({ value, onClick }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className="number" onClick={() => onClick(value)}>
      {value}
    </button>
  )};

Number.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Number;
