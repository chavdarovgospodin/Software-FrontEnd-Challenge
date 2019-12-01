import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import HourglassEmptyTwoToneIcon from '@material-ui/icons/HourglassEmptyTwoTone';

require('./ReloadButton.scss');

const ReloadButton = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    if (seconds === 11) {
      reset();
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return (
    <div className="reload">
      <div className="reload-button">
        <IconButton onClick={toggle} disabled={isActive}>
          Reload
          <ArrowRightTwoToneIcon />
        </IconButton>
      </div>
      {isActive ? (
        <div className="progress-bar">
          <HourglassEmptyTwoToneIcon />
          <p>{seconds}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ReloadButton;
