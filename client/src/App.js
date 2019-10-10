import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <p>Album reviews</p>
      </div>
    </Router>
  );
}

export default App;
