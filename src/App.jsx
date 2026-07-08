import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation'; 
import Anniversary from './components/Anniversary';
import Home from './components/Home';
import KidsSpecial from './components/KidsSpecial';
import BabyShower from './components/BabyShower';
import Footer from './components/Footer';
import Festivals from './components/Festivals';
import Wedding from './components/Wedding';
import Birthday from './components/Birthday';


function App() {
  return (
    <Router>
     
      <Navigation />

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anniversary" element={<Anniversary />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/kids-special" element={<KidsSpecial />} />
        <Route path="/baby-shower" element={<BabyShower />} />
        <Route path="/festivals" element={<Festivals />} />
      </Routes>
      <Footer/> 
    </Router>
  );
}

export default App;