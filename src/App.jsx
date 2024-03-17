import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Signup from './Login/Signup';
import Home from './Landing Page/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Footer/Footer';
import Error from './Error/Error';
 // Import your Login component here

function App() {
  return (
    <>
     {/* <Navbar/> */}
      <Router>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Login/>} /> {/* Render Login component when URL matches '/' */}
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/error" element={<Error/>} />
        </Routes>
      </Router>
      {/* <Error/> */}
    </>
  );
}

export default App;
