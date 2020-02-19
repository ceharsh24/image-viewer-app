import {
  FETCH_ALL_IMAGES, STORE_ALL_IMAGES,
} from '../constants/attributeLibrary';

export const fetchAllImages = () => ({
  type: FETCH_ALL_IMAGES,
});

export const storeAllImages = (data) => ({
  type: STORE_ALL_IMAGES,
  data,
});
