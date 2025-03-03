// bringing in the required import from 'react-router-dom'
// import { React, useState } from 'react';
import { Outlet } from 'react-router-dom';
// import '@styles/styles.sass'

import React from 'react'

// import About from '@components/About'
// import Contact from '@components/Contact'
// import Footer from '@/components/Footer'
// import Home from '@components/Home'
// import NavBar from '@components/NavBar'
// import Projects from '@components/Projects'
// import Resume from '@components/Resume'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import "./App.css";
// import ReactDOM from 'react';
// import React, { Component } from 'react';

  const App = () => {
    return (
      <>
        <Navbar/>
        <div className="body">
          <Outlet className="Outlet" />
        </div>
        <Footer class="Footer"/>
      </>
    );
  }

export default App;
// re-export everything
// export * from '@testing-library/react-native';
