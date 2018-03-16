import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import auth from './_reducers/AuthReducer';
import json from './_reducers/JsonReducer';
import restaurant from './_reducers/RestaurantReducer';
import content from './_reducers/ContentReducer';

const reducers = combineReducers({
  auth,
  json,
  restaurant,
  content
});




export default createStore (
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
)
