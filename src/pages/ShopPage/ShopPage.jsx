import React, { useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collection, onSnapshot } from 'firebase/firestore';
import { updateCollections } from '../../redux/shop/shopActions';

import { db, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = () => {
  const unsubscribeFromSubscribe = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = collection(db, 'collections');

    unsubscribeFromSubscribe.current = onSnapshot(collectionRef, async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
    });
  }, []);

  return (
    <div className="shop-page">
      <Routes>
        <Route index element={<CollectionsOverview />} />
        <Route path={`:collectionId`} element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
