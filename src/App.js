
import './App.scss';
// import { Routes, Route, Router } from 'react-router-dom'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Loader from 'react-loaders';
import Footer from './components/Footer/index'
import React, { useEffect, useState } from 'react';

function App() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <Router>
          <div className="app">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route index element={<Home/>} /> */}
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          <Footer/>
          </div>
        </Router>
      )} 
    </div>

  );
}

export default App;
