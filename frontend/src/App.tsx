import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/component';
import Homepage from './views/homepage/component';
import AboutUs from './views/about_us/component';
import Ubication from './views/ubication/component';
import Login from './views/login/component';
import Footer from './components/footer/component';
import Catalog from './views/catalog/component';
import Deluxe from './views/catalog/deluxe/component';
import Standard from './views/catalog/standard/component';
import Traditional from './views/catalog/traditional/component';

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <div className="main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/ubication" element={<Ubication />} />
            <Route path="/rooms" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deluxe" element={<Deluxe />} />
            <Route path="/traditional" element={<Traditional />} />
            <Route path="/standard" element={<Standard />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}
export default App;
