import React from 'react';
import { ErrorPopup, Navigation, Table, ReloadButton } from './components';
import { Container, Box, TablePagination } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <Container maxWidth="xl" className="container">
      <div className="App">
        <Box mb={8}>
          <Navigation />
        </Box>
        <Box mb={8} className="reload-container">
          <ReloadButton />
        </Box>

        <Table />
        <Box mt={8} className="footer">
          <TablePagination />
        </Box>
      </div>
      {/* <ErrorPopup /> */}
    </Container>
  );
}

export default App;
