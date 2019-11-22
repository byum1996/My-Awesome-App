import React from 'react';
import PropTypes from 'prop-types';
import './calculator.css';

const Calculate = ({ onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="number" onClick={() => onClick('=')}>
    =
  </button>
);

Calculate.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Calculate;
