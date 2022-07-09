import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { addItem } from '../../redux/cart/cartActions';
import './CollectionItem.scss';

const CollectionItem = ({ item }) => {
  const { imageUrl, name, price } = item;
  const dispatch = useDispatch();

  const addCartHandler = () => dispatch(addItem({ item }));

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={addCartHandler} inverted>
        Add to cart
      </Button>
    </div>
  );
};

export default CollectionItem;
