import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Courses from './Components/Courses';
import About from './Components/About';
import About from './Components/Navbar';


function App() {
  return (
    <BrowserRouter><Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/no" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;