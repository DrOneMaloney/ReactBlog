import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        {/* NavBar */}
        <NavBar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<div className="page-content"><Home /></div>} />
          <Route path="/about" element={<div className="page-content"><About /></div>} />
          <Route path="/projects" element={<div className="page-content"><Projects /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
