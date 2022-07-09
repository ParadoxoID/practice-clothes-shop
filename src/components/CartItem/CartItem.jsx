import React, { memo } from 'react';

import './CartItem.scss';

const CartItem = memo(({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="Item img" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
));

export default CartItem;
