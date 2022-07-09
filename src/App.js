import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { onSnapshot } from 'firebase/firestore';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/SignInAndSignUpPage';

import Header from './components/Header/Header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, snapShot => {
          dispatch(setCurrentUser({ id: snapShot.id, ...snapShot.data() }));
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => unsubscribeFromAuth.current();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" replace /> : <SignInAndSignUpPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
