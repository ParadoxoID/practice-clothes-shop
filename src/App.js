import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';

import './App.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
};

export default App;
