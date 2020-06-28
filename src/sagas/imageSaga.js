import { call, put, takeEvery } from 'redux-saga/effects';
import { storeAllImages } from '../actions/imageActions';
import { FETCH_ALL_IMAGES } from '../constants/attributeLibrary';

export default function* fetchAllImages() {
  let responseBody;
  try {
    const response = yield call(fetch, 'https://picsum.photos/v2/list');
    responseBody = yield response.json();
    yield put(storeAllImages(responseBody));
  } catch (e) {
    // eslint-disable-next-line no-console
    // Todo: Need to imlement Failure action
    console.error('Error while Fetching Data');
  }
}

export function* watchImageCommands() {
  yield takeEvery(FETCH_ALL_IMAGES, fetchAllImages);
}
