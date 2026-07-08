import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation'; 
import Anniversary from './components/Anniversary';
import Festivals from './components/Festivals';

import Home from './components/Home';
import KidsSpecial from './components/KidsSpecial';
import BabyShower from './components/BabyShower';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
     
      <Navigation />

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/festival" element={<Festivals />} />
        <Route path="/festival" element={<KidsSpecial />} />
       <Route path="/babyshower" element={<BabyShower />} />
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;