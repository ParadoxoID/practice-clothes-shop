import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelectors';

import './CollectionPage.scss';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const { title, items } = useSelector(selectCollection(collectionId));
  console.log(items)

  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default CollectionPage;
