import {
  STORE_ALL_IMAGES, VIEW_IMAGE,
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
    case VIEW_IMAGE:
      return {
        ...state,
        selectedImage: data,
      };
    default:
      return state;
  }
}
