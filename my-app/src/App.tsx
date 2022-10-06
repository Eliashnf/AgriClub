import React from 'react';
import Card from './components/Card';
import NavBar from './components/NavBar';
import { Grid } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';

function App() {
  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
