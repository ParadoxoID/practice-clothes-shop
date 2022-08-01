import { collection, getDocs } from 'firebase/firestore';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  db
} from '../../firebase/firebase.utils';
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess
} from './shopActions';

import ShopActionTypes from './shopTypes';

export function* fetchCollectionsAsync() {
  yield console.log('fetchCollectionAsync');

  try {
    const collectionRef = collection(db, 'collections');

    const snapshot = yield getDocs(collectionRef);
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
