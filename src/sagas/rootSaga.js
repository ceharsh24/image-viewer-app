import { all, fork } from 'redux-saga/effects';
import { watchImageCommands } from './imageSaga';

export default function* rootSaga() {
  yield all([
    fork(watchImageCommands),
  ]);
}
