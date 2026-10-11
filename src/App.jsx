import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Yorushika from './pages/Yorushika';
import Wuwa from './pages/Wuwa';
import Food from './pages/Food';
import Github from './pages/Github';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yorushika" element={<Yorushika />} />
        <Route path="/wuwa" element={<Wuwa />} />
        <Route path="/food" element={<Food />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </Router>
  );
}

export default App;