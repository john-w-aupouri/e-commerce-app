import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Selectors
import { selectIsCollectionFetching, selectCollectionsForPreview  } from '../../redux/shop/shop.selectors';

// HOC
import WithSpinner from '../with-spinner/with-spinner.component';

// Components
import CollectionsOverview from './collections-overview.component';

/* 
  "Container Pattern"
  Containers don't render anything. They just pass down props.
  Since we are no longer passing props via the shop component.
  We must ensure that what we pass here is named the same as what's expected where it is heading too. 
  In this case that would be our HOC CollectionsOverviewWithSpinner on the Shop page.
*/

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  collections: selectCollectionsForPreview
});

// compose evalutes from right to left
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview); 

export default CollectionsOverviewContainer;
