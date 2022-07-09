import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import Button from './../Button/Button';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickCheckoutHandler = () => {
    navigate('/checkout');
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={clickCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
