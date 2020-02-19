import { call, put, takeEvery } from 'redux-saga/effects';
import { storeAllImages } from '../actions/imageActions';
import { FETCH_ALL_IMAGES } from '../constants/attributeLibrary';

export default function* fetchAllImages() {
  let responseBody;
  const response = yield call(fetch, 'https://picsum.photos/v2/list');
  if (response && response.status === 200) {
    responseBody = yield response.json();
    yield put(storeAllImages(responseBody));
  } else {
    console.error('Error while Fetching Data');
  }
}

export function* watchImageCommands() {
  yield takeEvery(FETCH_ALL_IMAGES, fetchAllImages);
}
