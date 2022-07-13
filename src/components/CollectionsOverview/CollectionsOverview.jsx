import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './CollectionsOverview.scss';

const CollectionsOverview = () => {
  const { collections } = useSelector(
    createStructuredSelector({ collections: selectCollectionsForPreview })
  );

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...props }) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
