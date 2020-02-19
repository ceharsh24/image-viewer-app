import {
  STORE_ALL_IMAGES, VIEW_SELECTED_IMAGE, RESET_SELECTED_IMAGE,
} from '../constants/attributeLibrary';

const initialState = {
  listOfAllImages: [],
  selectedImage: {},
};

export default function imageReducers(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case STORE_ALL_IMAGES:
      return {
        ...state,
        listOfAllImages: data,
      };
    case VIEW_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: data,
      };
    case RESET_SELECTED_IMAGE:
      return {
        ...state,
        selectedImage: {},
      };
    default:
      return state;
  }
}
