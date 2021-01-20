import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Selectors
import {
  selectIsCollectionsLoaded,
  selectCollection,
} from '../../redux/shop/shop.selectors';

// Components
import CollectionPage from './collection.component';

// HOC
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
  collection: (state, ownProps) =>
    selectCollection(ownProps.match.params.collectionId)(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
