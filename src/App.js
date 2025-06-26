import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Identity from './pages/Identity';
import Skills from './pages/Skills';
import Devlog from './pages/Devlog';

function App() {
  return (
    <Router basename='/webport'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/career" element={<Careers/>}/>
        <Route path="/identity" element={<Identity/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/devlog" element={<Devlog/>}/>
      </Routes>
    </Router>
  );
}

export default App;
