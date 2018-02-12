import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import auth from './_reducers/AuthReducer';
import json from './_reducers/JsonReducer';
import restaruant from './_reducers/RestaurantReducer';
import question from './_reducers/QuestionReducer';
import content from './_reducers/ContentReducer';
import user from './_reducers/UserReducer';
import page from './_reducers/PageReducer';

const reducers = combineReducers({
  auth,
  json,
  restaruant,
  content,
  question,
  user,
  page
});




export default createStore (
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
)
