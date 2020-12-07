import { all, takeLatest, call, put } from 'redux-saga/effects';

// Actions
import { clearCart } from './cart.actions';

// Types
import UserActionTypes from '../user/user.types';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

// listening for when user has signed out
export function* onSignOutSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_SUCCESS, 
    clearCartOnSignOut
  )
}

export function* cartSagas() {
  yield(all([call(onSignOutSuccess)]))
}
