import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Components
import CartIcon from './cart-icon.component';

// Selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// Actions
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const CartIconContainer = compose(connect(mapStateToProps, mapDispatchToProps))(
  CartIcon
);

export default CartIconContainer;
