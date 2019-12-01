import React, { useState } from 'react';
import { Container, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { TableRow } from './index';

require('./Table.scss');

const title = 'Ranking table';
const tableTitles = ['Rank', 'Name', 'Club', 'Level', 'Experience', 'Messages'];
const Table = () => {
  const [expand, setExpand] = useState(false);
  const expandHandler = () => {
    setExpand(!expand);
  };
  return (
    <>
      <div className="table-header">
        <IconButton onClick={expandHandler}>
          {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        <h2>{title}</h2>
      </div>
      {expand ? (
        <table cellspacing="0" cellpadding="0">
          <tr>
            <th className="rank">Rank</th>
            <th className="name">Name</th>
            <th className="club">Club</th>
            <th className="level">Level</th>
            <th className="experience">Experience</th>
            <th className="messages">Messages</th>
          </tr>
          <TableRow rank="1" name="name name" club="club name" level="10" experience="111" />
        </table>
      ) : null}
    </>
  );
};

export default Table;
