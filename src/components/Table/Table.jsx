import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PropTypes from 'prop-types';
import { TableRow } from './index';

require('./Table.scss');

const title = 'Ranking table';

const Table = ({ items, isClicked }) => {
  const [expand, setExpand] = useState(true);
  const [data, setData] = useState([]);
  const expandHandler = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    let dataObject = items && items.ranking && Object.values(items.ranking);
    dataObject &&
      dataObject.forEach((el, index) => {
        el.rank = index + 1;
      });
    setData(data => dataObject);
  }, [items]);
  useEffect(() => {
    if (isClicked) {
      let dataObject = items && items.ranking && Object.values(items.ranking);
      dataObject &&
        dataObject.forEach((el, index) => {
          el.rank = index + 1;
        });
      dataObject.map(el => {
        if (el.experience) {
          el.experience = parseInt(el.experience);
        }
      });
      dataObject.sort((a, b) => (a.experience > b.experience ? 1 : -1));
      setData(data => dataObject);
    }
  }, [isClicked]);
  return (
    <>
      <div className="table-header">
        <IconButton onClick={expandHandler}>
          {expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        <h2>{title}</h2>
      </div>
      {expand ? (
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <th className="rank">Rank</th>
              <th className="name">Name</th>
              <th className="club">Club</th>
              <th className="level">Level</th>
              <th className="experience">Experience</th>
              <th className="messages">Messages</th>
            </tr>
          </tbody>
          {data &&
            data.slice(0, 5).map((el, index) => {
              return <TableRow key={index} {...el} />;
            })}
        </table>
      ) : null}
    </>
  );
};

Table.propTypes = {
  isClicked: PropTypes.bool,
};

export default Table;
