import React, { useState, useEffect } from 'react';
import { ErrorPopup, Navigation, Table, ReloadButton } from './components';
import { Container, Box, CircularProgress } from '@material-ui/core';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    import('./Data/ranking.json')
      .then(response => {
        setData(response.default);
        setIsLoading(false);
        setIsClicked(false);
      })
      .catch(error => console.log(error));
  }, [isClicked]);

  const getDataOnClickedBtn = clicked => {
    setIsClicked(isClicked => clicked);
  };
  return (
    <Container maxWidth="xl" className="container">
      <div className="App">
        <Box mb={8}>
          <Navigation />
        </Box>
        <Box className="spinner">{isLoading ? <CircularProgress /> : null}</Box>
        <Box mb={8} className="reload-container">
          <ReloadButton clicked={getDataOnClickedBtn} isClicked={isClicked} />
        </Box>
        <Table items={data} isClicked={isClicked} />
      </div>
      {data && data.status === 0 ? <ErrorPopup /> : null}
    </Container>
  );
}

export default App;
