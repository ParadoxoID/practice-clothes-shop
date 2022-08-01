import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal
} from './../../redux/cart/cartSelectors';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './CheckoutPage.scss';

const CheckoutPage = () => {
  const { cartItems, total } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      total: selectCartTotal
    })
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
