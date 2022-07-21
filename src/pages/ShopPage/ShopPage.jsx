import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from '../../redux/shop/shopSelectors';

import SpinnerHoc from '../../components/SpinnerHoc/SpinnerHoc';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const CollectionOverviewWithSpinner = SpinnerHoc(CollectionsOverview);
const CollectionPageWithSpinner = SpinnerHoc(CollectionPage);

const ShopPage = () => {
  const dispatch = useDispatch();

  const { isFetching, isCollectionsLoaded } = useSelector(
    createStructuredSelector({
      isFetching: selectIsCollectionFetching,
      isCollectionsLoaded: selectIsCollectionsLoaded
    })
  );

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
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
          element={<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;
