import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/component'
import Homepage from './views/homepage/component'
import AboutUs from './views/about_us/component'
import Ubication from './views/ubication/component'
import Login from './views/login/component'
import Footer from './components/footer/component'
import Catalog from './views/catalog/component'
import StandardCat from './views/catalog/standard-cat/component'
import LuxuryCat from './views/catalog/luxury-cat/component'
import TraditionalCat from './views/catalog/traditional-cat/component'

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
            <Route path="/rooms/standard_cat" element={<StandardCat />} />
            <Route path="/rooms/luxury_cat" element={<LuxuryCat />} />
            <Route path="/rooms/traditional_cat" element={<TraditionalCat />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  );
}
export default App;
