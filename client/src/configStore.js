import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import galleryReducer from './reducers/galleryReducer';


const configStore = () => createStore(
  combineReducers({
    galleryReducer
  }), compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)


export default configStore;
