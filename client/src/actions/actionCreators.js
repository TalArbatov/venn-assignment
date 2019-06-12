
import * as TYPES from './actionTypes';
import axios from 'axios';
import { bindActionCreators } from 'C:/Users/Tal/AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';

export const fetchImages = (page, searchTerm, isNewPage) => {
  console.log('fetchImages actionCreator, page: ' + page + ' searchTerm: ' + searchTerm)
  return dispatch => {
    dispatch(fetchImagesRequest())
    const apiKey = 'bac9f1ccfd854f27894fd47c4f01b1e8';
    console.log(searchTerm)
    //const {page, perPage, apiKey} = apiConfig;
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=${apiKey}&content_type=1&is_getty=1&page=${page}&per_page=100&text=${searchTerm}`)
    .then(res => {
      dispatch(fetchImagesSuccess(res.data.photos.photo, isNewPage))
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

export const fetchImagesSuccess = (images, isNewPage) => {
  return {
    type: TYPES.FETCH_IMAGES_SUCCESS,
    payload: {
      images,
      isNewPage
    }
  }
}

export const fetchImagesError = err => {
  return {
    type: TYPES.FETCH_IMAGES_ERROR,
    payload: err
  }
}



export const saveSearch = searchValue => {
  
  if(localStorage.saves) {
    const saves = JSON.parse(localStorage.saves);
  const newSaves = [...saves, searchValue]
  localStorage.saves = JSON.stringify(newSaves)
  
  }
else
  localStorage.saves = JSON.stringify([searchValue])

  return {
    type: TYPES.SAVE_SEARCH,
    payload: searchValue
  }
}
export const showSearch = index => {
  const allSaves = JSON.parse(localStorage.saves);

  return {
    type: TYPES.SHOW_SEARCH,
    payload: allSaves[index]
  }
}