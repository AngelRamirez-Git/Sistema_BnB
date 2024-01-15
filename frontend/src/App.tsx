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
import Room_Template from './views/catalog/room/component';

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
            <Route path="/rooms/Room_Template" element={<Room_Template />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}
export default App;
