import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import './CartIcon.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  const toggleCartHandler = () => dispatch(toggleCartHidden());

  return (
    <div onClick={toggleCartHandler} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
