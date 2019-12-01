import React, { useState, useEffect } from 'react';
import { ErrorPopup, Navigation, Table, ReloadButton } from './components';
import { Container, Box, TablePagination, CircularProgress } from '@material-ui/core';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import('./Data/ranking.json')
      .then(response => {
        setData(response.default);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <Container maxWidth="xl" className="container">
      <div className="App">
        <Box mb={8}>
          <Navigation />
        </Box>
        <Box className="spinner">{isLoading ? <CircularProgress /> : null}</Box>
        <Box mb={8} className="reload-container">
          <ReloadButton />
        </Box>
        <Table items={data} />
        <Box mt={8} className="footer">
          {/* <TablePagination /> */}
        </Box>
      </div>
      {data && data.status === 0 ? <ErrorPopup /> : null}
    </Container>
  );
}

export default App;
