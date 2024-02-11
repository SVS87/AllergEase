import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import { Footer, Getstarted, Home, Navbar, Notes, Flashcards, Essay } from "./components";

//routes:
//  notes creater
//  essay analysis
//  flashcards
function App() {
  
  return (
    <div class="app-container">
      <Router>
        <Navbar />
        <div className="content">

          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route className="getStartedbg" path='/get-started' element={<Getstarted />} />
              <Route className="getStartedbg" path='/essay' element={<Essay />} />
              <Route className="getStartedbg" path='/notes' element={<Notes />} />
              <Route className="getStartedbg" path='/flashcards' element={<Flashcards />} />
          </Routes>
        </div>
        <Footer className="footer"/>
      </Router>
    </div>
  );
};
  
export default App;
