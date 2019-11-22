import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ calculation }) => <h1>{calculation}</h1>;

Display.propTypes = {
  calculation: PropTypes.string.isRequired
};

export default Display;
