import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "../RouterFetch/About";
import Contact from "../RouterFetch/Contact";

const Home = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </header>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Home;
