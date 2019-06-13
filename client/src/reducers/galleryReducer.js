import * as TYPES from '../actions/actionTypes';

const savedSearches = localStorage.saves ? JSON.parse(localStorage.saves) : []

const defaultState = {
  searchMode: 'any',
  currentKeyword :'',
  isLoading: false,
  images: [],
  counter: 0,
  errorMessage: null,
  savedSearches,
}

const galleryReducer = (state = defaultState, action) => {
  switch(action.type) {
    case TYPES.ON_SEARCH_KEY_UP:
        return {...state, currentKeyword: action.payload}
    case TYPES.FETCH_IMAGES_REQUEST:
      return {...state, isLoading: true}
    case TYPES.FETCH_IMAGES_SUCCESS: 
    if(action.payload.isNewPage)
      return {...state, isLoading: false, images: [...state.images,...action.payload.images]}
    else
    return {...state, isLoading: false, images: [...action.payload.images]}
    case TYPES.FETCH_IMAGES_ERROR:
      return {...state, isLoading: false, errorMessage: action.payload}
    case TYPES.SAVE_SEARCH:
      return {...state, savedSearches: [...state.savedSearches, action.payload]}
    case TYPES.SHOW_SEARCH:
        return{...state, images: action.payload.values}
    case TYPES.TOGGLE_AND_OR:
        const newSearchMode = state.searchMode === 'any' ? 'all' : 'any';
        return {...state, searchMode: newSearchMode}
    default:
      return state;
  }
}

export default galleryReducer;