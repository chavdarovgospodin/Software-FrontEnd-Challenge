import React from 'react';
import { IconButton } from '@material-ui/core';
import ArrowRightTwoToneIcon from '@material-ui/icons/ArrowRightTwoTone';
import HourglassEmptyTwoToneIcon from '@material-ui/icons/HourglassEmptyTwoTone';

require('./ReloadButton.scss');

const ReloadButton = ({ timer }) => {
  return (
    <div className="btn">
      <div className="reload-button">
        <IconButton>
          Reload
          <ArrowRightTwoToneIcon />
        </IconButton>
      </div>
      <div className="progress-bar">
        <HourglassEmptyTwoToneIcon />
        <p>{timer}</p>
      </div>
    </div>
  );
};

export default ReloadButton;
