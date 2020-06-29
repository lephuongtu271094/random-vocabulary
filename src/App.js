import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './route';

function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
