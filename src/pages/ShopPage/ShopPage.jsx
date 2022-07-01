import React, { useState } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

import SHOP_DATA from './shop.data';

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  );
};

export default ShopPage;
