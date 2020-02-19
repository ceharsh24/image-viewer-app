import {
  FETCH_ALL_IMAGES, STORE_ALL_IMAGES, VIEW_SELECTED_IMAGE, RESET_SELECTED_IMAGE,
} from '../constants/attributeLibrary';

export const fetchAllImages = () => ({
  type: FETCH_ALL_IMAGES,
});

export const storeAllImages = (data) => ({
  type: STORE_ALL_IMAGES,
  data,
});

export const viewSelectedImage = (data) => ({
  type: VIEW_SELECTED_IMAGE,
  data,
});

export const resetSelectedImage = () => ({
  type: RESET_SELECTED_IMAGE,
});
