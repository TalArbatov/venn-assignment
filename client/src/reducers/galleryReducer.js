import * as TYPES from '../actions/actionTypes';

const defaultState = {
  isLoading: false,
  images: [],
  counter: 0,
  errorMessage: null
}

const galleryReducer = (state = defaultState, action) => {
  switch(action.type) {
    case TYPES.FETCH_IMAGES_REQUEST:
      return {...state, isLoading: true}
    case TYPES.FETCH_IMAGES_SUCCESS: 
      return {...state, isLoading: false, images: action.payload}
    case TYPES.FETCH_IMAGES_ERROR:
      return {...state, isLoading: false, errorMessage: action.payload}
    default:
      return state;
  }
}

export default galleryReducer;