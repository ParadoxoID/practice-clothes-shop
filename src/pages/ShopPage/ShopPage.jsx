import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collection, onSnapshot } from 'firebase/firestore';
import { updateCollections } from '../../redux/shop/shopActions';

import { db, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import SpinnerHoc from '../../components/SpinnerHoc/SpinnerHoc';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const CollectionOverviewWithSpinner = SpinnerHoc(CollectionsOverview);
const CollectionPageWithSpinner = SpinnerHoc(CollectionPage);

const ShopPage = () => {
  const unsubscribeFromSubscribe = useRef(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = collection(db, 'collections');

    unsubscribeFromSubscribe.current = onSnapshot(collectionRef, async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });
  }, []);

  return (
    <div className="shop-page">
      <Routes>
        <Route index element={<CollectionOverviewWithSpinner isLoading={loading} />} />
        <Route
          path={`:collectionId`}
          element={<CollectionPageWithSpinner isLoading={loading} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
