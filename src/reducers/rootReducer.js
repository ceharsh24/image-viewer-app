import { combineReducers } from 'redux';
import imageReducer from './imageReducers';

const rootReducer = combineReducers({
  images: imageReducer,
});

export default rootReducer;
