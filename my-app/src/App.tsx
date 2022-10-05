import React from 'react';
import Card from './components/Card';
import NavBar from './components/NavBar';
import { Grid } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <NavBar/>
    <Card/>
    </>
  );
}

export default App;
