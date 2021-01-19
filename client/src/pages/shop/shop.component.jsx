import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

// Components
const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));

// Pages
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart, match } ) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return ( 
    <div className='shop-page'>
      <Suspense>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
 
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);