import React from 'react';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import { Avatar } from '@material-ui/core';
import avatar from '../../images/avatar.webp';

require('./TableRow.scss');

const TableRow = ({ rank, name, club, level, experience }) => (
  <tbody>
    <tr className="table-row">
      <td>{rank}</td>
      <td>
        <Avatar alt="Remy Sharp" src={avatar} />
        <p>{name}</p>
      </td>
      <td>{club}</td>
      <td>{level}</td>
      <td>{experience}</td>
      <td>
        <EmailTwoToneIcon />
      </td>
    </tr>
  </tbody>
);

export default TableRow;
