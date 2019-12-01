import React, { useState } from 'react';
import { Container, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
require('./Table.scss');

const title = 'Ranking table';
const tableTitles = ['Rank', 'Name', 'Club', 'Level', 'Experience', 'Messages'];
const Table = () => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div className="table-header">
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
        <h2>{title}</h2>
      </div>

      <table>
        <tr>
          <th className="rank">Rank</th>
          <th className="name">Name</th>
          <th className="club">Club</th>
          <th className="level">Level</th>
          <th className="experience">Experience</th>
          <th className="messages">
            {/* <EmailTwoToneIcon /> */}
            Messages
          </th>
        </tr>
        <tr>
          <td>1</td>
          <td>MarkMarkMarkMark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </table>
    </>
  );
};

export default Table;
