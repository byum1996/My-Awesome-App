import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ display }) => <h1>{display}</h1>;

Display.propTypes = {
  display: PropTypes.number.isRequired
};

export default Display;
