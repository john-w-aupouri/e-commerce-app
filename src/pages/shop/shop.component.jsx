import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// Components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Pages
import CollectionPage from '../collection/collection.component';

// Actions / Thunk
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

// Selectors
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

// HOC
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() { 
    const { match, isFetchingCollections, isCollectionsLoaded } = this.props;
  
    return ( 
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          // If the selector "isCollectingFetching" is false then render HOC spinner.
          render={props => 
            <CollectionsOverviewWithSpinner 
              isLoading={isFetchingCollections} 
              {...props} 
            />
          } 
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          /* 
            Default value for "isFetching" is false, 
            so set the "isCollectionsLoaded" selector to it's opposite to not render HOC spinner. 
            Since the "isLoading" state within the reducer will be false 
            and we need it to be true to render our collections.
          */
          render={props => 
            <CollectionPageWithSpinner 
              isLoading={!isCollectionsLoaded} 
              {...props} 
            />
          } 
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
 
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShopPage);
