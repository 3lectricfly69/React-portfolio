import { Outlet } from 'react-router-dom';
import React from 'react';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="body">
        <Outlet />
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default App;
