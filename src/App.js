import React from 'react';
import Home from './Home';
import Stopwatch from './Stopwatch';
import Count from './Count';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/countdown" element={<Count />} />
      </Routes>
    </Router>
  );
}

export default App;
