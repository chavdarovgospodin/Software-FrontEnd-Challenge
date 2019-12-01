import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

require('./ErrorPopup.scss');

const ErrorPopup = ({ errorMessage, error, popup }) => {
  const [showPopup, setShowPopup] = useState(true);
  const showPopupHandler = () => {
    setShowPopup(false);
  };
  return showPopup ? (
    <div className="error-popup">
      <IconButton onClick={showPopupHandler}>
        <CloseIcon />
      </IconButton>
      <h2>{error}</h2>
      <h3>{errorMessage}</h3>
    </div>
  ) : null;
};

ErrorPopup.propTypes = {
  errorMessage: PropTypes.string,
};

ErrorPopup.defaultProps = {
  errorMessage: 'Error message',
  error: 'ERROR',
};

export default ErrorPopup;
