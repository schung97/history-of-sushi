import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import auth from './_public/AuthReducer';
import content from './_protected/ContentReducer';
import question from './_protected/QuestionReducer';

const reducers = combineReducers({
  auth,
  content,
  question
});




export default createStore (
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
)
