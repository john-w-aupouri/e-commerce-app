import { connect } from 'react-redux';
import { compose } from 'redux';

import CollectionItemComponent from './collection-item.component';

// Actions
import { addItem } from '../../redux/cart/cart.actions';

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

const CollectionItemContainer = compose(connect(mapDispatchToProps))(CollectionItemComponent)

export default CollectionItemContainer;