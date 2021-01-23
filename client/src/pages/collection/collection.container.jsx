import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Components
import CollectionPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

// Selectors
import {
  selectIsCollectionsLoaded,
  selectCollection,
} from '../../redux/shop/shop.selectors';

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
