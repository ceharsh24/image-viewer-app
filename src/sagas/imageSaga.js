import { call, put, takeEvery } from 'redux-saga/effects';
import { storeAllImages } from '../actions/imageActions';
import { FETCH_ALL_IMAGES } from '../constants/attributeLibrary';

export default function* fetchAllImages() {
  let responseBody;
  try {
    const response = yield call(fetch, 'https://picsum.photos/v2/list');
    responseBody = yield response.json();
  } catch (e) {
    // ToDo: Error Handling
    console.error(e);
  }
  yield put(storeAllImages(responseBody));
}

export function* watchImageCommands() {
  yield takeEvery(FETCH_ALL_IMAGES, fetchAllImages);
}
