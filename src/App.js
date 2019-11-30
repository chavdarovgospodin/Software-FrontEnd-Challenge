import React from 'react';
import { ErrorPopup, Navigation } from './components';
import { Container } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <Container>
      <div className="App">
        <Navigation />
        <ErrorPopup />
      </div>
    </Container>
  );
}

export default App;
