import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; 
import Anniversary from './components/Anniversary';


import Home from './components/Home';

function App() {
  return (
    <Router>

      <Navigation />

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anniversary" element={<Anniversary />} />
     
      </Routes>
    </Router>
  );
}

export default App;