import React, { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import Header from './components/Header/Header';

import { auth } from './firebase/firebase.utils';

import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth.current = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return () => unsubscribeFromAuth.current();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
