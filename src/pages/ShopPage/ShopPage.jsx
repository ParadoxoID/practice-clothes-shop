import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = () => {
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
