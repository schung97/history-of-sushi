import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import auth from './_reducers/AuthReducer';
import json from './_reducers/JsonReducer';
import question from './_reducers/QuestionReducer';
import content from './_reducers/ContentReducer';
import user from './_reducers/UserReducer';

const reducers = combineReducers({
  auth,
  json,
  question,
  content,
  user
});




export default createStore (
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
)
