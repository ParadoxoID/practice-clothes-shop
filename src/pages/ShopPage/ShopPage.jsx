import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded
} from '../../redux/shop/shopSelectors';
import { fetchCollectionsStart } from './../../redux/shop/shopActions';

import SpinnerHoc from '../../components/SpinnerHoc/SpinnerHoc';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const CollectionOverviewWithSpinner = SpinnerHoc(CollectionsOverview);
const CollectionPageWithSpinner = SpinnerHoc(CollectionPage);

const ShopPage = () => {
  const dispatch = useDispatch();

  const { isFetching, isCollectionsLoaded } = useSelector(
    createStructuredSelector({
      isFetching: selectIsCollectionsFetching,
      isCollectionsLoaded: selectIsCollectionsLoaded
    })
  );

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  return (
    <div className="shop-page">
      <Routes>
        <Route
          index
          element={<CollectionOverviewWithSpinner isLoading={isFetching} />}
        />
        <Route
          path={`:collectionId`}
          element={
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} />
          }
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
