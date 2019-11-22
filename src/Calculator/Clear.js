import React from 'react';
import PropTypes from 'prop-types';
import './calculator.css';

const Clear = ({ onClick }) => (
  // eslint-disable-next-line react/button-has-type
  <button className="number" onClick={onClick}>
    C
  </button>
);

Clear.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Clear;
