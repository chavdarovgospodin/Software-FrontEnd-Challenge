import React from 'react';
import { Tabs, Select, MenuItem } from '@material-ui/core';

require('./Navigation.scss');

const Navigation = () => {
  return (
    <Tabs indicatorColor="primary" textColor="primary" centered className="navigation">
      <div className="nav">
        <p>Home</p>
      </div>
      <div className="nav">
        <p>Contact</p>
      </div>
      <div className="nav">
        <p>Arena</p>
      </div>
      <div className="nav">
        <p>Guilds</p>
      </div>
      <div className="nav active">
        <p>Ranking</p>
      </div>
      <Select className="nav" labelId="label" id="select" value="Vip">
        <MenuItem>Dropdown 1</MenuItem>
        <MenuItem>Dropdown 2</MenuItem>
        <MenuItem>Dropdown 3</MenuItem>
      </Select>
    </Tabs>
  );
};

export default Navigation;
