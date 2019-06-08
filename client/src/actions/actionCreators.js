import * as TYPES from './actionTypes';
import axios from 'axios';
import { bindActionCreators } from 'C:/Users/Tal/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';

export const fetchImages = () => {
  return dispatch => {
    dispatch(fetchImagesRequest())
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1')
    .then(res => {
      console.log(res.data)
      dispatch(fetchImagesSuccess(res.data.photos.photo))
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchImagesError(err))
    })
  }
}

export const fetchImagesRequest = () => {
  return {
    type: TYPES.FETCH_IMAGES_REQUEST
  }
}

export const fetchImagesSuccess = images => {
  return {
    type: TYPES.FETCH_IMAGES_SUCCESS,
    payload: images
  }
}

export const fetchImagesError = err => {
  return {
    type: TYPES.FETCH_IMAGES_ERROR,
    payload: err
  }
}