import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

require('./ErrorPopup.scss');

const ErrorPopup = (errorMessage, popup) => {
  const [showPopup, setShowPopup] = useState(true);
  const showPopupHandler = () => {
    setShowPopup(false);
  };
  return showPopup ? (
    <Container className="error-popup">
      <IconButton onClick={showPopupHandler}>
        <CloseIcon />
      </IconButton>
      <h2>ERROR</h2>
      <h3>Error message</h3>
    </Container>
  ) : null;
};

ErrorPopup.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorPopup;
