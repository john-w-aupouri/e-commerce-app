import { takeLatest, call, put, all } from 'redux-saga/effects';

// Firebase
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

//  Actions
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions'

// Types
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.log("I am a saga in control of this fetching action");
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionSnapshotToMap, 
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  } 
}

export function* fetchCollectionsStart() {
  // we only want to issue api call one time
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
} 

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
